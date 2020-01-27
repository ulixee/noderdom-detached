import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITimeRanges, IAudioTrackList, IVideoTrackList, ITextTrackList, ICanPlayTypeResult, ITextTrackKind, ITextTrack, IHTMLMediaElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLMediaElement extends HTMLElement implements IHTMLMediaElement {
  public static readonly HAVE_CURRENT_DATA: number = 2;
  public static readonly HAVE_ENOUGH_DATA: number = 4;
  public static readonly HAVE_FUTURE_DATA: number = 3;
  public static readonly HAVE_METADATA: number = 1;
  public static readonly HAVE_NOTHING: number = 0;
  public static readonly NETWORK_EMPTY: number = 0;
  public static readonly NETWORK_IDLE: number = 1;
  public static readonly NETWORK_LOADING: number = 2;
  public static readonly NETWORK_NO_SOURCE: number = 3;

  public readonly HAVE_CURRENT_DATA: number = 2;
  public readonly HAVE_ENOUGH_DATA: number = 4;
  public readonly HAVE_FUTURE_DATA: number = 3;
  public readonly HAVE_METADATA: number = 1;
  public readonly HAVE_NOTHING: number = 0;
  public readonly NETWORK_EMPTY: number = 0;
  public readonly NETWORK_IDLE: number = 1;
  public readonly NETWORK_LOADING: number = 2;
  public readonly NETWORK_NO_SOURCE: number = 3;

  // store readonly properties

  protected readonly _: IHTMLMediaElementRps = {};

  // properties

  public get audioTracks(): IAudioTrackList {
    return InternalHandler.get<HTMLMediaElement, IAudioTrackList>(this, 'audioTracks');
  }

  public get autoplay(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'autoplay');
  }

  public set autoplay(value: boolean) {
    InternalHandler.set<HTMLMediaElement, boolean>(this, 'autoplay', value);
  }

  public get buffered(): ITimeRanges {
    return InternalHandler.get<HTMLMediaElement, ITimeRanges>(this, 'buffered');
  }

  public get controls(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'controls');
  }

  public set controls(value: boolean) {
    InternalHandler.set<HTMLMediaElement, boolean>(this, 'controls', value);
  }

  public get crossOrigin(): string | null {
    return InternalHandler.get<HTMLMediaElement, string | null>(this, 'crossOrigin');
  }

  public set crossOrigin(value: string | null) {
    InternalHandler.set<HTMLMediaElement, string | null>(this, 'crossOrigin', value);
  }

  public get currentSrc(): string {
    return InternalHandler.get<HTMLMediaElement, string>(this, 'currentSrc');
  }

  public get currentTime(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'currentTime');
  }

  public set currentTime(value: number) {
    InternalHandler.set<HTMLMediaElement, number>(this, 'currentTime', value);
  }

  public get defaultMuted(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'defaultMuted');
  }

  public set defaultMuted(value: boolean) {
    InternalHandler.set<HTMLMediaElement, boolean>(this, 'defaultMuted', value);
  }

  public get defaultPlaybackRate(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'defaultPlaybackRate');
  }

  public set defaultPlaybackRate(value: number) {
    InternalHandler.set<HTMLMediaElement, number>(this, 'defaultPlaybackRate', value);
  }

  public get duration(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'duration');
  }

  public get ended(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'ended');
  }

  public get loop(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'loop');
  }

  public set loop(value: boolean) {
    InternalHandler.set<HTMLMediaElement, boolean>(this, 'loop', value);
  }

  public get muted(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'muted');
  }

  public set muted(value: boolean) {
    InternalHandler.set<HTMLMediaElement, boolean>(this, 'muted', value);
  }

  public get networkState(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'networkState');
  }

  public get paused(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'paused');
  }

  public get playbackRate(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'playbackRate');
  }

  public set playbackRate(value: number) {
    InternalHandler.set<HTMLMediaElement, number>(this, 'playbackRate', value);
  }

  public get played(): ITimeRanges {
    return InternalHandler.get<HTMLMediaElement, ITimeRanges>(this, 'played');
  }

  public get preload(): string {
    return InternalHandler.get<HTMLMediaElement, string>(this, 'preload');
  }

  public set preload(value: string) {
    InternalHandler.set<HTMLMediaElement, string>(this, 'preload', value);
  }

  public get readyState(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'readyState');
  }

  public get seekable(): ITimeRanges {
    return InternalHandler.get<HTMLMediaElement, ITimeRanges>(this, 'seekable');
  }

  public get seeking(): boolean {
    return InternalHandler.get<HTMLMediaElement, boolean>(this, 'seeking');
  }

  public get src(): string {
    return InternalHandler.get<HTMLMediaElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<HTMLMediaElement, string>(this, 'src', value);
  }

  public get textTracks(): ITextTrackList {
    return InternalHandler.get<HTMLMediaElement, ITextTrackList>(this, 'textTracks');
  }

  public get videoTracks(): IVideoTrackList {
    return InternalHandler.get<HTMLMediaElement, IVideoTrackList>(this, 'videoTracks');
  }

  public get volume(): number {
    return InternalHandler.get<HTMLMediaElement, number>(this, 'volume');
  }

  public set volume(value: number) {
    InternalHandler.set<HTMLMediaElement, number>(this, 'volume', value);
  }

  // methods

  public addTextTrack(kind: ITextTrackKind, label?: string, language?: string): ITextTrack {
    return InternalHandler.run<HTMLMediaElement, ITextTrack>(this, 'addTextTrack', [kind, label, language]);
  }

  public canPlayType(type: string): ICanPlayTypeResult {
    return InternalHandler.run<HTMLMediaElement, ICanPlayTypeResult>(this, 'canPlayType', [type]);
  }

  public load(): void {
    InternalHandler.run<HTMLMediaElement, void>(this, 'load', []);
  }

  public pause(): void {
    InternalHandler.run<HTMLMediaElement, void>(this, 'pause', []);
  }

  public play(): Promise<void> {
    return InternalHandler.run<HTMLMediaElement, Promise<void>>(this, 'play', []);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLMediaElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLMediaElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLMediaElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLMediaElementRps extends IHTMLElementRps {
  readonly audioTracks?: IAudioTrackList;
  readonly buffered?: ITimeRanges;
  readonly currentSrc?: string;
  readonly duration?: number;
  readonly ended?: boolean;
  readonly networkState?: number;
  readonly paused?: boolean;
  readonly played?: ITimeRanges;
  readonly readyState?: number;
  readonly seekable?: ITimeRanges;
  readonly seeking?: boolean;
  readonly textTracks?: ITextTrackList;
  readonly videoTracks?: IVideoTrackList;
}

export function setHTMLMediaElementRps(instance: IHTMLMediaElement, data: IHTMLMediaElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLMediaElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLMediaElement`);
    }
    properties[key] = value;
  });
}
