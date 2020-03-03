import InternalHandler from '../InternalHandler';
import { IEventListenerOrEventListenerObject, IAddEventListenerOptions, IEventListenerOptions, IEvent, IEventTarget } from '../interfaces';
export declare const getState: (instance: IEventTarget) => any, setState: <P = IEventTargetProperties>(instance: IEventTarget, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IEventTarget, properties: IHiddenProperties) => void, setReadonlyOfEventTarget: (instance: IEventTarget, properties: IEventTargetReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IEventTarget>;
export default class EventTarget implements IEventTarget {
    constructor();
    addEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IAddEventListenerOptions | boolean): void;
    dispatchEvent(event: IEvent): boolean;
    removeEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IEventListenerOptions | boolean): void;
}
export interface IEventTargetProperties {
}
export interface IEventTargetReadonlyProperties {
}
export declare const EventTargetPropertyKeys: never[];
export declare const EventTargetConstantKeys: never[];
