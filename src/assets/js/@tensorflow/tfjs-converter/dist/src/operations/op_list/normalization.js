"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = [
    {
        'tfOpName': 'FusedBatchNorm',
        'dlOpName': 'batchNormalization',
        'category': 'normalization',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'scale', 'type': 'tensor' },
            { 'tfInputIndex': 2, 'dlParamName': 'offset', 'type': 'tensor' },
            { 'tfInputIndex': 3, 'dlParamName': 'mean', 'type': 'tensor' },
            { 'tfInputIndex': 4, 'dlParamName': 'variance', 'type': 'tensor' }, {
                'tfParamName': 'epsilon',
                'dlParamName': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfParamName': 'data_format',
                'dlParamName': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'FusedBatchNormV2',
        'dlOpName': 'batchNormalization',
        'category': 'normalization',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'scale', 'type': 'tensor' },
            { 'tfInputIndex': 2, 'dlParamName': 'offset', 'type': 'tensor' },
            { 'tfInputIndex': 3, 'dlParamName': 'mean', 'type': 'tensor' },
            { 'tfInputIndex': 4, 'dlParamName': 'variance', 'type': 'tensor' }, {
                'tfParamName': 'epsilon',
                'dlParamName': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfParamName': 'data_format',
                'dlParamName': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LRN',
        'dlOpName': 'localResponseNormalization',
        'category': 'normalization',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }, {
                'tfParamName': 'depth_radius',
                'dlParamName': 'radius',
                'type': 'number',
                'defaultValue': 5
            },
            {
                'tfParamName': 'bias',
                'dlParamName': 'bias',
                'type': 'number',
                'defaultValue': 1.0
            },
            {
                'tfParamName': 'alpha',
                'dlParamName': 'alpha',
                'type': 'number',
                'defaultValue': 1.0
            },
            {
                'tfParamName': 'beta',
                'dlParamName': 'beta',
                'type': 'number',
                'defaultValue': 0.5
            }
        ]
    },
    {
        'tfOpName': 'Softmax',
        'dlOpName': 'softmax',
        'category': 'normalization',
        'params': [{ 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'LogSoftmax',
        'dlOpName': 'logSoftmax',
        'category': 'normalization',
        'params': [{ 'tfInputIndex': 0, 'dlParamName': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'SparseToDense',
        'dlOpName': 'sparseToDense',
        'category': 'normalization',
        'params': [
            { 'tfInputIndex': 0, 'dlParamName': 'sparseIndices', 'type': 'tensor' },
            { 'tfInputIndex': 1, 'dlParamName': 'outputShape', 'type': 'number[]' },
            { 'tfInputIndex': 2, 'dlParamName': 'sparseValues', 'type': 'tensor' },
            { 'tfInputIndex': 3, 'dlParamName': 'defaultValue', 'type': 'tensor' }, {
                'tfParamName': 'validate_indices',
                'dlParamName': 'validateIndices',
                'type': 'bool',
                'defaultValue': true,
                'notSupported': true
            }
        ]
    }
];
//# sourceMappingURL=normalization.js.map