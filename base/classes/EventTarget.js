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
_a = StateMachine_1.default('EventTarget'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfEventTarget = _a.setReadonlyOfEventTarget;
exports.internalHandler = new InternalHandler_1.default('EventTarget', exports.getState, exports.setState);
class EventTarget {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(EventTarget, this, exports.internalHandler, exports.EventTargetConstantKeys, exports.EventTargetPropertyKeys);
    }
    // methods
    addEventListener(type, callback, options) {
        exports.internalHandler.run(this, 'addEventListener', [type, callback, options]);
    }
    dispatchEvent(event) {
        return exports.internalHandler.run(this, 'dispatchEvent', [event]);
    }
    removeEventListener(type, callback, options) {
        exports.internalHandler.run(this, 'removeEventListener', [type, callback, options]);
    }
}
exports.default = EventTarget;
// tslint:disable-next-line:variable-name
exports.EventTargetPropertyKeys = [];
// tslint:disable-next-line:variable-name
exports.EventTargetConstantKeys = [];
//# sourceMappingURL=EventTarget.js.map