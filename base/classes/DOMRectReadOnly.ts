import InternalHandler from '../InternalHandler';
import { IDOMRectInit, IDOMRectReadOnly } from '../interfaces';

export default class DOMRectReadOnly implements IDOMRectReadOnly {
  protected readonly _: IDOMRectReadOnlyRps = {};

  // constructor required for this class

  constructor(x?: number, y?: number, width?: number, height?: number) {
    InternalHandler.construct(this, [x, y, width, height]);
  }

  // properties

  public get bottom(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'bottom');
  }

  public get height(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'height');
  }

  public get left(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'left');
  }

  public get right(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'right');
  }

  public get top(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'top');
  }

  public get width(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'width');
  }

  public get x(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'x');
  }

  public get y(): number {
    return InternalHandler.get<DOMRectReadOnly, number>(this, 'y');
  }

  // methods

  public fromRect(other?: IDOMRectInit): IDOMRectReadOnly {
    return InternalHandler.run<DOMRectReadOnly, IDOMRectReadOnly>(this, 'fromRect', [other]);
  }

  public toJSON(): any {
    InternalHandler.run<DOMRectReadOnly, any>(this, 'toJSON', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMRectReadOnlyKeys: Set<string> = new Set([]);

export interface IDOMRectReadOnlyRps {
  readonly bottom?: number;
  readonly height?: number;
  readonly left?: number;
  readonly right?: number;
  readonly top?: number;
  readonly width?: number;
  readonly x?: number;
  readonly y?: number;
}

export function setDOMRectReadOnlyRps(instance: IDOMRectReadOnly, data: IDOMRectReadOnlyRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDOMRectReadOnlyKeys.has(key)) {
      throw new Error(`${key} is not a property of DOMRectReadOnly`);
    }
    properties[key] = value;
  });
}
