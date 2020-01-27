import InternalHandler from '../InternalHandler';
import { ICSSRule, ICSSStyleSheet } from '../interfaces';

export default class CSSRule implements ICSSRule {
  public static readonly CHARSET_RULE: number = 2;
  public static readonly FONT_FACE_RULE: number = 5;
  public static readonly IMPORT_RULE: number = 3;
  public static readonly MARGIN_RULE: number = 9;
  public static readonly MEDIA_RULE: number = 4;
  public static readonly NAMESPACE_RULE: number = 10;
  public static readonly PAGE_RULE: number = 6;
  public static readonly STYLE_RULE: number = 1;

  public readonly CHARSET_RULE: number = 2;
  public readonly FONT_FACE_RULE: number = 5;
  public readonly IMPORT_RULE: number = 3;
  public readonly MARGIN_RULE: number = 9;
  public readonly MEDIA_RULE: number = 4;
  public readonly NAMESPACE_RULE: number = 10;
  public readonly PAGE_RULE: number = 6;
  public readonly STYLE_RULE: number = 1;

  // store readonly properties

  protected readonly _: ICSSRuleRps = {};

  // properties

  public get cssText(): string {
    return InternalHandler.get<CSSRule, string>(this, 'cssText');
  }

  public set cssText(value: string) {
    InternalHandler.set<CSSRule, string>(this, 'cssText', value);
  }

  public get parentRule(): ICSSRule | null {
    return InternalHandler.get<CSSRule, ICSSRule | null>(this, 'parentRule');
  }

  public get parentStyleSheet(): ICSSStyleSheet | null {
    return InternalHandler.get<CSSRule, ICSSStyleSheet | null>(this, 'parentStyleSheet');
  }

  public get type(): number {
    return InternalHandler.get<CSSRule, number>(this, 'type');
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpCSSRuleKeys: Set<string> = new Set([]);

export interface ICSSRuleRps {
  readonly parentRule?: ICSSRule | null;
  readonly parentStyleSheet?: ICSSStyleSheet | null;
  readonly type?: number;
}

export function setCSSRuleRps(instance: ICSSRule, data: ICSSRuleRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpCSSRuleKeys.has(key)) {
      throw new Error(`${key} is not a property of CSSRule`);
    }
    properties[key] = value;
  });
}
