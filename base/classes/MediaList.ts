import InternalHandler from '../InternalHandler';
import { IMediaList } from '../interfaces';

export default class MediaList implements IMediaList {
  protected readonly _: IMediaListRps = {};

  // properties

  public get length(): number {
    return InternalHandler.get<MediaList, number>(this, 'length');
  }

  public get mediaText(): string {
    return InternalHandler.get<MediaList, string>(this, 'mediaText');
  }

  public set mediaText(value: string) {
    InternalHandler.set<MediaList, string>(this, 'mediaText', value);
  }

  // methods

  public appendMedium(medium: string): void {
    InternalHandler.run<MediaList, void>(this, 'appendMedium', [medium]);
  }

  public deleteMedium(medium: string): void {
    InternalHandler.run<MediaList, void>(this, 'deleteMedium', [medium]);
  }

  public item(index: number): string | null {
    return InternalHandler.run<MediaList, string | null>(this, 'item', [index]);
  }

  public toString(): string {
    return InternalHandler.run<MediaList, string>(this, 'string', []);
  }

  [index: number]: string;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpMediaListKeys: Set<string> = new Set([]);

export interface IMediaListRps {
  readonly length?: number;
}

export function setMediaListRps(instance: IMediaList, data: IMediaListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpMediaListKeys.has(key)) {
      throw new Error(`${key} is not a property of MediaList`);
    }
    properties[key] = value;
  });
}
