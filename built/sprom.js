"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osprom = exports.sprom = void 0;
var sprom = function (promise) {
    return promise.then(function (resultParam) { return [null, resultParam]; }).catch(function (err) { return [err]; });
};
exports.sprom = sprom;
var osprom = function (promise) {
    return promise.then(function (result) { return { result: result }; }).catch(function (err) { return { err: err }; });
};
exports.osprom = osprom;
exports.default = sprom;
