import {
  IAddEventListenerOptions,
  IDocumentEventMap,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IXMLDocument,
} from '../interfaces';
import Document from './Document';

export default class XMLDocument extends Document implements IXMLDocument {
  public addEventListener<K extends keyof IDocumentEventMap>(
    _type: K,
    _listener: (this: XMLDocument, ev: IDocumentEventMap[K]) => any,
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
    _listener: (this: XMLDocument, ev: IDocumentEventMap[K]) => any,
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
