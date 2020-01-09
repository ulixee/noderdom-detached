import {
  IAddEventListenerOptions,
  IClipboardEvent,
  IDocumentAndElementEventHandlers,
  IDocumentAndElementEventHandlersEventMap,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
} from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function DocumentAndElementEventHandlers<TBase extends Constructor>(base: TBase) {
  return class extends base implements IDocumentAndElementEventHandlers {
    public oncopy: ((this: IDocumentAndElementEventHandlers, ev: IClipboardEvent) => any) | null;
    public oncut: ((this: IDocumentAndElementEventHandlers, ev: IClipboardEvent) => any) | null;
    public onpaste: ((this: IDocumentAndElementEventHandlers, ev: IClipboardEvent) => any) | null;

    public addEventListener<K extends keyof IDocumentAndElementEventHandlersEventMap>(
      _type: K,
      _listener: (this: IDocumentAndElementEventHandlers, ev: IDocumentAndElementEventHandlersEventMap[K]) => any,
      _options?: boolean | IAddEventListenerOptions,
    ): void;
    public addEventListener(
      _type: string,
      _listener: IEventListenerOrEventListenerObject,
      _options?: boolean | IAddEventListenerOptions,
    ): void {
      throw new Error('Method not implemented.');
    }
    public removeEventListener<K extends keyof IDocumentAndElementEventHandlersEventMap>(
      _type: K,
      _listener: (this: IDocumentAndElementEventHandlers, ev: IDocumentAndElementEventHandlersEventMap[K]) => any,
      _options?: boolean | IEventListenerOptions,
    ): void;
    public removeEventListener(
      _type: string,
      _listener: IEventListenerOrEventListenerObject,
      _options?: boolean | IEventListenerOptions,
    ): void {
      throw new Error('Method not implemented.');
    }
  };
}
