var isObject = require("is-object")
var isArray = require("x-is-array")

module.exports = createDomTree

function createDomTree(node, domParent) {
  function tree(propName, value) {
    if (value === undefined) {
      if (tree.hasOwnProperty(propName) && tree[propName]) {
        return tree[propName]
      } else {
        var self = tree.self()
        var prop = self[propName]

        if (prop === undefined && self instanceof PropertyGroup) {
          var hashTagIndex = propName.indexOf('#')
          var propCreateName
          var displayName

          if (hashTagIndex !== -1) {
            displayName = propName.slice(hashTagIndex + 1)
            propCreateName = propName.slice(0, hashTagIndex)
          } else {
            propCreateName = propName
          }

          prop = self.addProperty(propCreateName)

          if (displayName) prop.name = displayName
        }

        if (isObject(prop)) {
          prop = createDomTree(prop, tree)
          tree[propName] = prop
        }

        return prop
      }
    } else {
      var self = tree.self()

      if (self) {
        if (typeof self[propName] === 'function') {
          if (isArray(value)) {
            try {
              self[propName].apply(self, value)
            } catch (err) {
              self[propName](value)
            }
          } else {
            self[propName](value)
          }
        } else {
          self[propName] = value
          if (propName === 'name') tree.nodeName = value
        }
      }
    }
  }

  tree.self = function() {
    try {
      var self = this.selfNode
      if (self.name) return self
    } catch (err) {
      var parent = this.parent && this.parent.self()
  
      if (parent instanceof PropertyGroup
        || parent instanceof Property
        || parent instanceof MaskPropertyGroup) {
        this.selfNode = parent[this.nodeName]
        return this.selfNode
      }
    }
  }

  tree.selfNode = node
  tree.nodeName = node.name
  tree.childNodes = []

  if (domParent) {
    tree.parent = domParent
  }

  return tree
}