import { version } from './version'
import isArray from 'x-is-array'
import { isVNode, isWidget, isThunk } from '../internal'

var noProperties = {}
var noChildren = []

export function VirtualNode(tagName, initialProp, properties, children, key) {
    this.tagName = tagName
    this.initialProp = isArray(initialProp) ? initialProp : [initialProp]
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    // for (var propName in properties) {
    //     if (properties.hasOwnProperty(propName)) {
    //         var property = properties[propName]
    //         if (isVHook(property) && property.unhook) {
    //             if (!hooks) {
    //                 hooks = {}
    //             }

    //             hooks[propName] = property
    //         }
    //     }
    // }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            // if (!descendantHooks && (child.hooks || child.descendantHooks)) {
            //     descendantHooks = true
            // }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"
