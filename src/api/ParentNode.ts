import {
  IElement,
  IHTMLElementTagNameMap,
  INode,
  INodeListOf,
  IParentNode,
  ISVGElementTagNameMap,
} from '../interfaces';
import HTMLCollection from './HTMLCollection';
import Node from './Node';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ParentNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements IParentNode {
    public readonly childElementCount: number;

    public get children(): HTMLCollection {
      const children: HTMLCollection = new HTMLCollection();
      // @ts-ignore
      const nodes = this.childNodes;
      if (!nodes) return children;
      let i = 0;
      while (nodes[i]) {
        if (nodes[i].nodeType === 1) {
          children.push(nodes[i]);
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
        console.log('APPENDING ', node.nodeName);
        ownerNode.appendChild<Node>(node as Node);
      }
    }

    public prepend(..._nodes: (INode | string)[]): void {
      throw new Error('Method not implemented.');
    }

    public querySelector<K extends keyof IHTMLElementTagNameMap>(_selectors: K): IHTMLElementTagNameMap[K] | null;
    public querySelector<K extends keyof ISVGElementTagNameMap>(_selectors: K): ISVGElementTagNameMap[K] | null;
    public querySelector<E extends IElement = IElement>(_selectors: string): E | null {
      throw new Error('Method not implemented.');
    }

    public querySelectorAll<K extends keyof IHTMLElementTagNameMap>(
      _selectors: K,
    ): INodeListOf<IHTMLElementTagNameMap[K]>;
    public querySelectorAll<K extends keyof ISVGElementTagNameMap>(
      _selectors: K,
    ): INodeListOf<ISVGElementTagNameMap[K]>;
    public querySelectorAll<E extends IElement = IElement>(_selectors: string): INodeListOf<E> {
      throw new Error('Method not implemented.');
    }
  };
}
