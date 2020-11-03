import { applyProperties } from './apply-properties'
import { createElement, isWidget, VPatch } from '../internal'
import { updateWidget } from './update-widget'

export function patchOp(vpatch) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(vNode.domNode, vNode);
        case VPatch.INSERT:
            return insertNode(vNode.domNode, patch);
        case VPatch.WIDGET:
            return widgetPatch(vNode.domNode, vNode, patch);
        case VPatch.CREATE:
            return createElement(patch, typeof vNode === 'object' ? vNode.domNode : undefined)
        case VPatch.ORDER:
            reorderChildren(vNode.domNode, patch);
            return vNode.domNode
        case VPatch.PROPS:
            applyProperties(vNode.domNode, patch, vNode.properties, vNode.domNode);
            return vNode.domNode
        // case VPatch.THUNK:
        //     return replaceRoot(domNode,
        //         renderOptions.patch(domNode, patch, renderOptions));
        default:
            return vNode.domNode;
    }
}

function removeNode(domNode, vNode) {
    var self = domNode.self()
    var parent = domNode.parent

    if (self) {
      self.remove()
    }

    if (parent) {
      var childs = parent.childNodes
      for (var i = 0, len = childs.length; i < len; i++) {
        if (childs[i] === domNode) {
          childs.splice(i, 1)
          break;
        }
      }
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode) {
    var newNode = createElement(vNode, parentNode)

    if (newNode) {
        parentNode.childNodes.push(newNode)
    }

    return parentNode
}

function widgetPatch(domNode, leftVNode, widget) {
    var updating = updateWidget(leftVNode, widget)
    var parentNode = domNode.parent
    var newNode = domNode

    if (updating) {
        var self = domNode.self()
        var newNodeSelf = widget.update(leftVNode, self) || self
        if (newNodeSelf !== self) {
          newNode = createElement(widget, parentNode)
        }
    } else {
        newNode = createElement(widget, parentNode)
        destroyWidget(domNode.self(), leftVNode)
    }

    if (newNode !== domNode) {
      for (var key in domNode) {
        if (domNode.hasOwnProperty(key)) {
          if (newNode.hasOwnProperty(key)) {
            domNode[key] = newNode[key]
          } else {
            delete domNode[key]
          }
        }
      }
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode) {
    var newNode = domNode
    var self = domNode.self()
    var parentTree = domNode.parent

    if (self) {
      self.remove()
    }

    if (parentTree) {
      newNode = createElement(vNode, parentTree)
  
      for (var key in domNode) {
        if (domNode.hasOwnProperty(key)) {
          if (newNode.hasOwnProperty(key)) {
            domNode[key] = newNode[key]
          } else {
            delete domNode[key]
          }
        }
      }
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        childNodes.splice(remove.from, 1)
    }

    for (var j = 0; j < moves.inserts.length; j++) {
      insert = moves.inserts[j]
      node = keyMap[insert.key]

      childNodes.splice(insert.to, 0, node)

      var self = node.self()
      if (self && (
           self instanceof AVLayer
        || self instanceof ShapeLayer
        || self instanceof TextLayer
        || self instanceof CameraLayer
        || self instanceof LightLayer
        || self instanceof Layer
      )) {
        if (insert.to >= childNodes.length - 1) {
          self.moveToEnd()
        } else if (insert.to <= 0) {
          self.moveToBeginning()
        } else {
          self.moveBefore(childNodes[insert.to + 1].self())
        }
      }
    }
}

function replaceRoot(oldRoot, newRoot) {
    var parent = oldRoot.parent
    if (oldRoot && newRoot && oldRoot !== newRoot && parent) {

      if (parent && parent.self()) {    
        for (var key in oldRoot) {
          if (oldRoot.hasOwnProperty(key)) {
            if (newRoot.hasOwnProperty(key)) {
              oldRoot[key] = newRoot[key]
            } else {
              delete oldRoot[key]
            }
          }
        }
      }
    }

    return oldRoot;
}

function getParentNode(self) {
    if (self instanceof CompItem
      || self instanceof FolderItem
      || self instanceof FootageItem) {
        return self.parentFolder
    } else if (self instanceof AVLayer
      || self instanceof ShapeLayer
      || self instanceof TextLayer
      || self instanceof CameraLayer
      || self instanceof LightLayer) {
        return self.containingComp
    }

    return null
}