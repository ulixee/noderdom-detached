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
const CharacterData_1 = require("./CharacterData");
_a = StateMachine_1.default('ProcessingInstruction'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfProcessingInstruction = _a.setReadonlyOfProcessingInstruction;
exports.internalHandler = new InternalHandler_1.default('ProcessingInstruction', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function ProcessingInstructionGenerator(CharacterData) {
    return class ProcessingInstruction extends CharacterData {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(ProcessingInstruction, this, exports.internalHandler, exports.ProcessingInstructionConstantKeys, exports.ProcessingInstructionPropertyKeys);
        }
        // properties
        get target() {
            return exports.internalHandler.get(this, 'target', false);
        }
    };
}
exports.ProcessingInstructionGenerator = ProcessingInstructionGenerator;
// tslint:disable-next-line:variable-name
exports.ProcessingInstructionPropertyKeys = [...CharacterData_1.CharacterDataPropertyKeys, 'target'];
// tslint:disable-next-line:variable-name
exports.ProcessingInstructionConstantKeys = [...CharacterData_1.CharacterDataConstantKeys];
//# sourceMappingURL=ProcessingInstruction.js.map