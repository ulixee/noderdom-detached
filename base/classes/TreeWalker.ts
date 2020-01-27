import InternalHandler from '../InternalHandler';
import { INode, INodeFilter, ITreeWalker } from '../interfaces';

export default class TreeWalker implements ITreeWalker {
  protected readonly _: ITreeWalkerRps = {};

  // properties

  public get currentNode(): INode {
    return InternalHandler.get<TreeWalker, INode>(this, 'currentNode');
  }

  public set currentNode(value: INode) {
    InternalHandler.set<TreeWalker, INode>(this, 'currentNode', value);
  }

  public get filter(): INodeFilter | null {
    return InternalHandler.get<TreeWalker, INodeFilter | null>(this, 'filter');
  }

  public get root(): INode {
    return InternalHandler.get<TreeWalker, INode>(this, 'root');
  }

  public get whatToShow(): number {
    return InternalHandler.get<TreeWalker, number>(this, 'whatToShow');
  }

  // methods

  public firstChild(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'firstChild', []);
  }

  public lastChild(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'lastChild', []);
  }

  public nextNode(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'nextNode', []);
  }

  public nextSibling(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'nextSibling', []);
  }

  public parentNode(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'parentNode', []);
  }

  public previousNode(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'previousNode', []);
  }

  public previousSibling(): INode | null {
    return InternalHandler.run<TreeWalker, INode | null>(this, 'previousSibling', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpTreeWalkerKeys: Set<string> = new Set([]);

export interface ITreeWalkerRps {
  readonly filter?: INodeFilter | null;
  readonly root?: INode;
  readonly whatToShow?: number;
}

export function setTreeWalkerRps(instance: ITreeWalker, data: ITreeWalkerRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpTreeWalkerKeys.has(key)) {
      throw new Error(`${key} is not a property of TreeWalker`);
    }
    properties[key] = value;
  });
}
