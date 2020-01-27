import InternalHandler from '../InternalHandler';
import { IHTMLCollection, IElement, INode, INodeList, IParentNode } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ParentNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements IParentNode {
    public get childElementCount(): number {
      return InternalHandler.get<ParentNode, number>(this, 'childElementCount');
    }

    public get children(): IHTMLCollection {
      return InternalHandler.get<ParentNode, IHTMLCollection>(this, 'children');
    }

    public get firstElementChild(): IElement | null {
      return InternalHandler.get<ParentNode, IElement | null>(this, 'firstElementChild');
    }

    public get lastElementChild(): IElement | null {
      return InternalHandler.get<ParentNode, IElement | null>(this, 'lastElementChild');
    }

    // methods

    public append(...nodes: (INode | string)[]): void {
      InternalHandler.run<ParentNode, void>(this, 'append', [nodes]);
    }

    public prepend(...nodes: (INode | string)[]): void {
      InternalHandler.run<ParentNode, void>(this, 'prepend', [nodes]);
    }

    public querySelector(selectors: string): IElement | null {
      return InternalHandler.run<ParentNode, IElement | null>(this, 'querySelector', [selectors]);
    }

    public querySelectorAll(selectors: string): INodeList {
      return InternalHandler.run<ParentNode, INodeList>(this, 'querySelectorAll', [selectors]);
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpParentNodeKeys: Set<string> = new Set([]);

export interface IParentNodeRps {
  readonly childElementCount?: number;
  readonly children?: IHTMLCollection;
  readonly firstElementChild?: IElement | null;
  readonly lastElementChild?: IElement | null;
}
