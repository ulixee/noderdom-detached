"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProcessingInstruction_1 = require("../../base/classes/ProcessingInstruction");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const CharacterData_1 = __importDefault(require("./CharacterData"));
// tslint:disable-next-line:variable-name
const GeneratedProcessingInstruction = ProcessingInstruction_1.ProcessingInstructionGenerator(CharacterData_1.default);
class ProcessingInstruction extends GeneratedProcessingInstruction {
    constructor() {
        super();
        ProcessingInstruction_1.setState(this, {
            nodeType: NodeType_1.default.PROCESSING_INSTRUCTION_NODE,
        });
    }
}
exports.default = ProcessingInstruction;
//# sourceMappingURL=ProcessingInstruction.js.map