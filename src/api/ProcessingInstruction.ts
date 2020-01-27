import BaseProcessingInstruction, { setProcessingInstructionRps } from '../../base/classes/ProcessingInstruction';
import { IProcessingInstruction } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class ProcessingInstruction extends BaseProcessingInstruction implements IProcessingInstruction {
  constructor() {
    super();
    setProcessingInstructionRps(this, {
      nodeType: NODE_TYPE.PROCESSING_INSTRUCTION_NODE,
    });
  }
}

export { setProcessingInstructionRps };
