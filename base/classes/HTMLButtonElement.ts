import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IValidityState, INodeList, IHTMLButtonElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLButtonElement extends HTMLElement implements IHTMLButtonElement {
  protected readonly _: IHTMLButtonElementRps = {};

  // properties

  public get autofocus(): boolean {
    return InternalHandler.get<HTMLButtonElement, boolean>(this, 'autofocus');
  }

  public set autofocus(value: boolean) {
    InternalHandler.set<HTMLButtonElement, boolean>(this, 'autofocus', value);
  }

  public get disabled(): boolean {
    return InternalHandler.get<HTMLButtonElement, boolean>(this, 'disabled');
  }

  public set disabled(value: boolean) {
    InternalHandler.set<HTMLButtonElement, boolean>(this, 'disabled', value);
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<HTMLButtonElement, IHTMLFormElement | null>(this, 'form');
  }

  public get formNoValidate(): boolean {
    return InternalHandler.get<HTMLButtonElement, boolean>(this, 'formNoValidate');
  }

  public set formNoValidate(value: boolean) {
    InternalHandler.set<HTMLButtonElement, boolean>(this, 'formNoValidate', value);
  }

  public get formTarget(): string {
    return InternalHandler.get<HTMLButtonElement, string>(this, 'formTarget');
  }

  public set formTarget(value: string) {
    InternalHandler.set<HTMLButtonElement, string>(this, 'formTarget', value);
  }

  public get labels(): INodeList {
    return InternalHandler.get<HTMLButtonElement, INodeList>(this, 'labels');
  }

  public get name(): string {
    return InternalHandler.get<HTMLButtonElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<HTMLButtonElement, string>(this, 'name', value);
  }

  public get type(): string {
    return InternalHandler.get<HTMLButtonElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<HTMLButtonElement, string>(this, 'type', value);
  }

  public get validationMessage(): string {
    return InternalHandler.get<HTMLButtonElement, string>(this, 'validationMessage');
  }

  public get validity(): IValidityState {
    return InternalHandler.get<HTMLButtonElement, IValidityState>(this, 'validity');
  }

  public get value(): string {
    return InternalHandler.get<HTMLButtonElement, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<HTMLButtonElement, string>(this, 'value', value);
  }

  public get willValidate(): boolean {
    return InternalHandler.get<HTMLButtonElement, boolean>(this, 'willValidate');
  }

  // methods

  public checkValidity(): boolean {
    return InternalHandler.run<HTMLButtonElement, boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<HTMLButtonElement, boolean>(this, 'reportValidity', []);
  }

  public setCustomValidity(error: string): void {
    InternalHandler.run<HTMLButtonElement, void>(this, 'setCustomValidity', [error]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLButtonElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLButtonElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLButtonElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLButtonElementRps extends IHTMLElementRps {
  readonly form?: IHTMLFormElement | null;
  readonly labels?: INodeList;
  readonly validationMessage?: string;
  readonly validity?: IValidityState;
  readonly willValidate?: boolean;
}

export function setHTMLButtonElementRps(instance: IHTMLButtonElement, data: IHTMLButtonElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLButtonElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLButtonElement`);
    }
    properties[key] = value;
  });
}
