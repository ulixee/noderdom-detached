import InternalHandler from '../InternalHandler';
import { ILocation } from '../interfaces';

export default class Location implements ILocation {
  protected readonly _: ILocationRps = {};

  // properties

  public get hash(): string {
    return InternalHandler.get<Location, string>(this, 'hash');
  }

  public set hash(value: string) {
    InternalHandler.set<Location, string>(this, 'hash', value);
  }

  public get host(): string {
    return InternalHandler.get<Location, string>(this, 'host');
  }

  public set host(value: string) {
    InternalHandler.set<Location, string>(this, 'host', value);
  }

  public get hostname(): string {
    return InternalHandler.get<Location, string>(this, 'hostname');
  }

  public set hostname(value: string) {
    InternalHandler.set<Location, string>(this, 'hostname', value);
  }

  public get href(): string {
    return InternalHandler.get<Location, string>(this, 'href');
  }

  public set href(value: string) {
    InternalHandler.set<Location, string>(this, 'href', value);
  }

  public get origin(): string {
    return InternalHandler.get<Location, string>(this, 'origin');
  }

  public get pathname(): string {
    return InternalHandler.get<Location, string>(this, 'pathname');
  }

  public set pathname(value: string) {
    InternalHandler.set<Location, string>(this, 'pathname', value);
  }

  public get port(): string {
    return InternalHandler.get<Location, string>(this, 'port');
  }

  public set port(value: string) {
    InternalHandler.set<Location, string>(this, 'port', value);
  }

  public get protocol(): string {
    return InternalHandler.get<Location, string>(this, 'protocol');
  }

  public set protocol(value: string) {
    InternalHandler.set<Location, string>(this, 'protocol', value);
  }

  public get search(): string {
    return InternalHandler.get<Location, string>(this, 'search');
  }

  public set search(value: string) {
    InternalHandler.set<Location, string>(this, 'search', value);
  }

  // methods

  public assign(url: string): void {
    InternalHandler.run<Location, void>(this, 'assign', [url]);
  }

  public reload(): void {
    InternalHandler.run<Location, void>(this, 'reload', []);
  }

  public replace(url: string): void {
    InternalHandler.run<Location, void>(this, 'replace', [url]);
  }

  public toString(): string {
    return InternalHandler.run<Location, string>(this, 'string', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpLocationKeys: Set<string> = new Set([]);

export interface ILocationRps {
  readonly origin?: string;
}

export function setLocationRps(instance: ILocation, data: ILocationRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpLocationKeys.has(key)) {
      throw new Error(`${key} is not a property of Location`);
    }
    properties[key] = value;
  });
}
