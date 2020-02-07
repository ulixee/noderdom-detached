import { INode, INodeList } from '../../base/interfaces';
import GeneratedNodeList, {
  INodeListProperties as IOriginalNodeListProperties,
  INodeListReadonlyProperties as IOriginalNodeListReadonlyProperties,
} from '../../base/classes/NodeList';
import StateMachine from '../../base/StateMachine';
import { iterableIteratorForArray } from '../utils/iterable';

export default class NodeList<T extends INode = INode> extends GeneratedNodeList<T> implements INodeList<T> {
  private readonly proxy: any;

  constructor() {
    super();
    const self = this;
    const proxy = new Proxy(this, {
      get(_: any, prop: string | number) {
        if (prop === 'proxy') return undefined;
        const propIsNumber = typeof prop === 'number' || (typeof prop === 'string' && !isNaN(prop as any));
        if (propIsNumber) {
          return self.item.call(self, Number(prop));
        }
        const value = (self as any)[prop];
        return typeof value === 'function' ? value.bind(self) : value;
      },
    });
    Object.defineProperty(this, 'proxy', { enumerable: false, value: proxy });
    setState(proxy, { items: [] });
    return proxy;
  }

  public get length(): number {
    const { items } = getState(this.proxy as INodeList<T>);
    return items.length;
  }

  public item(index: number): T {
    const { items } = getState(this.proxy as INodeList<T>);
    return items[index];
  }

  forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void {
    const { items } = getState(this.proxy as INodeList<T>);
    items.forEach((value: any, key: number) => callbackfn(value as T, key, this), thisArg);
  }

  entries(): IterableIterator<[number, T]> {
    return iterableIteratorForArray<[number, T]>(() => {
      const { items } = getState(this.proxy as INodeList<T>);
      return items.map((item: any, index: number) => [index, item as T]);
    });
  }

  keys(): IterableIterator<number> {
    return iterableIteratorForArray<number>(() => {
      const { items } = getState(this.proxy as INodeList<T>);
      return items.map((_item: any, index: number) => index);
    });
  }

  values(): IterableIterator<T> {
    return iterableIteratorForArray<T>(() => {
      const { items } = getState(this.proxy as INodeList<T>);
      return items.map((item: any) => item as T);
    });
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return iterableIteratorForArray<T>(() => getState(this.proxy as INodeList<T>).items);
  }

  [index: number]: T;
}

// SUPPORT FOR CUSTOM INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INodeListProperties extends IOriginalNodeListProperties {
  items: any[];
}

export interface INodeListReadonlyProperties extends IOriginalNodeListReadonlyProperties {
  items: any[];
}

export const { getState, setState, setReadonlyOfNodeList } = StateMachine<
  INodeList,
  INodeListProperties,
  INodeListReadonlyProperties
>('NodeList');

// HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////

export function removeFromNodeList(nodeList: INodeList, child: INode) {
  const items = getState(nodeList).items;
  const i = items.indexOf(child);
  items.splice(i, 1);
}

export function spliceIntoNodeList(nodeList: INodeList, i: number, ...nodesToAdd: INode[]) {
  const { items } = getState(nodeList);
  items.splice(i, 0, ...nodesToAdd);
  setState(nodeList, { items });
}

export function indexOfNodeListItem(nodeList: INodeList, node: INode) {
  const { items } = getState(nodeList);
  return items.indexOf(node);
}
