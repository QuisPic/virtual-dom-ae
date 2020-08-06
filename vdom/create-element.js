var applyProperties = require("./apply-properties")
var createDomTree = require("./create-dom-tree")

var isVNode = require("../vnode/is-vnode.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, domParent) {
    var tagName = vnode.tagName
    var initial = vnode.initialProp
    var node, parent
    
    vnode = handleThunk(vnode).a
    
    if (domParent) {
      parent = domParent.self()
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
        parent = parent || app.project.items
        node = parent.addComp.apply(parent, initial)
        break;
      case 'folder':
        parent = parent || app.project.items
        node = parent.addFolder.apply(parent, initial)
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

    var domTree = createDomTree(node, domParent)
    var props = vnode.properties
    applyProperties(domTree, props)

    var children = vnode.children

    for (var i = 0, len = children.length; i < len; i++) {
        var childNode = createElement(children[i], domTree)
        if (childNode) {
            domTree.childNodes.push(childNode)
        }
    }

    return domTree
}
