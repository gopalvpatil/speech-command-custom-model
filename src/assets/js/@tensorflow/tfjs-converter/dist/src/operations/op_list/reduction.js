"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = [
    {
        'tfOpName': 'Max',
        'dlOpName': 'max',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' },
            { 'tfParamName': 'keep_dims', 'dlParamName': 'keepDims', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'Mean',
        'dlOpName': 'mean',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' },
            { 'tfParamName': 'keep_dims', 'dlParamName': 'keepDims', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'Min',
        'dlOpName': 'min',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' },
            { 'tfParamName': 'keep_dims', 'dlParamName': 'keepDims', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'Sum',
        'dlOpName': 'sum',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' },
            { 'tfParamName': 'keep_dims', 'dlParamName': 'keepDims', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'All',
        'dlOpName': 'all',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' },
            { 'tfParamName': 'keep_dims', 'dlParamName': 'keepDims', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'Any',
        'dlOpName': 'any',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' },
            { 'tfParamName': 'keep_dims', 'dlParamName': 'keepDims', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'ArgMax',
        'dlOpName': 'argMax',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'ArgMin',
        'dlOpName': 'argMin',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Prod',
        'dlOpName': 'prod',
        'category': 'reduction',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'axis', 'type': 'number[]' }, {
                'tfParamName': 'keep_dims',
                'dlParamName': 'keepDims',
                'type': 'bool'
            }
        ]
    }
];
//# sourceMappingURL=reduction.js.map