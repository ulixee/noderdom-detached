import {
  IAttr,
  IElement,
  IHTMLElement,
  IHTMLElementTagNameMap,
  ISVGElement,
  ISVGElementTagNameMap,
  IHTMLCollection,
} from '../../base/interfaces';
import BaseElement, { setElementRps } from '../../base/classes/Element';
import NODE_TYPE from '../constants/NodeType';

import { fragmentSerialization } from '../parser/Serialization';
import { isElement } from '../lib/utils';
import DOMException from './DOMException';
import { _visitNode } from '../lib/document-utils';
import HTMLCollectionOf from './HTMLCollectionOf';
import HTMLElement from './HTMLElement';
import NamedNodeMap from './NamedNodeMap';

export default class Element extends BaseElement implements IElement {
  public get outerHTML(): string {
    return fragmentSerialization(this, {
      requireWellFormed: true,
      serializeFullNode: true,
    });
  }

  constructor() {
    super();
    setElementRps(this, {
      nodeType: NODE_TYPE.ELEMENT_NODE,
      attributes: new NamedNodeMap(this),
    });
  }

  public getAttribute(qualifiedName: string): string | null {
    const attr = this.getAttributeNode(qualifiedName);
    return attr != null ? attr.value || '' : null;
  }

  public getAttributeNS(namespace: string | null, localName: string): string | null {
    const attr = this.getAttributeNodeNS(namespace || '', localName);
    return (attr && attr.value) || '';
  }

  public getAttributeNode(name: string): IAttr | null {
    return this.attributes.getNamedItem(name);
  }

  public getAttributeNodeNS(namespaceURI: string, localName: string): IAttr | null {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection<IElement | any> {
    const ls: Element[] = [];
    _visitNode(this, node => {
      if (node !== this && isElement(node) && (qualifiedName === '*' || node.tagName === qualifiedName)) {
        ls.push(node as Element);
      }
    });
    return new HTMLCollectionOf<Element>(...ls);
  }

  public getElementsByTagNameNS(namespaceURI: string, localName: string): IHTMLCollection<IHTMLElement | ISVGElement> {
    const ls: HTMLElement[] = [];
    _visitNode(this, node => {
      if (
        node !== this &&
        isElement(node) &&
        (namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
        (localName === '*' || node.localName === localName)
      ) {
        ls.push(node as HTMLElement);
      }
    });
    return new HTMLCollectionOf<HTMLElement>(...ls);
  }

  public hasAttribute(qualifiedName: string): boolean {
    return this.getAttributeNode(qualifiedName) != null;
  }

  public hasAttributeNS(namespace: string | null, localName: string): boolean {
    return this.getAttributeNodeNS(namespace || '', localName) != null;
  }

  public hasAttributes(): boolean {
    return isElement(this) ? this.attributes.length > 0 : false;
  }

  public removeAttribute(qualifiedName: string): void {
    const attr = this.getAttributeNode(qualifiedName);
    if (attr) {
      this.removeAttributeNode(attr);
    }
  }

  public removeAttributeNS(namespace: string | null, localName: string): void {
    const old = this.getAttributeNodeNS(namespace || '', localName);
    if (old) {
      this.removeAttributeNode(old);
    }
  }

  public removeAttributeNode(attr: IAttr): IAttr {
    return this.attributes.removeNamedItem(attr.nodeName);
  }

  public setAttribute(qualifiedName: string, value: string): void {
    const attr = this.ownerDocument!.createAttribute(qualifiedName);
    attr.value = attr.nodeValue = `${value}`;
    this.setAttributeNode(attr);
  }

  public setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
    const attr = this.ownerDocument!.createAttributeNS(namespace, qualifiedName);
    attr.value = attr.nodeValue = `${value}`;
    this.setAttributeNode(attr);
  }

  public setAttributeNode(attr: IAttr): IAttr | null {
    if (this.ownerDocument !== attr.ownerDocument) {
      throw new DOMException(undefined, 'WrongDocumentError');
    }
    return this.attributes.setNamedItem(attr);
  }

  public setAttributeNodeNS(attr: IAttr): IAttr | null {
    if (this.ownerDocument !== attr.ownerDocument) {
      throw new DOMException(undefined, 'WrongDocumentError');
    }
    return this.attributes.setNamedItemNS(attr);
  }
}

export { setElementRps };
