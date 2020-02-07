import { IHTMLElement, INode } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
// tslint:disable-next-line:function-name
export function _visitNode(n: INode, callback: (node: INode) => boolean | undefined | void) {
  let node: INode | null = n;

  if (callback(node)) {
    return true;
  }

  node = node.firstChild;

  while (node) {
    if (_visitNode(node, callback)) {
      return true;
    }
    node = node.nextSibling;
  }
}

export function findParentElement(node: INode): IHTMLElement | null {
  let ancestorNode = node.parentNode as INode;
  while (ancestorNode) {
    if ([NODE_TYPE.ELEMENT_NODE, NODE_TYPE.DOCUMENT_NODE].includes(ancestorNode.nodeType)) {
      return ancestorNode as IHTMLElement;
    }
    ancestorNode = ancestorNode.parentNode as INode;
  }
  return null;
}
