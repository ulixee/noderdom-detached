import DOMNode from './Node';
import { IDocumentFragment, IHTMLElement } from '../interfaces';
import ParentNode from './ParentNode';
import NonElementParentNode from './NonElementParentNode';
import NODE_TYPE from '../constants/NodeType';

// tslint:disable-next-line:variable-name
const DocumentFragmentBase = ParentNode(NonElementParentNode(DOMNode));

export default class DocumentFragment extends DocumentFragmentBase implements IDocumentFragment {
  constructor() {
    super({
      nodeName: '#document-fragment',
      nodeType: NODE_TYPE.DOCUMENT_FRAGMENT_NODE,
    });
  }

  public getElementById(_elementId: string): IHTMLElement | null {
    throw new Error('Method not implemented.');
  }
}
