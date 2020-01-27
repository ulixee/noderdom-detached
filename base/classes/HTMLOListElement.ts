import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLOListElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLOListElement extends HTMLElement implements IHTMLOListElement {
  public get compact(): boolean {
    return InternalHandler.get<HTMLOListElement, boolean>(this, 'compact');
  }

  public set compact(value: boolean) {
    InternalHandler.set<HTMLOListElement, boolean>(this, 'compact', value);
  }

  public get reversed(): boolean {
    return InternalHandler.get<HTMLOListElement, boolean>(this, 'reversed');
  }

  public set reversed(value: boolean) {
    InternalHandler.set<HTMLOListElement, boolean>(this, 'reversed', value);
  }

  public get start(): number {
    return InternalHandler.get<HTMLOListElement, number>(this, 'start');
  }

  public set start(value: number) {
    InternalHandler.set<HTMLOListElement, number>(this, 'start', value);
  }

  public get type(): string {
    return InternalHandler.get<HTMLOListElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<HTMLOListElement, string>(this, 'type', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLOListElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLOListElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLOListElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLOListElementRps extends IHTMLElementRps {}

export function setHTMLOListElementRps(instance: IHTMLOListElement, data: IHTMLOListElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLOListElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLOListElement`);
    }
    properties[key] = value;
  });
}
