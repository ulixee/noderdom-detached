"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('Slotable'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('Slotable', exports.getState, exports.setState);
class Slotable {
    get assignedSlot() {
        return exports.internalHandler.get(this, 'assignedSlot', true);
    }
}
exports.default = Slotable;
// tslint:disable-next-line:variable-name
exports.SlotablePropertyKeys = ['assignedSlot'];
// tslint:disable-next-line:variable-name
exports.SlotableConstantKeys = [];
//# sourceMappingURL=Slotable.js.map