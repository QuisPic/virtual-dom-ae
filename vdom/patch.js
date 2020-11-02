import isArray from 'x-is-array'
import { patchOp } from '../internal'

/* function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    // var ownerDocument = rootNode.ownerDocument

    // if (!renderOptions.document && ownerDocument !== document) {
    //     renderOptions.document = ownerDocument
    // }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
} */

export function applyPatch(patchList) {
    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            patchOp(patchList[i])
        }
    } else {
        patchOp(patchList)
    }
}

/* function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
} */
