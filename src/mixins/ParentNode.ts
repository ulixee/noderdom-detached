import { IElement, INode, IParentNode, IHTMLCollection } from '../../base/interfaces';
import GeneratedParentNode from '../../base/mixins/ParentNode';
import HTMLCollection, { pushIntoHTMLCollection } from '../api/HTMLCollection';
import Node from '../api/Node';

export default class ParentNode extends GeneratedParentNode implements IParentNode {
  public get children(): IHTMLCollection {
    const children: HTMLCollection = new HTMLCollection();
    const nodes = ((this as unknown) as Node).childNodes;
    if (!nodes) return children;
    let i = 0;
    while (nodes[i]) {
      if (nodes[i].nodeType === 1) {
        pushIntoHTMLCollection(children, nodes[i] as IElement);
      }
      i += 1;
    }
    return children;
  }

  public get firstElementChild(): IElement | null {
    return this.children[0];
  }

  public get lastElementChild(): IElement | null {
    const children = this.children;
    return children[children.length - 1];
  }

  public append(...nodes: (INode | string)[]): void {
    const ownerNode = (this as unknown) as Node;
    for (let node of nodes) {
      if (typeof node === 'string') {
        node = ownerNode.ownerDocument!.createTextNode(node as string);
      }
      ownerNode.appendChild<Node>(node as Node);
    }
  }
}
