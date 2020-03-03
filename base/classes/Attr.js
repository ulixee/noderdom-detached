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
const Node_1 = require("./Node");
_a = StateMachine_1.default('Attr'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfAttr = _a.setReadonlyOfAttr;
exports.internalHandler = new InternalHandler_1.default('Attr', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function AttrGenerator(Node) {
    return class Attr extends Node {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(Attr, this, exports.internalHandler, exports.AttrConstantKeys, exports.AttrPropertyKeys);
        }
        // properties
        get localName() {
            return exports.internalHandler.get(this, 'localName', false);
        }
        get name() {
            return exports.internalHandler.get(this, 'name', false);
        }
        get namespaceURI() {
            return exports.internalHandler.get(this, 'namespaceURI', true);
        }
        get ownerElement() {
            return exports.internalHandler.get(this, 'ownerElement', true);
        }
        get prefix() {
            return exports.internalHandler.get(this, 'prefix', true);
        }
        get specified() {
            return exports.internalHandler.get(this, 'specified', false);
        }
        get value() {
            return exports.internalHandler.get(this, 'value', false);
        }
        set value(value) {
            exports.internalHandler.set(this, 'value', value);
        }
    };
}
exports.AttrGenerator = AttrGenerator;
// tslint:disable-next-line:variable-name
exports.AttrPropertyKeys = [...Node_1.NodePropertyKeys, 'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];
// tslint:disable-next-line:variable-name
exports.AttrConstantKeys = [...Node_1.NodeConstantKeys];
//# sourceMappingURL=Attr.js.map