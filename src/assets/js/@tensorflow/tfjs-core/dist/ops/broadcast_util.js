"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBroadcastDims(inShape, outShape) {
    var inRank = inShape.length;
    var dims = [];
    for (var i = 0; i < inRank; i++) {
        var dim = inRank - 1 - i;
        var a = inShape[dim] || 1;
        var b = outShape[outShape.length - 1 - i] || 1;
        if (b > 1 && a === 1) {
            dims.unshift(dim);
        }
    }
    return dims;
}
exports.getBroadcastDims = getBroadcastDims;
function getReductionAxes(inShape, outShape) {
    var result = [];
    for (var i = 0; i < outShape.length; i++) {
        var inDim = inShape[inShape.length - i - 1];
        var outAxis = outShape.length - i - 1;
        var outDim = outShape[outAxis];
        if (inDim == null || (inDim === 1 && outDim > 1)) {
            result.unshift(outAxis);
        }
    }
    return result;
}
exports.getReductionAxes = getReductionAxes;
function assertAndGetBroadcastShape(shapeA, shapeB) {
    var result = [];
    var l = Math.max(shapeA.length, shapeB.length);
    for (var i = 0; i < l; i++) {
        var a = shapeA[shapeA.length - i - 1];
        if (a == null) {
            a = 1;
        }
        var b = shapeB[shapeB.length - i - 1];
        if (b == null) {
            b = 1;
        }
        if (a === 1) {
            result.unshift(b);
        }
        else if (b === 1) {
            result.unshift(a);
        }
        else if (a !== b) {
            var errMsg = "Operands could not be broadcast together with shapes " +
                (shapeA + " and " + shapeB + ".");
            throw Error(errMsg);
        }
        else {
            result.unshift(a);
        }
    }
    return result;
}
exports.assertAndGetBroadcastShape = assertAndGetBroadcastShape;
//# sourceMappingURL=broadcast_util.js.map