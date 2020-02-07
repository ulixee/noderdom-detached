import { IAttr, IElement, INamedNodeMap } from '../../base/interfaces';
import { setReadonlyOfAttr } from '../../base/classes/Attr';
import GeneratedNamedNodeMap, {
  INamedNodeMapProperties as IOriginalNamedNodeMapProperties,
  INamedNodeMapReadonlyProperties as IOriginalNamedNodeMapReadonlyProperties,
} from '../../base/classes/NamedNodeMap';
import DOMException from './DOMException';
import StateMachine from '../../base/StateMachine';
import { iterableIteratorForArray } from '../utils/iterable';

export default class NamedNodeMap extends GeneratedNamedNodeMap implements INamedNodeMap {
  private readonly proxy: any;

  constructor() {
    super();
    const self = this;
    const proxy = new Proxy(this, {
      get(_: any, prop: string | number) {
        if (prop === 'proxy') return undefined;
        if (prop === '_internalInstance') return self;
        const propIsNumber = typeof prop === 'number' || (typeof prop === 'string' && !isNaN(prop as any));
        if (propIsNumber) {
          return self.item.call(self, Number(prop));
        }
        const value = (self as any)[prop];
        return typeof value === 'function' ? value.bind(self) : value;
      },
    });
    Object.defineProperty(this, 'proxy', { enumerable: false, value: proxy });
    setState(proxy, { itemsByName: new Map(), items: [] });
    return proxy;
  }

  public get length(): number {
    return getState(this.proxy).itemsByName.size;
  }

  public getNamedItem(qualifiedName: string): IAttr | null {
    const { itemsByName } = getState(this.proxy);
    return itemsByName.has(qualifiedName) ? itemsByName.get(qualifiedName) : null;
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr | null {
    const items: IAttr[] = getState(this.proxy).itemsByName.values();
    for (const attr of items) {
      if (attr.localName === localName && attr.namespaceURI === namespace) {
        return attr;
      }
    }
    return null;
  }

  public item(index: number): IAttr | null {
    return getState(this.proxy).items[index] || null;
  }

  public removeNamedItem(qualifiedName: string): IAttr {
    const attr = this.getNamedItem(qualifiedName);
    if (attr === null) {
      throw new DOMException(undefined, 'NotFoundError');
    }
    removeNamedNode(this.proxy, attr);
    return attr;
  }

  public removeNamedItemNS(namespace: string | null, localName: string): IAttr {
    const attr = this.getNamedItemNS(namespace, localName);
    if (attr === null) {
      throw new DOMException(undefined, 'NotFoundError');
    }
    removeNamedNode(this.proxy, attr);
    return attr;
  }

  public setNamedItem(attr: IAttr): IAttr | null {
    const el = attr.ownerElement;
    const ownerElement = getState(this.proxy).ownerElement;
    if (el && el !== ownerElement) {
      throw new DOMException(undefined, 'InuseAttributeError');
    }
    const oldAttr = this.getNamedItem(attr.nodeName);
    addNamedNode(this.proxy, attr, oldAttr);
    return oldAttr;
  }

  public setNamedItemNS(attr: IAttr): IAttr | null {
    const el = attr.ownerElement;
    const ownerElement = getState(this.proxy).ownerElement;
    let oldAttr: IAttr | null;
    if (el && el !== ownerElement) {
      throw new DOMException(undefined, 'InuseAttributeError');
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    addNamedNode(this.proxy, attr, oldAttr);
    return oldAttr;
  }

  public [Symbol.iterator](): IterableIterator<IAttr> {
    return iterableIteratorForArray<IAttr>(() => getState(this.proxy).items);
  }

  [index: number]: IAttr;
}

////////////////////////////////////////

function addNamedNode(namedNodeMap: NamedNodeMap, newAttr: IAttr, oldAttr: IAttr | null) {
  const { itemsByName, items } = getState(namedNodeMap);
  const ownerElement = getState(namedNodeMap).ownerElement;
  const internalInstance: NamedNodeMap = (namedNodeMap as any)._internalInstance;
  let indexOfNewAttr = items.length;

  if (oldAttr) {
    const indexOfOldAttr = items.indexOf(oldAttr);
    if (indexOfOldAttr >= 0) {
      indexOfNewAttr = indexOfOldAttr;
    }
    itemsByName.delete(oldAttr.name);
    setReadonlyOfAttr(oldAttr, { ownerElement: null });
  }

  items[indexOfNewAttr] = newAttr;
  itemsByName.set(newAttr.name, newAttr);
  if (ownerElement) {
    setReadonlyOfAttr(newAttr, { ownerElement });
  }

  createAttrProperty(namedNodeMap, internalInstance, indexOfNewAttr, newAttr);
}

function removeNamedNode(namedNodeMap: NamedNodeMap, attr: IAttr) {
  const { itemsByName, items } = getState(namedNodeMap);
  const ownerElement = getState(namedNodeMap).ownerElement;
  const internalInstance: NamedNodeMap = (namedNodeMap as any)._internalInstance;
  if (!itemsByName.has(attr.name)) {
    throw new DOMException(`${ownerElement.nodeName}@${attr}`, 'NotFoundError');
  }

  itemsByName.delete(attr.name);
  setReadonlyOfAttr(attr, { ownerElement: null });

  const indexOfAttr = items.indexOf(attr);
  if (indexOfAttr >= 0) {
    items.splice(indexOfAttr, 1);
    for (let i = indexOfAttr; i < items.size; i += 1) {
      createAttrProperty(namedNodeMap, internalInstance, i, attr);
    }
    delete internalInstance[items.size];
  }
}

function createAttrProperty(namedNodeMap: INamedNodeMap, internalInstance: INamedNodeMap, i: number, attr: IAttr) {
  Object.defineProperty(internalInstance, i, {
    get: () => namedNodeMap.getNamedItem.call(internalInstance, attr.name),
    enumerable: true,
    configurable: true,
  });
}

// SUPPORT FOR CUSTOM INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INamedNodeMapProperties extends IOriginalNamedNodeMapProperties {
  ownerElement?: IElement;
  itemsByName?: Map<string, IAttr>;
  items?: IAttr[];
}

export interface INamedNodeMapReadonlyProperties extends IOriginalNamedNodeMapReadonlyProperties {
  ownerElement?: IElement;
  itemsByName?: Map<string, IAttr>;
  items?: IAttr[];
}

export const { getState, setState, setReadonlyOfNamedNodeMap } = StateMachine<
  INamedNodeMap,
  INamedNodeMapProperties,
  INamedNodeMapReadonlyProperties
>('NamedNodeMap');
