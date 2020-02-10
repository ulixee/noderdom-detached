"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importStar(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('DOMTokenList'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfDOMTokenList = _a.setReadonlyOfDOMTokenList;
exports.internalHandler = new InternalHandler_1.default('DOMTokenList', exports.getState, exports.setState);
class DOMTokenList {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(DOMTokenList, this, exports.internalHandler, exports.DOMTokenListConstantKeys, exports.DOMTokenListPropertyKeys);
    }
    // properties
    get length() {
        return exports.internalHandler.get(this, 'length', false);
    }
    get value() {
        return exports.internalHandler.get(this, 'value', false);
    }
    set value(value) {
        exports.internalHandler.set(this, 'value', value);
    }
    // methods
    add(...tokens) {
        exports.internalHandler.run(this, 'add', [tokens]);
    }
    contains(token) {
        return exports.internalHandler.run(this, 'contains', [token]);
    }
    item(index) {
        return exports.internalHandler.run(this, 'item', [index]);
    }
    remove(...tokens) {
        exports.internalHandler.run(this, 'remove', [tokens]);
    }
    replace(token, newToken) {
        return exports.internalHandler.run(this, 'replace', [token, newToken]);
    }
    supports(token) {
        return exports.internalHandler.run(this, 'supports', [token]);
    }
    toggle(token, force) {
        return exports.internalHandler.run(this, 'toggle', [token, force]);
    }
    toString() {
        return exports.internalHandler.run(this, 'string', []);
    }
    forEach(callbackfn, thisArg) {
        exports.internalHandler.run(this, 'forEach', [callbackfn, thisArg]);
    }
    entries() {
        return exports.internalHandler.run(this, 'entries', []);
    }
    keys() {
        return exports.internalHandler.run(this, 'keys', []);
    }
    values() {
        return exports.internalHandler.run(this, 'values', []);
    }
    [Symbol.iterator]() {
        return exports.internalHandler.run(this, '[Symbol.iterator]', []);
    }
}
exports.default = DOMTokenList;
// tslint:disable-next-line:variable-name
exports.DOMTokenListPropertyKeys = ['length', 'value'];
// tslint:disable-next-line:variable-name
exports.DOMTokenListConstantKeys = [];
//# sourceMappingURL=DOMTokenList.js.map