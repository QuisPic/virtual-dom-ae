// var render = require("./render.js")
// var patch = require("./patch.js")
// var h = require("./h.js")
// var create = require("./create-element.js")
// var VNode = require('./vnode/vnode.js')
// var VText = require('./vnode/vtext.js')

// module.exports = {
//     render: render,
//     patch: patch,
//     h: h,
//     create: create,
//     VNode: VNode,
//     VText: VText,
// }

export { render } from './vtree/diff'
export { h } from './virtual-hyperscript/'
export { createElement as create } from './vdom/create-element'