import {
  IAddEventListenerOptions,
  IAttr,
  IDOMRect,
  IDOMRectList,
  IDOMTokenList,
  IElement,
  IElementEventMap,
  IEvent,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IFullscreenOptions,
  IHTMLCollectionOf,
  IHTMLElement,
  IHTMLElementTagNameMap,
  IHTMLSlotElement,
  IInsertPosition,
  INamedNodeMap,
  IScrollIntoViewOptions,
  IShadowRoot,
  IShadowRootInit,
  ISVGElement,
  ISVGElementTagNameMap,
} from '../interfaces';
import DOMNode from './Node';
import Animatable from './Animatable';
import ChildishNode from './ChildishNode';
import InnerHTML from './InnerHTML';
import NonDocumentTypeChildNode from './NonDocumentTypeChildNode';
import { fragmentSerialization } from '../parser/Serialization';
import ParentNode from './ParentNode';
import Slotable from './Slotable';
import NODE_TYPE from '../constants/NodeType';
import { isElement } from '../lib/utils';
import DOMException from './DOMException';
import { _visitNode } from '../lib/document-utils';
import HTMLCollectionOf from './HTMLCollectionOf';
import HTMLElement from './HTMLElement';
import NamedNodeMap from './NamedNodeMap';

// tslint:disable-next-line:variable-name
const ElementBase = Animatable(ChildishNode(InnerHTML(NonDocumentTypeChildNode(ParentNode(Slotable(DOMNode))))));

export default class Element extends ElementBase implements IElement {
  public readonly assignedSlot: IHTMLSlotElement | null = null;
  public readonly attributes: INamedNodeMap;
  public readonly classList: IDOMTokenList;
  public className: string;
  public readonly clientHeight: number;
  public readonly clientLeft: number;
  public readonly clientTop: number;
  public readonly clientWidth: number;
  public id: string;
  public readonly localName: string;
  public readonly namespaceURI: string | null = null;
  public onfullscreenchange: ((this: IElement, ev: IEvent) => any) | null;
  public onfullscreenerror: ((this: IElement, ev: IEvent) => any) | null;

  public get outerHTML(): string {
    return fragmentSerialization(this, {
      requireWellFormed: true,
      serializeFullNode: true,
    });
  }
  public set outerHTML(_html: string) {
    throw new Error('Set property not implemented.');
  }

  public readonly prefix: string | null = null;
  public readonly scrollHeight: number;
  public scrollLeft: number;
  public scrollTop: number;
  public readonly scrollWidth: number;
  public readonly shadowRoot: IShadowRoot | null = null;
  public slot: string;
  public readonly tagName: string;

  constructor() {
    super({
      nodeType: NODE_TYPE.ELEMENT_NODE,
    });
    this.attributes = new NamedNodeMap(this);
  }

  public attachShadow(_init: IShadowRootInit): IShadowRoot {
    throw new Error('Method not implemented.');
  }

  public closest<K extends keyof IHTMLElementTagNameMap>(_selector: K): IHTMLElementTagNameMap[K] | null;
  public closest<K extends keyof ISVGElementTagNameMap>(_selector: K): ISVGElementTagNameMap[K] | null;
  public closest<E extends Element = Element>(_selector: string): E | null {
    throw new Error('Method not implemented.');
  }

  public getAttribute(qualifiedName: string): string | null {
    const attr = this.getAttributeNode(qualifiedName);
    return attr != null ? attr.value || '' : null;
  }

  public getAttributeNS(namespace: string | null, localName: string): string | null {
    const attr = this.getAttributeNodeNS(namespace || '', localName);
    return (attr && attr.value) || '';
  }

  public getAttributeNames(): string[] {
    throw new Error('Method not implemented.');
  }

  public getAttributeNode(name: string): IAttr | null {
    return this.attributes.getNamedItem(name);
  }

  public getAttributeNodeNS(namespaceURI: string, localName: string): IAttr | null {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  }

  public getBoundingClientRect(): IDOMRect {
    throw new Error('Method not implemented.');
  }

  public getClientRects(): IDOMRectList {
    throw new Error('Method not implemented.');
  }
  public getElementsByClassName(_classNames: string): IHTMLCollectionOf<IElement> {
    throw new Error('Method not implemented.');
  }

  public getElementsByTagName<K extends keyof IHTMLElementTagNameMap>(
    qualifiedName: K,
  ): IHTMLCollectionOf<IHTMLElementTagNameMap[K]>;
  public getElementsByTagName<K extends keyof ISVGElementTagNameMap>(
    qualifiedName: K,
  ): IHTMLCollectionOf<ISVGElementTagNameMap[K]>;
  public getElementsByTagName(qualifiedName: string): IHTMLCollectionOf<IElement | any> {
    const ls: Element[] = [];
    _visitNode(this, node => {
      if (node !== this && isElement(node) && (qualifiedName === '*' || node.tagName === qualifiedName)) {
        ls.push(node as Element);
      }
    });
    return new HTMLCollectionOf<Element>(...ls);
  }

  public getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string,
  ): IHTMLCollectionOf<IHTMLElement>;
  public getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string,
  ): IHTMLCollectionOf<ISVGElement>;
  public getElementsByTagNameNS(
    namespaceURI: string,
    localName: string,
  ): IHTMLCollectionOf<IHTMLElement | ISVGElement> {
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

  public hasPointerCapture(_pointerId: number): boolean {
    throw new Error('Method not implemented.');
  }

  public insertAdjacentElement(_position: IInsertPosition, _insertedElement: IElement): IElement | null {
    throw new Error('Method not implemented.');
  }

  public insertAdjacentHTML(_where: IInsertPosition, _html: string): void {
    throw new Error('Method not implemented.');
  }

  public insertAdjacentText(_where: IInsertPosition, _text: string): void {
    throw new Error('Method not implemented.');
  }

  public matches(_selectors: string): boolean {
    throw new Error('Method not implemented.');
  }

  public msGetRegionContent(): any {
    throw new Error('Method not implemented.');
  }

  public releasePointerCapture(_pointerId: number): void {
    throw new Error('Method not implemented.');
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
    const oldAttr = this.attributes.removeNamedItem(attr.nodeName);
    return oldAttr;
  }

  public requestFullscreen(_options?: IFullscreenOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public requestPointerLock(): void {
    throw new Error('Method not implemented.');
  }

  public scroll(..._args: any[]): void {
    // options?: ScrollToOptions
    // x: number, y: number
    throw new Error('Method not implemented.');
  }

  public scrollBy(..._args: any[]): void {
    // options?: ScrollToOptions
    // x: number, y: number
    throw new Error('Method not implemented.');
  }

  public scrollIntoView(_arg?: boolean | IScrollIntoViewOptions): void {
    throw new Error('Method not implemented.');
  }

  public scrollTo(..._args: any[]): void {
    // options?: ScrollToOptions
    // x: number, y: number
    throw new Error('Method not implemented.');
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
    const oldAttr = this.attributes.setNamedItem(attr);
    return oldAttr;
  }

  public setAttributeNodeNS(attr: IAttr): IAttr | null {
    if (this.ownerDocument !== attr.ownerDocument) {
      throw new DOMException(undefined, 'WrongDocumentError');
    }
    const oldAttr = this.attributes.setNamedItemNS(attr);
    return oldAttr;
  }

  public setPointerCapture(_pointerId: number): void {
    throw new Error('Method not implemented.');
  }

  public toggleAttribute(_qualifiedName: string, _force?: boolean): boolean {
    throw new Error('Method not implemented.');
  }

  public webkitMatchesSelector(_selectors: string): boolean {
    throw new Error('Method not implemented.');
  }

  public addEventListener<K extends keyof IElementEventMap>(
    _type: K,
    _listener: (this: IElement, ev: IElementEventMap[K]) => any,
    _options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject,
    _options?: boolean | IAddEventListenerOptions,
  ): void {
    throw new Error('Method not implemented.');
  }

  public removeEventListener<K extends keyof IElementEventMap>(
    _type: K,
    _listener: (this: IElement, ev: IElementEventMap[K]) => any,
    _options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject,
    _options?: boolean | IEventListenerOptions,
  ): void {
    throw new Error('Method not implemented.');
  }
}
