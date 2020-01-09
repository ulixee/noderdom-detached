import { INode, IXMLSerializer } from '../interfaces';
import NodeType from '../constants/NodeType';
import XMLDocument from './XMLDocument';

const serialize = require('w3c-xmlserializer');

export default class XMLSerializer implements IXMLSerializer {
  public serializeToString(root: INode): string {
    let serialized = '';
    if (root.nodeType === NodeType.DOCUMENT_NODE && root.constructor.name === 'XMLDocument') {
      const document = root as XMLDocument;
      serialized += '<?xml version="1.0"';
      if (document.inputEncoding) {
        serialized += ` encoding="${document.inputEncoding}"`;
      }
      serialized += '?>';
    }

    serialized += serialize(root, { requireWellFormed: true });

    return serialized;
  }
}
