"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('NonElementParentNode'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('NonElementParentNode', exports.getState, exports.setState);
class NonElementParentNode {
    getElementById(elementId) {
        return exports.internalHandler.run(this, 'getElementById', [elementId]);
    }
}
exports.default = NonElementParentNode;
// tslint:disable-next-line:variable-name
exports.NonElementParentNodePropertyKeys = [];
// tslint:disable-next-line:variable-name
exports.NonElementParentNodeConstantKeys = [];
//# sourceMappingURL=NonElementParentNode.js.map