import BaseComment, { setCommentRps } from '../../base/classes/Comment';
import { IComment } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class Comment extends BaseComment implements IComment {
  constructor() {
    super();
    setCommentRps(this, {
      nodeName: '#comment',
      nodeType: NODE_TYPE.COMMENT_NODE,
    });
  }
}

export { setCommentRps };
