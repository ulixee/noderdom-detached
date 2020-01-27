import InternalHandler from '../InternalHandler';
import { IHTMLFrameSetElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFrameSetElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';
import WindowEventHandlers, { IWindowEventHandlersRps, rpWindowEventHandlersKeys } from '../mixins/WindowEventHandlers';

// tslint:disable-next-line:variable-name
const HTMLFrameSetElementBase = WindowEventHandlers(HTMLElement);

export default class HTMLFrameSetElement extends HTMLFrameSetElementBase implements IHTMLFrameSetElement {
  public get cols(): string {
    return InternalHandler.get<HTMLFrameSetElement, string>(this, 'cols');
  }

  public set cols(value: string) {
    InternalHandler.set<HTMLFrameSetElement, string>(this, 'cols', value);
  }

  public get rows(): string {
    return InternalHandler.get<HTMLFrameSetElement, string>(this, 'rows');
  }

  public set rows(value: string) {
    InternalHandler.set<HTMLFrameSetElement, string>(this, 'rows', value);
  }

  public addEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLFrameSetElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLFrameSetElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLFrameSetElementKeys: Set<string> = new Set([...rpHTMLElementKeys, ...rpWindowEventHandlersKeys]);

export interface IHTMLFrameSetElementRps extends IHTMLElementRps, IWindowEventHandlersRps {}

export function setHTMLFrameSetElementRps(instance: IHTMLFrameSetElement, data: IHTMLFrameSetElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLFrameSetElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLFrameSetElement`);
    }
    properties[key] = value;
  });
}
