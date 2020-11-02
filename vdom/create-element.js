import { applyProperties } from './apply-properties'
import { createDomTree, handleThunk, handleActions, isThunk, isWidget, isVNode } from '../internal'

export function createElement(element, domParent) {
    var vnode
    var elementIsThunk = isThunk(element)

    if (elementIsThunk) {
      vnode = handleThunk(element).a
    } else {
      vnode = element
    }

    if (isWidget(vnode)) {
        node = vnode.init()
        return createDomTree(node)
    } else if (!isVNode(vnode)) {
        return null
    }

    var tagName = vnode.tagName
    var initial = vnode.initialProp
    var node, parent, layerParent
    
    if (domParent) {
      parent = domParent.self()

      if (parent instanceof AVLayer
       || parent instanceof ShapeLayer
       || parent instanceof TextLayer
       || parent instanceof CameraLayer
       || parent instanceof LightLayer
       || parent instanceof Layer) {
         layerParent = parent
         parent = parent.containingComp
       }
    }


    switch (tagName) {
      case 'root': 
        node = app.project.items
        break;
      case 'comp':
        if (!parent) {
          parent = app.project
        }

        if (initial[0] instanceof CompItem) {
          node = initial[0]

          if (initial[1] !== false) {
            node.parentFolder = parent === app.project ? parent.rootFolder : parent
          }
        } else if (typeof initial[0] === 'number') {
          node = app.project.itemByID(initial[0])

          if (initial[1] !== false) {
            node.parentFolder = parent === app.project ? parent.rootFolder : parent
          }
        } else {
          node = parent.items.addComp.apply(parent.items, initial)
        }
        break;
      case 'folder':
        if (!parent) {
          parent = app.project
        }

        if (initial[0] instanceof FolderItem) {
          node = initial[0]

          if (initial[1] !== false) {
            node.parentFolder = parent === app.project ? parent.rootFolder : parent
          }
        } else if (typeof initial[0] === 'number') {
          node = app.project.itemByID(initial[0])

          if (initial[1] !== false) {
            node.parentFolder = parent === app.project ? parent.rootFolder : parent
          }
        } else {
          node = parent.items.addFolder.apply(parent.items, initial)
        }
        break;
      case 'avItem':
        if (!parent) {
          parent = app.project
        }

        if (initial[0] instanceof AVItem) {
          node = initial[0]
        } else {
          node = app.project.itemByID(initial[0])
        }

        if (initial[1] !== false) {
          node.parentFolder = parent === app.project ? parent.rootFolder : parent
        }
        break;
      case 'avLayer':
        if (initial[0] instanceof AVLayer) {
          node = initial[0]
        } else {
          initial[0] = typeof initial[0] === 'number' ? app.project.itemByID(initial[0]) : initial[0]
          node = parent.layers.add.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'shape':
        if (initial[0] instanceof ShapeLayer) {
          node = initial[0]
        } else {
          node = parent.layers.addShape.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'text':
        if (initial[0] instanceof TextLayer) {
          node = initial[0]
        } else {
          node = parent.layers.addText.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'null':
        if (initial[0] instanceof AVLayer) {
          if (initial[0].nullLayer) {
            node = initial[0]
          } else {
            throw new Error('Wrong source was provided to Null VNode. Source can only be a Null Layer, but got ' + initial[0].constructor + '.')
          }
        } else {
          node = parent.layers.addNull.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'solid':
        if (initial[0] instanceof AVLayer) {
          node = initial[0]
        } else {
          node = parent.layers.addSolid.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'camera':
        if (initial[0] instanceof CameraLayer) {
          node = initial[0]
        } else {
          node = parent.layers.addCamera.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'boxText':
        if (initial[0] instanceof TextLayer) {
          node = initial[0]
        } else {
          node = parent.layers.addBoxText.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      case 'light':
        if (initial[0] instanceof LightLayer) {
          node = initial[0]
        } else {
          node = parent.layers.addLight.apply(parent.layers, initial)
        }
        node.moveToEnd()
        break;
      default:
        throw new Error('Unknown VNode tag: ' + tagName);
    }

    if (layerParent) {
      node.parent = layerParent
    }

    var domTree = createDomTree(node, domParent)
    vnode.domNode = domTree
    var props = vnode.properties
    applyProperties(domTree, props, undefined, domTree)

    var children = vnode.children
    var len = children.length

    if (len > 0) {
      for (var i = 0; i < len; i++) {
          var childNode = createElement(children[i], domTree)
          if (childNode) {
              domTree.childNodes.push(childNode)
          }
      }
    }

    if (elementIsThunk) {
      handleActions(element)
    }

    return domTree
}
