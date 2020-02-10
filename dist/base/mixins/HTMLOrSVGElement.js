"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('HTMLOrSVGElement'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('HTMLOrSVGElement', exports.getState, exports.setState);
class HTMLOrSVGElement {
    get dataset() {
        return exports.internalHandler.get(this, 'dataset', false);
    }
    get nonce() {
        return exports.internalHandler.get(this, 'nonce', false);
    }
    set nonce(value) {
        exports.internalHandler.set(this, 'nonce', value);
    }
    get tabIndex() {
        return exports.internalHandler.get(this, 'tabIndex', false);
    }
    set tabIndex(value) {
        exports.internalHandler.set(this, 'tabIndex', value);
    }
    // methods
    blur() {
        exports.internalHandler.run(this, 'blur', []);
    }
    focus() {
        exports.internalHandler.run(this, 'focus', []);
    }
}
exports.default = HTMLOrSVGElement;
// tslint:disable-next-line:variable-name
exports.HTMLOrSVGElementPropertyKeys = ['dataset', 'nonce', 'tabIndex'];
// tslint:disable-next-line:variable-name
exports.HTMLOrSVGElementConstantKeys = [];
//# sourceMappingURL=HTMLOrSVGElement.js.map