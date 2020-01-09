import DOMNode from './Node';
import ChildishNode from './ChildishNode';
import { IDocumentType } from '../interfaces';
import NODE_TYPE from '../constants/NodeType';

// tslint:disable-next-line:variable-name
const DocumentTypeBase = ChildishNode(DOMNode);

export default class DocumentType extends DocumentTypeBase implements IDocumentType {
  public readonly name: string;
  public readonly publicId: string;
  public readonly systemId: string;

  constructor() {
    super({
      nodeType: NODE_TYPE.DOCUMENT_TYPE_NODE,
    });
  }
}
