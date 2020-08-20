var isObject = require("is-object")
var isObjectLiteral = require("./is-object-literal")
var isHook = require("../vnode/is-vhook.js")
var setKeys = require("./set-keyframes")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous)
        } else if (isHook(propValue)) {
            if (propValue.hook) {
                propValue.hook(node.self(),
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObjectLiteral(propValue)) {
                if (propName === 'keyframes') {
                  setKeys(node.self(), propValue)
                } else if (propName === 'members') {
                  members(node, propValue, previous ? previous[propName] : undefined)
                } else {
                  applyProperties(node(propName), propValue, previous ? previous[propName] : undefined)
                }
            } else {
                node(propName, propValue)
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
          } else if (previousValue.unhook) {
              previousValue.unhook(self, propName, propValue)
          }
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
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

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}
