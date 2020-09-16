var isObject = require("is-object")
var isImmutable = require('immutable-ae').isImmutable
var isObjectLiteral = require("./is-object-literal")
var isHook = require("../vnode/is-vhook.js")
var setKeys = require("./set-keyframes")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    var hooks
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous)
        } else {
            if (isObjectLiteral(propValue)) {
                if (propName === 'keyframes') {
                  setKeys(node.self(), propValue)
                } else if (propName === 'members') {
                  members(node, propValue, previous ? previous[propName] : undefined)
                } else if (propName === 'hooks') {
                  hooks = propValue
                } else {
                  applyProperties(node(propName), propValue, previous ? previous[propName] : undefined)
                }
            } else {
              propValue = isImmutable(propValue) ? propValue.toJS() : propValue
              node(propName, propValue)
            }
        }
    }

    if (hooks != undefined && isObjectLiteral(hooks)) {
      var hookName, hookValue
      var prevHooks = previous ? previous.hooks : undefined

      for (hookName in hooks) {
        hookValue = hooks[hookName]
        
        if (isHook(hookValue)) {
          hookValue.hook(node.self(), hookName, prevHooks ? prevHooks[hookName] : undefined)
        }
      }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]
        var self = node.self()

        if (self) {
          if (!isHook(previousValue)) {
            if (propName === 'keyframes') {
              var keyframes = previousValue
              if (keyframes.hasOwnProperty('remove')) {
                var remove = keyframes.remove
                remove = isImmutable(remove) ? remove.toJS() : remove
            
                for (var i = remove.length - 1; i >= 0; i--) {
                  self.removeKey(remove[i] + 1)
                }
              }
            } else {
              var prop = self[propName]

              if (isObject(prop)
                && (prop instanceof Property
                || prop instanceof PropertyGroup)
                && (prop.parentProperty.propertyType === PropertyType.INDEXED_GROUP
                || prop.parentProperty.matchName === 'ADBE Text Animator')) {
                  prop.remove()

                  if (node.hasOwnProperty(propName)) {
                    delete node[propName]
                  }
              }
            }
          } else if (previousValue.unhook) {
              previousValue.unhook(self, propName, propValue)
          }
        }
    }
}

function members(node, members, previous) {
  var propName, propKey, propTree, keys
  
  for (propName in members) {
    keys = members[propName]
    for (propKey in keys) {
      propTree = node.props[propKey]

      if (!propTree) {
        propTree = node.addMember(propName, propKey)
      }

      if (previous) {
        if (previous[propName]) {
          previous = previous[propName][propKey]
        } else {
          previous = undefined
        }
      } else {
        previous = undefined
      }

      applyProperties(propTree, keys[propKey], previous)
    } 
  }
}
