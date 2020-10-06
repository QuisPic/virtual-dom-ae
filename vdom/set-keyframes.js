var forEach = require('iterall').forEach
var isArray = require('x-is-array')
var isObjectLiteral = require('./is-object-literal')

module.exports = setKeyframes

function setKeyframes(node, keyframes, layerNode) {
  if (keyframes.hasOwnProperty('remove')) {
    var remove = keyframes.remove

    for (var i = remove.length - 1; i >= 0; i--) {
      node.removeKey(remove[i] + 1)
    }
  }

  var times = keyframes.times
  var values = keyframes.values

  const timesLength = times.length

  if (isArray(times) && timesLength > 0 && isArray(values) && values.length > 0) {
    if (timesLength === values.length) {
      const layer = layerNode.self()
      if (layer) {
        const startTime = layer.startTime
        
        if (startTime) {
          for (let i = 0; i < timesLength; i++) {
            times[i] += startTime
          }
        }
      }
      node.setValuesAtTimes(times, values)
    } else {
      throw new Error('Keyframes times and values have different numbers of elements. Times: ' + timesLength + ', Values: ' + values.length + '.')
    }
  }

  var value
  var name
  for (name in keyframes) {
    value = keyframes[name]
    switch (name) {
      case 'temporalEase':
        setTemporalEase(node, value)
        break;
      case 'temporalContinuous':
        setKeyframesParameter('setTemporalContinuousAtKey', node, value)
        break;
      case 'temporalAutoBezier':
        setKeyframesParameter('setTemporalAutoBezierAtKey', node, value)
        break;
      case 'spatialTangents':
        setSpatialTangents(node, value)       
        break;
      case 'spatialAutoBezier':
        setKeyframesParameter('setSpatialAutoBezierAtKey', node, value)
        break;
      case 'spatialContinuous':
        setKeyframesParameter('setSpatialContinuousAtKey', node, value)
        break;
      case 'interpolationType':
        setInterpolationType(node, value)
        break;
      case 'roving':
        setKeyframesParameter('setRovingAtKey', node, value)
        break;
      case 'selected':
        setKeyframesParameter('setSelectedAtKey', node, value)
        break;
      default:
    }
  }
}

function setKeyframesParameter(methodName, node, value) {
  if (isObjectLiteral(value)) {
    var valueAll = value.all
    for (var i = 1, len = node.numKeys; i <= len; i++) {
      node[methodName](i, valueAll)
    }
  } else {
    var indices = getIndices(value)
    for (var i = 0, len = indices.length; i < len; i++) {
      node[methodName](+indices[i] + 1, value[indices[i]])
    }
  }
}

function setTemporalEase(node, value) {
  if (isObjectLiteral(value)) {
    var valueAll = value.all
    if (valueAll[0] instanceof KeyframeEase) {
      for (var i = 1, len = node.numKeys; i <= len; i++) {
        node.setTemporalEaseAtKey(i, valueAll)
      }
    } else {
      for (var i = 1, len = node.numKeys; i <= len; i++) {
        node.setTemporalEaseAtKey(i, valueAll[0], valueAll[1])
      }
    }
  } else {
    var indices = getIndices(value)
    var easeValue

    for (var i = 0, len = indices.length; i < len; i++) {
      easeValue = value[indices[i]]
      if (easeValue[0] instanceof KeyframeEase) {
        node.setTemporalEaseAtKey(indices[i] + 1, easeValue)
      } else {
        node.setTemporalEaseAtKey(indices[i] + 1, easeValue[0], easeValue[1])
      }
    }
  }
}

function setSpatialTangents(node, value) {
  if (isObjectLiteral(value)) {
    var valueAll = value.all
    if (typeof valueAll[0] === 'number') {
      for (var i = 1, len = node.numKeys; i <= len; i++) {
        node.setSpatialTangentsAtKey(i, valueAll)
      }
    } else {
      for (var i = 1, len = node.numKeys; i <= len; i++) {
        node.setSpatialTangentsAtKey(i, valueAll[0], valueAll[1])
      }
    }
  } else {
    var indices = getIndices(value)
    var tangentValue
    for (var i = 0, len = indices.length; i < len; i++) {
      tangentValue = value[indices[i]]
      if (typeof tangentValue[0] === 'number') {
        node.setSpatialTangentsAtKey(indices[i] + 1, tangentValue)
      } else {
        node.setSpatialTangentsAtKey(indices[i] + 1, tangentValue[0], tangentValue[1])
      }
    }
  }
}

function setInterpolationType(node, value) {
  if (isObjectLiteral(value)) {
    var valueAll = value.all
    if (typeof valueAll === 'number') {
      for (var i = 1, len = node.numKeys; i <= len; i++) {
        node.setInterpolationTypeAtKey(i, valueAll)
      }
    } else {
      for (var i = 1, len = node.numKeys; i <= len; i++) {
        node.setInterpolationTypeAtKey(i, valueAll[0], valueAll[1])
      }
    }
  } else {
    var indices = getIndices(value)
    for (var i = 0, len = indices.length; i < len; i++) {
      var typeValue = value[indices[i]]
      if (typeof typeValue === 'number') {
        node.setInterpolationTypeAtKey(indices[i] + 1, typeValue)
      } else {
        node.setInterpolationTypeAtKey(indices[i] + 1, typeValue[0], typeValue[1])
      }
    }
  }
}

function getIndices(arr) {
  var len = arr.length
  var indices = []

  for (var i = 0; i < len; i++) {
    var value = arr[i]
    if (value !== undefined && value !== null) {
      indices.push(i)
    }
  }

  return indices
}

// function immutableToJS(values) {
//   if (isImmutable(values)) {
//     values = values.toJS()
//   } else if (isObjectLiteral(values)) {
//     if (isImmutable(values.all)) {
//       values.all = values.all.toJS()
//     }
//   } else {
//     forEach(values, function (val, i, collection) {
//       if (isImmutable(val)) {
//         collection[i] = val.toJS()
//       }
//     })
//   }

//   return values
// }