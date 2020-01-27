import InternalHandler from '../InternalHandler';
import { IEventListenerOrEventListenerObject, IAddEventListenerOptions, IEventListenerOptions, IEvent, IEventTarget } from '../interfaces';

export default class EventTarget implements IEventTarget {
  public addEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IAddEventListenerOptions | boolean): void {
    InternalHandler.run<EventTarget, void>(this, 'addEventListener', [type, callback, options]);
  }

  public dispatchEvent(event: IEvent): boolean {
    return InternalHandler.run<EventTarget, boolean>(this, 'dispatchEvent', [event]);
  }

  public removeEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IEventListenerOptions | boolean): void {
    InternalHandler.run<EventTarget, void>(this, 'removeEventListener', [type, callback, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpEventTargetKeys: Set<string> = new Set([]);

export interface IEventTargetRps {}
