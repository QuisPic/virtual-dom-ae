'use strict';

var isArray = require('x-is-array');

var VNode = require('../vnode/vnode.js');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isWidget = require('../vnode/is-widget');
var isVThunk = require('../vnode/is-thunk');

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var initialProps = [];
    var tag, props, key;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = tagName;

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    if (props.hasOwnProperty('initial')) {
      initialProps = props.initial;
      props.initial = undefined;
    }

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, initialProps, props, childNodes, key);
}

function addChild(c, childNodes, tag, props) {
    if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}
