import InternalHandler from '../InternalHandler';
import { ICSSRule, ICSSStyleDeclaration } from '../interfaces';

export default class CSSStyleDeclaration implements ICSSStyleDeclaration {
  protected readonly _: ICSSStyleDeclarationRps = {};

  // properties

  public get cssFloat(): string {
    return InternalHandler.get<CSSStyleDeclaration, string>(this, 'cssFloat');
  }

  public set cssFloat(value: string) {
    InternalHandler.set<CSSStyleDeclaration, string>(this, 'cssFloat', value);
  }

  public get cssText(): string {
    return InternalHandler.get<CSSStyleDeclaration, string>(this, 'cssText');
  }

  public set cssText(value: string) {
    InternalHandler.set<CSSStyleDeclaration, string>(this, 'cssText', value);
  }

  public get length(): number {
    return InternalHandler.get<CSSStyleDeclaration, number>(this, 'length');
  }

  public get parentRule(): ICSSRule | null {
    return InternalHandler.get<CSSStyleDeclaration, ICSSRule | null>(this, 'parentRule');
  }

  // methods

  public getPropertyPriority(property: string): string {
    return InternalHandler.run<CSSStyleDeclaration, string>(this, 'getPropertyPriority', [property]);
  }

  public getPropertyValue(property: string): string {
    return InternalHandler.run<CSSStyleDeclaration, string>(this, 'getPropertyValue', [property]);
  }

  public item(index: number): string {
    return InternalHandler.run<CSSStyleDeclaration, string>(this, 'item', [index]);
  }

  public removeProperty(property: string): string {
    return InternalHandler.run<CSSStyleDeclaration, string>(this, 'removeProperty', [property]);
  }

  public setProperty(property: string, value: string, priority?: string): void {
    InternalHandler.run<CSSStyleDeclaration, void>(this, 'setProperty', [property, value, priority]);
  }

  [index: number]: string;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCSSStyleDeclarationKeys: Set<string> = new Set([]);

export interface ICSSStyleDeclarationRps {
  readonly length?: number;
  readonly parentRule?: ICSSRule | null;
}

export function setCSSStyleDeclarationRps(instance: ICSSStyleDeclaration, data: ICSSStyleDeclarationRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCSSStyleDeclarationKeys.has(key)) {
      throw new Error(`${key} is not a property of CSSStyleDeclaration`);
    }
    properties[key] = value;
  });
}
