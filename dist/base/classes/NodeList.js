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
_a = StateMachine_1.default('NodeList'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfNodeList = _a.setReadonlyOfNodeList;
exports.internalHandler = new InternalHandler_1.default('NodeList', exports.getState, exports.setState);
class NodeList {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(NodeList, this, exports.internalHandler, exports.NodeListConstantKeys, exports.NodeListPropertyKeys);
    }
    // properties
    get length() {
        return exports.internalHandler.get(this, 'length', false);
    }
    // methods
    item(index) {
        return exports.internalHandler.run(this, 'item', [index]);
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
exports.default = NodeList;
// tslint:disable-next-line:variable-name
exports.NodeListPropertyKeys = ['length'];
// tslint:disable-next-line:variable-name
exports.NodeListConstantKeys = [];
//# sourceMappingURL=NodeList.js.map