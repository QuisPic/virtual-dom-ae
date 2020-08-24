var isObject = require("is-object")
var isArray = require("x-is-array")
var isObjectLiteral = require("../vdom/is-object-literal")
var isHook = require("../vnode/is-vhook")
var arraySearch = require("./binary-search")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObjectLiteral(aValue) && isObjectLiteral(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (aKey === 'hooks') {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (aKey === 'keyframes') {
                var keyframesDiff = diffKeyframes(aValue, bValue)
                if (keyframesDiff) {
                  diff = diff || {}
                  diff.keyframes = keyframesDiff
                }
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function diffKeyframes(aKeyframes, bKeyframes) {
    var diff
    var aTimes = aKeyframes.times
    var aValues = aKeyframes.values
    var bTimes = bKeyframes.times
    var bValues = bKeyframes.values

    var keys = []
    for (var key in bKeyframes) {
      if (key !== 'times' && key !== 'values') {
        keys.push(key)
      }
    }

    if (aTimes && aValues) {
        if (!bTimes || !bValues) {
            diff = { remove: [] }

            for (var i = 0, len = aTimes.length; i < len; i++) {
              diff.remove.push(i)
            }
        } else if (aTimes !== bTimes || aValues !== bValues) {
          diff = { times: [], values: [] }

          if (bTimes.length === bValues.length) {
            var aLen = aTimes.length
            var bLen = bTimes.length 
            var ai, bi
            for (bi = 0, ai = 0; bi < bLen; bi++) {
              if (aTimes[ai] === bTimes[bi]) {
                if (aValues[ai] !== bValues[bi]) {
                  diff.times.push(bTimes[bi])
                  diff.values.push(bValues[bi])
                }
                ai++
              } else {
                var aTime = aTimes[ai]
                var bTime = bTimes[bi]
                if (aTime < bTime && ai < aLen) {
                  diff.remove = diff.remove || []
                  while (aTime < bTime && ai < aLen) {
                    diff.remove.push(ai)
                    ai++
                    aTime = aTimes[ai]
                  }
                
                  if (aTime === bTime) {
                    if (aValues[ai] !== bValues[bi]) {
                      diff.times.push(bTime)
                      diff.values.push(bValues[bi])
                    }
                    ai++
                  } else {
                    diff.times.push(bTime)
                    diff.values.push(bValues[bi])
                    addKeyframeProps(bi, keys, bKeyframes, diff)
                  }
                } else {
                  diff.times.push(bTime)
                  diff.values.push(bValues[bi])
                  addKeyframeProps(bi, keys, bKeyframes, diff)
                }
              }
            }

            if (ai < aLen) {
              diff.remove = diff.remove || []
              for (; ai < aLen; ai++) {
                diff.remove.push(ai)
              }
            }
          } else {
            throw new Error('Keyframes times and values have different number of elements.')
          }
        }
    } else {
      diff = { times: bTimes, values: bValues }
    }

    for (var i = 0, len = keys.length; i < len; i++) {
      var propName = keys[i]
      var aValue = aKeyframes[propName]
      var bValue = bKeyframes[propName]

      if (aValue !== bValue) {
        var bType = getType(bValue)
        if (getType(aValue) !== bType) {
          diff[propName] = bValue
        } else {
          if (bType === 'object') {
            diff[propName] = bValue
          } else if (bType === 'array') {
            for (var ai = 0, bi = 0, len = bValue.length; i < len; bi++) {
              while (arraySearch(diff.remove, ai, sortFunc) >= 0) {
                ai++
              }

              if (diff[propName] && diff[propName][bi] !== undefined) {
                continue;
              }

              if (bValue[bi] !== aValue[ai]) {
                diff[propName] = diff[propName] || []
                diff[propName][bi] = bValue[bi]
              }
              ai++
            }
          }
        }
      }
    }
    return diff
}

function addKeyframeProps(index, keys, props, diff) {
  var key, value
  for (var i = 0, len = keys.length; i < len; i++) {
    key = keys[i]
    value = props[key]
    if (isObjectLiteral(value)) {
      diff[key] = diff[key] || []
      diff[key][index] = value.all
    } else if (isArray(value) && value[index]) {
      diff[key] = diff[key] || []
      diff[key][index] = value[index]
    }
  }
}

function getType(obj) {
  if (isArray(obj)) {
    return 'array'
  }
  if (isObjectLiteral(obj)) {
    return 'object'
  }
  return 'other'
}

function sortFunc(a, b) {
  return a - b
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
