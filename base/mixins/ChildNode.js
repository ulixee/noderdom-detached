"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('ChildNode'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('ChildNode', exports.getState, exports.setState);
class ChildNode {
    after(...nodes) {
        exports.internalHandler.run(this, 'after', [nodes]);
    }
    before(...nodes) {
        exports.internalHandler.run(this, 'before', [nodes]);
    }
    remove() {
        exports.internalHandler.run(this, 'remove', []);
    }
    replaceWith(...nodes) {
        exports.internalHandler.run(this, 'replaceWith', [nodes]);
    }
}
exports.default = ChildNode;
// tslint:disable-next-line:variable-name
exports.ChildNodePropertyKeys = [];
// tslint:disable-next-line:variable-name
exports.ChildNodeConstantKeys = [];
//# sourceMappingURL=ChildNode.js.map