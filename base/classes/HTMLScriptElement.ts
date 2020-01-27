import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLScriptElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLScriptElement extends HTMLElement implements IHTMLScriptElement {
  public get charset(): string {
    return InternalHandler.get<HTMLScriptElement, string>(this, 'charset');
  }

  public set charset(value: string) {
    InternalHandler.set<HTMLScriptElement, string>(this, 'charset', value);
  }

  public get crossOrigin(): string | null {
    return InternalHandler.get<HTMLScriptElement, string | null>(this, 'crossOrigin');
  }

  public set crossOrigin(value: string | null) {
    InternalHandler.set<HTMLScriptElement, string | null>(this, 'crossOrigin', value);
  }

  public get defer(): boolean {
    return InternalHandler.get<HTMLScriptElement, boolean>(this, 'defer');
  }

  public set defer(value: boolean) {
    InternalHandler.set<HTMLScriptElement, boolean>(this, 'defer', value);
  }

  public get event(): string {
    return InternalHandler.get<HTMLScriptElement, string>(this, 'event');
  }

  public set event(value: string) {
    InternalHandler.set<HTMLScriptElement, string>(this, 'event', value);
  }

  public get htmlFor(): string {
    return InternalHandler.get<HTMLScriptElement, string>(this, 'htmlFor');
  }

  public set htmlFor(value: string) {
    InternalHandler.set<HTMLScriptElement, string>(this, 'htmlFor', value);
  }

  public get src(): string {
    return InternalHandler.get<HTMLScriptElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<HTMLScriptElement, string>(this, 'src', value);
  }

  public get text(): string {
    return InternalHandler.get<HTMLScriptElement, string>(this, 'text');
  }

  public set text(value: string) {
    InternalHandler.set<HTMLScriptElement, string>(this, 'text', value);
  }

  public get type(): string {
    return InternalHandler.get<HTMLScriptElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<HTMLScriptElement, string>(this, 'type', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLScriptElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLScriptElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLScriptElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLScriptElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLScriptElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLScriptElementRps extends IHTMLElementRps {}

export function setHTMLScriptElementRps(instance: IHTMLScriptElement, data: IHTMLScriptElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLScriptElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLScriptElement`);
    }
    properties[key] = value;
  });
}
