import InternalHandler from '../InternalHandler';
import { IDOMRectInit, IDOMRect } from '../interfaces';
import DOMRectReadOnly, { IDOMRectReadOnlyRps, rpDOMRectReadOnlyKeys } from './DOMRectReadOnly';

export default class DOMRect extends DOMRectReadOnly implements IDOMRect {
  constructor(x?: number, y?: number, width?: number, height?: number) {
    super();
    InternalHandler.construct(this, [x, y, width, height]);
  }

  // properties

  public get height(): number {
    return InternalHandler.get<DOMRect, number>(this, 'height');
  }

  public set height(value: number) {
    InternalHandler.set<DOMRect, number>(this, 'height', value);
  }

  public get width(): number {
    return InternalHandler.get<DOMRect, number>(this, 'width');
  }

  public set width(value: number) {
    InternalHandler.set<DOMRect, number>(this, 'width', value);
  }

  public get x(): number {
    return InternalHandler.get<DOMRect, number>(this, 'x');
  }

  public set x(value: number) {
    InternalHandler.set<DOMRect, number>(this, 'x', value);
  }

  public get y(): number {
    return InternalHandler.get<DOMRect, number>(this, 'y');
  }

  public set y(value: number) {
    InternalHandler.set<DOMRect, number>(this, 'y', value);
  }

  // methods

  public fromRect(other?: IDOMRectInit): IDOMRect {
    return InternalHandler.run<DOMRect, IDOMRect>(this, 'fromRect', [other]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMRectKeys: Set<string> = new Set([...rpDOMRectReadOnlyKeys]);

export interface IDOMRectRps extends IDOMRectReadOnlyRps {}

export function setDOMRectRps(instance: IDOMRect, data: IDOMRectRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDOMRectKeys.has(key)) {
      throw new Error(`${key} is not a property of DOMRect`);
    }
    properties[key] = value;
  });
}
