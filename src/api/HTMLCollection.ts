import {
  HTMLCollectionGenerator,
  IHTMLCollectionProperties as IOriginalHTMLCollectionProperties,
  IHTMLCollectionReadonlyProperties as IOriginalHTMLCollectionReadonlyProperties,
} from '../../base/classes/HTMLCollection';
import HTMLCollectionBase from '../../base/classes/HTMLCollectionBase';
import { IElement, IHTMLCollection } from '../../base/interfaces';
import StateMachine from '../../base/StateMachine';
import { iterableIteratorForArray } from '../utils/iterable';

// tslint:disable-next-line:variable-name
const GeneratedHTMLCollection = HTMLCollectionGenerator(HTMLCollectionBase);

export default class HTMLCollection<T extends IElement = IElement> extends GeneratedHTMLCollection<T>
  implements IHTMLCollection<T> {
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
        if (typeof value === 'function') {
          return value.bind(self);
        }
        if (value !== undefined) {
          return value;
        }
        return self.namedItem.call(self, prop as string);
      },
    });
    Object.defineProperty(this, 'proxy', { enumerable: false, value: proxy });
    setState(proxy, { items: [] });
    return proxy;
  }

  public get length(): number {
    const { items } = getState(this.proxy);
    return items.length;
  }

  public item(index: number): T | null {
    const { items } = getState(this.proxy);
    return items[index];
  }

  public namedItem(name: string): T | null {
    let itemWithName;
    const { items } = getState(this.proxy);
    for (const item of items) {
      if (item.id === name) {
        return item;
      }
      if ((item as any).name === name) {
        itemWithName = item;
      }
    }
    return itemWithName ? itemWithName : null;
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return iterableIteratorForArray<T>(() => getState(this.proxy).items);
  }

  [index: string]: IElement | any;
}

// SUPPORT FOR CUSTOM INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLCollectionProperties extends IOriginalHTMLCollectionProperties {
  items: IElement[];
}

export interface IHTMLCollectionReadonlyProperties extends IOriginalHTMLCollectionReadonlyProperties {
  items: IElement[];
}

export const { getState, setState, setReadonlyOfHTMLCollection } = StateMachine<
  IHTMLCollection,
  IHTMLCollectionProperties,
  IHTMLCollectionReadonlyProperties
>('HTMLCollection');

// HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////

export function removeFromHTMLCollection(htmlCollection: IHTMLCollection, child: IElement) {
  const items = getState(htmlCollection).items;
  const i = items.indexOf(child);
  items.splice(i, 1);
}

export function pushIntoHTMLCollection(htmlCollection: IHTMLCollection, ...elementsToAdd: IElement[]) {
  const { items } = getState(htmlCollection);
  items.push(...elementsToAdd);
  setState(htmlCollection, { items });
}
