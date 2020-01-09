import CharacterData from './CharacterData';
import { IComment } from '../interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class Comment extends CharacterData implements IComment {
  constructor() {
    super({
      nodeName: '#comment',
      nodeType: NODE_TYPE.COMMENT_NODE,
    });
  }
}
