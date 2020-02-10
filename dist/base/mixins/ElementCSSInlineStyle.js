"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('ElementCSSInlineStyle'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('ElementCSSInlineStyle', exports.getState, exports.setState);
class ElementCSSInlineStyle {
    get style() {
        return exports.internalHandler.get(this, 'style', false);
    }
}
exports.default = ElementCSSInlineStyle;
// tslint:disable-next-line:variable-name
exports.ElementCSSInlineStylePropertyKeys = ['style'];
// tslint:disable-next-line:variable-name
exports.ElementCSSInlineStyleConstantKeys = [];
//# sourceMappingURL=ElementCSSInlineStyle.js.map