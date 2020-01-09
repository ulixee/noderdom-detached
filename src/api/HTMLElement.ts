import Element from './Element';
import DocumentAndElementEventHandlers from './DocumentAndElementEventHandlers';
import {
  IAddEventListenerOptions,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IHTMLElement,
  IHTMLElementEventMap,
} from '../interfaces';
import GlobalEventHandlers from './GlobalEventHandlers';
import ElementCSSInlineStyle from './ElementCSSInlineStyle';
import ElementContentEditable from './ElementContentEditable';
import HTMLOrSVGElement from './HTMLOrSVGElement';

// tslint:disable-next-line:variable-name
const HTMLElementBase = DocumentAndElementEventHandlers(
  ElementCSSInlineStyle(ElementContentEditable(GlobalEventHandlers(HTMLOrSVGElement(Element)))),
);

export default class HTMLElement extends HTMLElementBase implements IHTMLElement {
  public accessKey: string;
  public readonly accessKeyLabel: string;
  public autocapitalize: string;
  public dir: string;
  public draggable: boolean;
  public hidden: boolean;
  public innerText: string;
  public lang: string;
  public readonly offsetHeight: number;
  public readonly offsetLeft: number;
  public readonly offsetParent: Element | null;
  public readonly offsetTop: number;
  public readonly offsetWidth: number;
  public spellcheck: boolean;
  public title: string;
  public translate: boolean;

  public click(): void {
    throw new Error('Method not implemented.');
  }

  public addEventListener<K extends keyof IHTMLElementEventMap>(
    _type: K,
    _listener: (this: HTMLElement, ev: IHTMLElementEventMap[K]) => any,
    _options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject,
    _options?: boolean | IAddEventListenerOptions,
  ): void {
    throw new Error('Method not implemented.');
  }

  public removeEventListener<K extends keyof IHTMLElementEventMap>(
    _type: K,
    _listener: (this: HTMLElement, ev: IHTMLElementEventMap[K]) => any,
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
