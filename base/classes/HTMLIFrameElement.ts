import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocument, IWindowProxy, IHTMLIFrameElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLIFrameElement extends HTMLElement implements IHTMLIFrameElement {
  protected readonly _: IHTMLIFrameElementRps = {};

  // properties

  public get align(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'align', value);
  }

  public get allowFullscreen(): boolean {
    return InternalHandler.get<HTMLIFrameElement, boolean>(this, 'allowFullscreen');
  }

  public set allowFullscreen(value: boolean) {
    InternalHandler.set<HTMLIFrameElement, boolean>(this, 'allowFullscreen', value);
  }

  public get contentDocument(): IDocument | null {
    return InternalHandler.get<HTMLIFrameElement, IDocument | null>(this, 'contentDocument');
  }

  public get contentWindow(): IWindowProxy | null {
    return InternalHandler.get<HTMLIFrameElement, IWindowProxy | null>(this, 'contentWindow');
  }

  public get frameBorder(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'frameBorder');
  }

  public set frameBorder(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'frameBorder', value);
  }

  public get height(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'height');
  }

  public set height(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'height', value);
  }

  public get longDesc(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'longDesc');
  }

  public set longDesc(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'longDesc', value);
  }

  public get marginHeight(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'marginHeight');
  }

  public set marginHeight(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'marginHeight', value);
  }

  public get marginWidth(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'marginWidth');
  }

  public set marginWidth(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'marginWidth', value);
  }

  public get name(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'name', value);
  }

  public get scrolling(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'scrolling');
  }

  public set scrolling(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'scrolling', value);
  }

  public get src(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'src', value);
  }

  public get srcdoc(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'srcdoc');
  }

  public set srcdoc(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'srcdoc', value);
  }

  public get width(): string {
    return InternalHandler.get<HTMLIFrameElement, string>(this, 'width');
  }

  public set width(value: string) {
    InternalHandler.set<HTMLIFrameElement, string>(this, 'width', value);
  }

  // methods

  public getSVGDocument(): IDocument | null {
    return InternalHandler.run<HTMLIFrameElement, IDocument | null>(this, 'getSVGDocument', []);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLIFrameElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLIFrameElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLIFrameElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLIFrameElementRps extends IHTMLElementRps {
  readonly contentDocument?: IDocument | null;
  readonly contentWindow?: IWindowProxy | null;
}

export function setHTMLIFrameElementRps(instance: IHTMLIFrameElement, data: IHTMLIFrameElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLIFrameElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLIFrameElement`);
    }
    properties[key] = value;
  });
}
