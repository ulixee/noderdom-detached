"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('NonDocumentTypeChildNode'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('NonDocumentTypeChildNode', exports.getState, exports.setState);
class NonDocumentTypeChildNode {
    get nextElementSibling() {
        return exports.internalHandler.get(this, 'nextElementSibling', true);
    }
    get previousElementSibling() {
        return exports.internalHandler.get(this, 'previousElementSibling', true);
    }
}
exports.default = NonDocumentTypeChildNode;
// tslint:disable-next-line:variable-name
exports.NonDocumentTypeChildNodePropertyKeys = ['nextElementSibling', 'previousElementSibling'];
// tslint:disable-next-line:variable-name
exports.NonDocumentTypeChildNodeConstantKeys = [];
//# sourceMappingURL=NonDocumentTypeChildNode.js.map