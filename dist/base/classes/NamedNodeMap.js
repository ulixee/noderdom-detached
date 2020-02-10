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
_a = StateMachine_1.default('NamedNodeMap'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfNamedNodeMap = _a.setReadonlyOfNamedNodeMap;
exports.internalHandler = new InternalHandler_1.default('NamedNodeMap', exports.getState, exports.setState);
class NamedNodeMap {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(NamedNodeMap, this, exports.internalHandler, exports.NamedNodeMapConstantKeys, exports.NamedNodeMapPropertyKeys);
    }
    // properties
    get length() {
        return exports.internalHandler.get(this, 'length', false);
    }
    // methods
    getNamedItem(qualifiedName) {
        return exports.internalHandler.run(this, 'getNamedItem', [qualifiedName]);
    }
    getNamedItemNS(namespace, localName) {
        return exports.internalHandler.run(this, 'getNamedItemNS', [namespace, localName]);
    }
    item(index) {
        return exports.internalHandler.run(this, 'item', [index]);
    }
    removeNamedItem(qualifiedName) {
        return exports.internalHandler.run(this, 'removeNamedItem', [qualifiedName]);
    }
    removeNamedItemNS(namespace, localName) {
        return exports.internalHandler.run(this, 'removeNamedItemNS', [namespace, localName]);
    }
    setNamedItem(attr) {
        return exports.internalHandler.run(this, 'setNamedItem', [attr]);
    }
    setNamedItemNS(attr) {
        return exports.internalHandler.run(this, 'setNamedItemNS', [attr]);
    }
    [Symbol.iterator]() {
        return exports.internalHandler.run(this, '[Symbol.iterator]', []);
    }
}
exports.default = NamedNodeMap;
// tslint:disable-next-line:variable-name
exports.NamedNodeMapPropertyKeys = ['length'];
// tslint:disable-next-line:variable-name
exports.NamedNodeMapConstantKeys = [];
//# sourceMappingURL=NamedNodeMap.js.map