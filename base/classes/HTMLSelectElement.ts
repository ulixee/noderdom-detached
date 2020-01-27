import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLOptionsCollection, IHTMLCollection, IValidityState, INodeList, IElement, IHTMLOptionElement, IHTMLOptGroupElement, IHTMLElement, IHTMLSelectElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLSelectElement extends HTMLElement implements IHTMLSelectElement {
  protected readonly _: IHTMLSelectElementRps = {};

  // properties

  public get autocomplete(): string {
    return InternalHandler.get<HTMLSelectElement, string>(this, 'autocomplete');
  }

  public set autocomplete(value: string) {
    InternalHandler.set<HTMLSelectElement, string>(this, 'autocomplete', value);
  }

  public get disabled(): boolean {
    return InternalHandler.get<HTMLSelectElement, boolean>(this, 'disabled');
  }

  public set disabled(value: boolean) {
    InternalHandler.set<HTMLSelectElement, boolean>(this, 'disabled', value);
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<HTMLSelectElement, IHTMLFormElement | null>(this, 'form');
  }

  public get labels(): INodeList {
    return InternalHandler.get<HTMLSelectElement, INodeList>(this, 'labels');
  }

  public get length(): number {
    return InternalHandler.get<HTMLSelectElement, number>(this, 'length');
  }

  public set length(value: number) {
    InternalHandler.set<HTMLSelectElement, number>(this, 'length', value);
  }

  public get multiple(): boolean {
    return InternalHandler.get<HTMLSelectElement, boolean>(this, 'multiple');
  }

  public set multiple(value: boolean) {
    InternalHandler.set<HTMLSelectElement, boolean>(this, 'multiple', value);
  }

  public get name(): string {
    return InternalHandler.get<HTMLSelectElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<HTMLSelectElement, string>(this, 'name', value);
  }

  public get options(): IHTMLOptionsCollection {
    return InternalHandler.get<HTMLSelectElement, IHTMLOptionsCollection>(this, 'options');
  }

  public get required(): boolean {
    return InternalHandler.get<HTMLSelectElement, boolean>(this, 'required');
  }

  public set required(value: boolean) {
    InternalHandler.set<HTMLSelectElement, boolean>(this, 'required', value);
  }

  public get selectedIndex(): number {
    return InternalHandler.get<HTMLSelectElement, number>(this, 'selectedIndex');
  }

  public set selectedIndex(value: number) {
    InternalHandler.set<HTMLSelectElement, number>(this, 'selectedIndex', value);
  }

  public get selectedOptions(): IHTMLCollection {
    return InternalHandler.get<HTMLSelectElement, IHTMLCollection>(this, 'selectedOptions');
  }

  public get size(): number {
    return InternalHandler.get<HTMLSelectElement, number>(this, 'size');
  }

  public set size(value: number) {
    InternalHandler.set<HTMLSelectElement, number>(this, 'size', value);
  }

  public get type(): string {
    return InternalHandler.get<HTMLSelectElement, string>(this, 'type');
  }

  public get validationMessage(): string {
    return InternalHandler.get<HTMLSelectElement, string>(this, 'validationMessage');
  }

  public get validity(): IValidityState {
    return InternalHandler.get<HTMLSelectElement, IValidityState>(this, 'validity');
  }

  public get value(): string {
    return InternalHandler.get<HTMLSelectElement, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<HTMLSelectElement, string>(this, 'value', value);
  }

  public get willValidate(): boolean {
    return InternalHandler.get<HTMLSelectElement, boolean>(this, 'willValidate');
  }

  // methods

  public add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void {
    InternalHandler.run<HTMLSelectElement, void>(this, 'add', [element, before]);
  }

  public checkValidity(): boolean {
    return InternalHandler.run<HTMLSelectElement, boolean>(this, 'checkValidity', []);
  }

  public item(index: number): IElement | null {
    return InternalHandler.run<HTMLSelectElement, IElement | null>(this, 'item', [index]);
  }

  public namedItem(name: string): IHTMLOptionElement | null {
    return InternalHandler.run<HTMLSelectElement, IHTMLOptionElement | null>(this, 'namedItem', [name]);
  }

  public remove(index?: number): void {
    InternalHandler.run<HTMLSelectElement, void>(this, 'remove', [index]);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<HTMLSelectElement, boolean>(this, 'reportValidity', []);
  }

  public setCustomValidity(error: string): void {
    InternalHandler.run<HTMLSelectElement, void>(this, 'setCustomValidity', [error]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLSelectElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLSelectElement, void>(this, 'removeEventListener', [type, listener, options]);
  }

  [index: number]: IElement;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLSelectElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLSelectElementRps extends IHTMLElementRps {
  readonly form?: IHTMLFormElement | null;
  readonly labels?: INodeList;
  readonly options?: IHTMLOptionsCollection;
  readonly selectedOptions?: IHTMLCollection;
  readonly type?: string;
  readonly validationMessage?: string;
  readonly validity?: IValidityState;
  readonly willValidate?: boolean;
}

export function setHTMLSelectElementRps(instance: IHTMLSelectElement, data: IHTMLSelectElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLSelectElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLSelectElement`);
    }
    properties[key] = value;
  });
}
