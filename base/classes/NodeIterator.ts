import InternalHandler from '../InternalHandler';
import { INode, INodeFilter, INodeIterator } from '../interfaces';

export default class NodeIterator implements INodeIterator {
  protected readonly _: INodeIteratorRps = {};

  // properties

  public get filter(): INodeFilter | null {
    return InternalHandler.get<NodeIterator, INodeFilter | null>(this, 'filter');
  }

  public get pointerBeforeReferenceNode(): boolean {
    return InternalHandler.get<NodeIterator, boolean>(this, 'pointerBeforeReferenceNode');
  }

  public get referenceNode(): INode {
    return InternalHandler.get<NodeIterator, INode>(this, 'referenceNode');
  }

  public get root(): INode {
    return InternalHandler.get<NodeIterator, INode>(this, 'root');
  }

  public get whatToShow(): number {
    return InternalHandler.get<NodeIterator, number>(this, 'whatToShow');
  }

  // methods

  public detach(): void {
    InternalHandler.run<NodeIterator, void>(this, 'detach', []);
  }

  public nextNode(): INode | null {
    return InternalHandler.run<NodeIterator, INode | null>(this, 'nextNode', []);
  }

  public previousNode(): INode | null {
    return InternalHandler.run<NodeIterator, INode | null>(this, 'previousNode', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpNodeIteratorKeys: Set<string> = new Set([]);

export interface INodeIteratorRps {
  readonly filter?: INodeFilter | null;
  readonly pointerBeforeReferenceNode?: boolean;
  readonly referenceNode?: INode;
  readonly root?: INode;
  readonly whatToShow?: number;
}

export function setNodeIteratorRps(instance: INodeIterator, data: INodeIteratorRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpNodeIteratorKeys.has(key)) {
      throw new Error(`${key} is not a property of NodeIterator`);
    }
    properties[key] = value;
  });
}
