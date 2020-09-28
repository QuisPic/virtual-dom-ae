var applyProperties = require("./apply-properties")
var createDomTree = require("./create-dom-tree")

var isVNode = require("../vnode/is-vnode.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, domParent) {
    vnode = handleThunk(vnode).a

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

    if (isWidget(vnode)) {
        node = vnode.init()
        return createDomTree(node)
    } else if (!isVNode(vnode)) {
        return null
    }

    switch (tagName) {
      case 'root': 
        node = app.project.items
        break;
      case 'comp':
        if (!parent) {
          parent = app.project
        }

        if (typeof initial === 'number') {
          node = app.project.itemByID(initial)
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

        if (typeof initial[0] === 'number') {
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
        node = app.project.itemByID(initial)

        if (initial[1] !== false) {
          node.parentFolder = parent === app.project ? parent.rootFolder : parent
        }
        break;
      case 'avLayer':
        initial[0] = typeof initial[0] === 'number' ? app.project.itemByID(initial[0]) : initial[0]
        node = parent.layers.add.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'shape':
        node = parent.layers.addShape.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'text':
        node = parent.layers.addText.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'null':
        node = parent.layers.addNull.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'solid':
        node = parent.layers.addSolid.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'camera':
        node = parent.layers.addCamera.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'boxText':
        node = parent.layers.addBoxText.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      case 'light':
        node = parent.layers.addLight.apply(parent.layers, initial)
        node.moveToEnd()
        break;
      default:
        throw new Error('Unknown element name: ' + tagName);
    }

    if (layerParent) {
      node.parent = layerParent
    }

    var domTree = createDomTree(node, domParent)
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

    return domTree
}
