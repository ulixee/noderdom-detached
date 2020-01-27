import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableCellElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLTableCellElement extends HTMLElement implements IHTMLTableCellElement {
  protected readonly _: IHTMLTableCellElementRps = {};

  // properties

  public get abbr(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'abbr');
  }

  public set abbr(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'abbr', value);
  }

  public get align(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'align', value);
  }

  public get axis(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'axis');
  }

  public set axis(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'axis', value);
  }

  public get bgColor(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'bgColor');
  }

  public set bgColor(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'bgColor', value);
  }

  public get cellIndex(): number {
    return InternalHandler.get<HTMLTableCellElement, number>(this, 'cellIndex');
  }

  public get ch(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'ch');
  }

  public set ch(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'ch', value);
  }

  public get chOff(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'chOff');
  }

  public set chOff(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'chOff', value);
  }

  public get colSpan(): number {
    return InternalHandler.get<HTMLTableCellElement, number>(this, 'colSpan');
  }

  public set colSpan(value: number) {
    InternalHandler.set<HTMLTableCellElement, number>(this, 'colSpan', value);
  }

  public get headers(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'headers');
  }

  public set headers(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'headers', value);
  }

  public get height(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'height');
  }

  public set height(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'height', value);
  }

  public get noWrap(): boolean {
    return InternalHandler.get<HTMLTableCellElement, boolean>(this, 'noWrap');
  }

  public set noWrap(value: boolean) {
    InternalHandler.set<HTMLTableCellElement, boolean>(this, 'noWrap', value);
  }

  public get rowSpan(): number {
    return InternalHandler.get<HTMLTableCellElement, number>(this, 'rowSpan');
  }

  public set rowSpan(value: number) {
    InternalHandler.set<HTMLTableCellElement, number>(this, 'rowSpan', value);
  }

  public get scope(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'scope');
  }

  public set scope(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'scope', value);
  }

  public get vAlign(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'vAlign');
  }

  public set vAlign(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'vAlign', value);
  }

  public get width(): string {
    return InternalHandler.get<HTMLTableCellElement, string>(this, 'width');
  }

  public set width(value: string) {
    InternalHandler.set<HTMLTableCellElement, string>(this, 'width', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLTableCellElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLTableCellElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLTableCellElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLTableCellElementRps extends IHTMLElementRps {
  readonly cellIndex?: number;
}

export function setHTMLTableCellElementRps(instance: IHTMLTableCellElement, data: IHTMLTableCellElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLTableCellElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLTableCellElement`);
    }
    properties[key] = value;
  });
}
