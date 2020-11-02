import isArray from 'x-is-array'
import { render, isVNode } from "../internal"

function doActionAndPatch(previousVNode, action, thunk) {
  var actionResult = action.call(thunk)
  if (typeof actionResult === 'object' && isVNode(actionResult)) {
    thunk.vnode = actionResult
    render(previousVNode, actionResult)
    return actionResult
  }
}

export function handleActions(thunk) {
  if (thunk.actions) {
    var actions = thunk.actions

    if (typeof actions === 'function') {
      doActionAndPatch(thunk.vnode, actions, thunk)
    } else if (isArray(actions)) {
      var previousVNode = thunk.vnode
      var len = actions.length

      for (let i = 0; i < len; i++) {
        var actionResult = doActionAndPatch(previousVNode, actions[i], thunk)
        if (actionResult) {
          previousVNode = actionResult
        }
      }
    }
  }
}
