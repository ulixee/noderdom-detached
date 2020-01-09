import { IAttr, IElement, INamedNodeMap, INode, IMutable } from '../interfaces';
import DOMException from './DOMException';
import Attr from '../api/Attr';

export default class NamedNodeMap extends Array<IAttr> implements INamedNodeMap {
  private readonly ownerElement: IElement;

  constructor(ownerElement: IElement) {
    super();
    this.ownerElement = ownerElement;
  }

  public get length() {
    return super.length;
  }

  public getNamedItem(qualifiedName: string): IAttr | null {
    for (const attr of this) {
      if (attr.nodeName === qualifiedName) {
        return attr;
      }
    }
    return null;
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr | null {
    for (const attr of this) {
      if (attr.localName === localName && attr.namespaceURI === namespace) {
        return attr;
      }
    }
    return null;
  }

  public item(index: number): IAttr | null {
    return this[index] || null;
  }

  public removeNamedItem(qualifiedName: string): IAttr {
    const attr = this.getNamedItem(qualifiedName);

    if (attr === null) {
      throw new DOMException(undefined, 'NotFoundError');
    }

    this.removeNamedNode(attr);
    return attr;
  }

  public removeNamedItemNS(namespace: string | null, localName: string): IAttr {
    const attr = this.getNamedItemNS(namespace, localName);

    if (attr === null) {
      throw new DOMException(undefined, 'NotFoundError');
    }

    this.removeNamedNode(attr);
    return attr;
  }

  public setNamedItem(attr: IAttr): IAttr | null {
    const el = attr.ownerElement;
    if (el && el !== this.ownerElement) {
      throw new DOMException(undefined, 'InuseAttributeError');
    }
    const oldAttr = this.getNamedItem(attr.nodeName);
    this.addNamedNode(attr, oldAttr);
    return oldAttr;
  }

  public setNamedItemNS(attr: IAttr): IAttr | null {
    const el = attr.ownerElement;
    let oldAttr: IAttr | null;
    if (el && el !== this.ownerElement) {
      throw new DOMException(undefined, 'InuseAttributeError');
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    this.addNamedNode(attr, oldAttr);
    return oldAttr;
  }

  [index: number]: IAttr;

  private findNodeIndex(node: INode) {
    let i = this.length;
    while (i > 0) {
      i -= 1;
      if (this[i] === node) {
        return i;
      }
    }
    return -1;
  }

  private addNamedNode(newAttr: IAttr, oldAttr: IAttr | null) {
    if (oldAttr) {
      this[this.findNodeIndex(oldAttr)] = newAttr;
    } else {
      this[this.length] = newAttr;
    }
    if (this.ownerElement) {
      (newAttr as IMutable<IAttr>).ownerElement = this.ownerElement;
    }
  }

  private removeNamedNode(attr: IAttr) {
    const i = this.findNodeIndex(attr);
    if (i < 0) {
      throw new DOMException(`${this.ownerElement.nodeName}@${attr}`, 'NotFoundError');
    }
    this.splice(i, 1);
    (attr as IMutable<Attr>).ownerElement = null;
  }
}
