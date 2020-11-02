import isObject from 'is-object'
import isArray from 'x-is-array'

export function createDomTree(node, domParent) {
  function tree(propName, value) {
    if (value === undefined) {
      if (tree.props.hasOwnProperty(propName) && tree.props[propName]) {
        return tree.props[propName]
      } else {
        var self = tree.self()
        var prop = self[propName]
        
        return tree.addProp(prop, propName)
      }
    } else {
      var self = tree.self()

      if (self) {
        if (propName === 'value') {
          propName = 'setValue'
          if (self.numKeys) {
            for (var i = self.numKeys; i > 0; i--) {
              self.removeKey(i)
            }
          }
        }

        if (typeof self[propName] === 'function') {
          if (isArray(value)) {
            try {
              self[propName].apply(self, value)
            } catch (err) {
              self[propName](value)
            }
          } else {
            try {
              self[propName](value)
            } catch (err) {
              // for Dashes on Strokes
              self.addProperty(propName)
              self[propName](value)
            }
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

  tree.addMember = function(propName, propKey) {
    var self = this.self()

    if (self instanceof PropertyGroup) {
      var prop = self.addProperty(propName)

      if (propKey !== undefined) { 
        prop.name = propKey
      }

      return this.addProp(prop, propKey)
    } else {
      throw new Error('Cannot add property ' + propName + '. ' + this.nodeName + ' is not a PropertyGroup')
    }
  }

  tree.addProp = function(prop, propKey) {
    if (isObject(prop)) {
      var propTree = createDomTree(prop, this)
      this.props[propKey] = propTree

      return propTree
    }
  }

  tree.props = {}
  tree.selfNode = node
  tree.nodeName = node.name
  tree.childNodes = []

  if (domParent) {
    tree.parent = domParent
  }

  return tree
}