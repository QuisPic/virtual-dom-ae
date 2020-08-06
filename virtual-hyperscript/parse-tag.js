'use strict';

var split = require('browser-split');

var classIdSplit = /([#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'comp';
    }

    var noId = !(props.hasOwnProperty('name'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '#' && noId) {
            props.name = part.substring(1, part.length);
        }
    }

    return tagName
}
