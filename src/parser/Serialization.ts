import XMLSerializer from 'w3c-xmlserializer';
// import parse5, { TreeAdapter } from 'parse5';
import DOMException from '../api/DOMException';
// import Parse5TreeAdapter from './Parse5TreeAdapter';
// import NODE_TYPE from '../constants/NodeType';
import { INode } from '../interfaces';
// import Document from '../api/Document';

interface IOptions {
  requireWellFormed: boolean;
  serializeFullNode?: boolean;
}

// function htmlSerialization(node: INode) {
//   const document = (node.nodeType === NODE_TYPE.DOCUMENT_NODE ? node : node.ownerDocument) as Document;
//   const domImplementation = document.implementation;
//   const config = {
//     treeAdapter: (new Parse5TreeAdapter(domImplementation, document) as unknown) as TreeAdapter,
//   };
//   return parse5.serialize(node, config);
// }

export function fragmentSerialization(node: INode, options: IOptions) {
  const { requireWellFormed, serializeFullNode } = options;
  // const document = (node.nodeType === NODE_TYPE.DOCUMENT_NODE ? node : node.ownerDocument) as Document;
  // const domImplementation = document.implementation;
  // if (document.parsingMode === 'html') {
  //   return htmlSerialization(node);
  // }

  const childNodes = serializeFullNode ? [node] : Array.from(node.childNodes);

  try {
    let serialized = '';
    for (const childNode of childNodes) {
      serialized += XMLSerializer(childNode, { requireWellFormed });
    }
    return serialized;
  } catch (e) {
    console.log(e);
    throw new DOMException(e.message, 'InvalidStateError');
  }
}
