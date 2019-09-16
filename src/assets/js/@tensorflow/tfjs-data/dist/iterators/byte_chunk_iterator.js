"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var lazy_iterator_1 = require("./lazy_iterator");
var string_iterator_1 = require("./string_iterator");
var ByteChunkIterator = (function (_super) {
    __extends(ByteChunkIterator, _super);
    function ByteChunkIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ByteChunkIterator.prototype.decodeUTF8 = function () {
        return new Utf8Iterator(this);
    };
    return ByteChunkIterator;
}(lazy_iterator_1.LazyIterator));
exports.ByteChunkIterator = ByteChunkIterator;
var Utf8Iterator = (function (_super) {
    __extends(Utf8Iterator, _super);
    function Utf8Iterator(upstream) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        _this.impl = new Utf8IteratorImpl(upstream);
        return _this;
    }
    Utf8Iterator.prototype.summary = function () {
        return this.impl.summary();
    };
    Utf8Iterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.impl.next()];
            });
        });
    };
    return Utf8Iterator;
}(string_iterator_1.StringIterator));
var Utf8IteratorImpl = (function (_super) {
    __extends(Utf8IteratorImpl, _super);
    function Utf8IteratorImpl(upstream) {
        var _this = _super.call(this) || this;
        _this.upstream = upstream;
        if (tfjs_core_1.ENV.get('IS_BROWSER')) {
            _this.decoder = new TextDecoder('utf-8');
        }
        else {
            var StringDecoder = require('string_decoder').StringDecoder;
            _this.decoder = new StringDecoder('utf8');
        }
        return _this;
    }
    Utf8IteratorImpl.prototype.summary = function () {
        return this.upstream.summary() + " -> Utf8";
    };
    Utf8IteratorImpl.prototype.pump = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chunkResult, chunk, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.upstream.next()];
                    case 1:
                        chunkResult = _a.sent();
                        if (chunkResult.done) {
                            return [2, false];
                        }
                        else {
                            chunk = chunkResult.value;
                        }
                        if (tfjs_core_1.ENV.get('IS_BROWSER')) {
                            text = this.decoder.decode(chunk, { stream: true });
                        }
                        else {
                            text = this.decoder.write(Buffer.from(chunk.buffer));
                        }
                        this.outputQueue.push(text);
                        return [2, true];
                }
            });
        });
    };
    return Utf8IteratorImpl;
}(lazy_iterator_1.OneToManyIterator));
//# sourceMappingURL=byte_chunk_iterator.js.map