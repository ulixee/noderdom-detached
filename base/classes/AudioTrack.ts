import InternalHandler from '../InternalHandler';
import { IAudioTrack } from '../interfaces';

export default class AudioTrack implements IAudioTrack {
  protected readonly _: IAudioTrackRps = {};

  // properties

  public get enabled(): boolean {
    return InternalHandler.get<AudioTrack, boolean>(this, 'enabled');
  }

  public set enabled(value: boolean) {
    InternalHandler.set<AudioTrack, boolean>(this, 'enabled', value);
  }

  public get id(): string {
    return InternalHandler.get<AudioTrack, string>(this, 'id');
  }

  public get kind(): string {
    return InternalHandler.get<AudioTrack, string>(this, 'kind');
  }

  public get label(): string {
    return InternalHandler.get<AudioTrack, string>(this, 'label');
  }

  public get language(): string {
    return InternalHandler.get<AudioTrack, string>(this, 'language');
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpAudioTrackKeys: Set<string> = new Set([]);

export interface IAudioTrackRps {
  readonly id?: string;
  readonly kind?: string;
  readonly label?: string;
  readonly language?: string;
}

export function setAudioTrackRps(instance: IAudioTrack, data: IAudioTrackRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpAudioTrackKeys.has(key)) {
      throw new Error(`${key} is not a property of AudioTrack`);
    }
    properties[key] = value;
  });
}
