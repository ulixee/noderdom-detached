import BaseDocumentFragment, { setDocumentFragmentRps } from '../../base/classes/DocumentFragment';
import { IDocumentFragment } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class DocumentFragment extends BaseDocumentFragment implements IDocumentFragment {
  constructor() {
    super();
    setDocumentFragmentRps(this, {
      nodeName: '#document-fragment',
      nodeType: NODE_TYPE.DOCUMENT_FRAGMENT_NODE,
    });
  }
}

export { setDocumentFragmentRps };
