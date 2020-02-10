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
_a = StateMachine_1.default('HTMLCollectionBase'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfHTMLCollectionBase = _a.setReadonlyOfHTMLCollectionBase;
exports.internalHandler = new InternalHandler_1.default('HTMLCollectionBase', exports.getState, exports.setState);
class HTMLCollectionBase {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(HTMLCollectionBase, this, exports.internalHandler, exports.HTMLCollectionBaseConstantKeys, exports.HTMLCollectionBasePropertyKeys);
    }
    // properties
    get length() {
        return exports.internalHandler.get(this, 'length', false);
    }
    // methods
    item(index) {
        return exports.internalHandler.run(this, 'item', [index]);
    }
    [Symbol.iterator]() {
        return exports.internalHandler.run(this, '[Symbol.iterator]', []);
    }
}
exports.default = HTMLCollectionBase;
// tslint:disable-next-line:variable-name
exports.HTMLCollectionBasePropertyKeys = ['length'];
// tslint:disable-next-line:variable-name
exports.HTMLCollectionBaseConstantKeys = [];
//# sourceMappingURL=HTMLCollectionBase.js.map