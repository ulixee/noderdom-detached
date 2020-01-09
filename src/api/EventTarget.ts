import {
  IAddEventListenerOptions,
  IEvent,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventTarget,
} from '../interfaces';

export default class EventTarget implements IEventTarget {
  // @ts-ignore
  public addEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject | null,
    _options?: boolean | IAddEventListenerOptions,
  ): void {
    // tslint:disable-line
    throw new Error('EventTarget.addEventListener is not implemented');
  }

  // @ts-ignore
  public dispatchEvent(_event: IEvent): boolean {
    throw new Error('EventTarget.dispatchEvent is not implemented');
  }

  // @ts-ignore
  public removeEventListener(
    _type: string,
    _callback: IEventListenerOrEventListenerObject | null,
    _options?: IEventListenerOptions | boolean,
  ): void {
    throw new Error('EventTarget.removeEventListener is not implemented');
  }
}
