import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLOptGroupElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLOptGroupElement extends HTMLElement implements IHTMLOptGroupElement {
  public get disabled(): boolean {
    return InternalHandler.get<HTMLOptGroupElement, boolean>(this, 'disabled');
  }

  public set disabled(value: boolean) {
    InternalHandler.set<HTMLOptGroupElement, boolean>(this, 'disabled', value);
  }

  public get label(): string {
    return InternalHandler.get<HTMLOptGroupElement, string>(this, 'label');
  }

  public set label(value: string) {
    InternalHandler.set<HTMLOptGroupElement, string>(this, 'label', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLOptGroupElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLOptGroupElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLOptGroupElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLOptGroupElementRps extends IHTMLElementRps {}

export function setHTMLOptGroupElementRps(instance: IHTMLOptGroupElement, data: IHTMLOptGroupElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLOptGroupElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLOptGroupElement`);
    }
    properties[key] = value;
  });
}
