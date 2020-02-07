import { IAttr, IElement, IHTMLElement, ISVGElement, IHTMLCollection } from '../../base/interfaces';
import { ElementGenerator, setState, internalHandler } from '../../base/classes/Element';
import NODE_TYPE from '../constants/NodeType';
import ChildNode from '../../base/mixins/ChildNode';
import NonDocumentTypeChildNode from '../mixins/NonDocumentTypeChildNode';
import ParentNode from '../mixins/ParentNode';
import Slotable from '../../base/mixins/Slotable';
import { fragmentSerialization } from '../parser/Serialization';
import DOMException from './DOMException';
import { isElement } from '../utils/utils';
import { _visitNode } from '../utils/document-utils';
import HTMLCollection, { setReadonlyOfHTMLCollection } from './HTMLCollection';
import HTMLElement from './HTMLElement';
import NamedNodeMap, { setReadonlyOfNamedNodeMap } from './NamedNodeMap';
import Node from './Node';
import Document from './Document';

// tslint:disable-next-line:variable-name
const GeneratedElement = ElementGenerator(Node, ChildNode, NonDocumentTypeChildNode, ParentNode, Slotable);

export default class Element extends GeneratedElement implements IElement {
  constructor() {
    super();
    const namedNodeMap = new NamedNodeMap();
    setReadonlyOfNamedNodeMap(namedNodeMap, {
      ownerElement: this,
    });
    setState(this, {
      nodeType: NODE_TYPE.ELEMENT_NODE,
      attributes: namedNodeMap,
    });
  }

  public get id(): string {
    return this.getAttribute('id') || '';
  }

  public get outerHTML(): string {
    const document = (this.nodeType === NODE_TYPE.DOCUMENT_NODE ? this : this.ownerDocument) as Document;
    return fragmentSerialization(document, { childNodes: [this] }, { requireWellFormed: false });
  }

  public get innerHTML(): string {
    const document = (this.nodeType === NODE_TYPE.DOCUMENT_NODE ? this : this.ownerDocument) as Document;
    return fragmentSerialization(document, this, { requireWellFormed: true });
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
    qualifiedName = qualifiedName.toUpperCase();
    const items: Element[] = [];
    _visitNode(this, node => {
      if (node !== this && isElement(node) && (qualifiedName === '*' || (node as IElement).tagName === qualifiedName)) {
        items.push(node as Element);
      }
    });
    const htmlCollection = new HTMLCollection<Element>();
    setReadonlyOfHTMLCollection(htmlCollection, { items });
    return htmlCollection;
  }

  public getElementsByTagNameNS(namespaceURI: string, localName: string): IHTMLCollection<IHTMLElement | ISVGElement> {
    localName = localName.toLowerCase();
    const items: HTMLElement[] = [];
    _visitNode(this, node => {
      if (
        node !== this &&
        isElement(node) &&
        (namespaceURI === '*' || (node as IElement).namespaceURI === namespaceURI) &&
        (localName === '*' || (node as IElement).localName === localName)
      ) {
        items.push(node as HTMLElement);
      }
    });
    const htmlCollection = new HTMLCollection<IHTMLElement>();
    setReadonlyOfHTMLCollection(htmlCollection, { items });
    return htmlCollection;
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

internalHandler.handle('attributes', 'tagName', 'localName', 'namespaceURI', 'prefix');
