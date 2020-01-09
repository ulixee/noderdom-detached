import CharacterData from './CharacterData';
import { IProcessingInstruction } from '../interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class ProcessingInstruction extends CharacterData implements IProcessingInstruction {
  public readonly target: string;

  constructor() {
    super({
      nodeType: NODE_TYPE.PROCESSING_INSTRUCTION_NODE,
    });
  }
}
