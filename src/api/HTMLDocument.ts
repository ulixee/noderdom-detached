import {
  IAddEventListenerOptions,
  IDocumentEventMap,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IHTMLDocument,
} from '../interfaces';
import Document from './Document';

export default class HTMLDocument extends Document implements IHTMLDocument {
  public addEventListener<K extends keyof IDocumentEventMap>(
    _type: K,
    _listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any,
    _options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject,
    _options?: boolean | IAddEventListenerOptions,
  ): void {
    throw new Error('Method not implemented.');
  }

  public removeEventListener<K extends keyof IDocumentEventMap>(
    _type: K,
    _listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any,
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
