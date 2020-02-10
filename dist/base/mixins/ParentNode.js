"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('ParentNode'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('ParentNode', exports.getState, exports.setState);
class ParentNode {
    get childElementCount() {
        return exports.internalHandler.get(this, 'childElementCount', false);
    }
    get children() {
        return exports.internalHandler.get(this, 'children', false);
    }
    get firstElementChild() {
        return exports.internalHandler.get(this, 'firstElementChild', true);
    }
    get lastElementChild() {
        return exports.internalHandler.get(this, 'lastElementChild', true);
    }
    // methods
    append(...nodes) {
        exports.internalHandler.run(this, 'append', [nodes]);
    }
    prepend(...nodes) {
        exports.internalHandler.run(this, 'prepend', [nodes]);
    }
    querySelector(selectors) {
        return exports.internalHandler.run(this, 'querySelector', [selectors]);
    }
    querySelectorAll(selectors) {
        return exports.internalHandler.run(this, 'querySelectorAll', [selectors]);
    }
}
exports.default = ParentNode;
// tslint:disable-next-line:variable-name
exports.ParentNodePropertyKeys = ['childElementCount', 'children', 'firstElementChild', 'lastElementChild'];
// tslint:disable-next-line:variable-name
exports.ParentNodeConstantKeys = [];
//# sourceMappingURL=ParentNode.js.map