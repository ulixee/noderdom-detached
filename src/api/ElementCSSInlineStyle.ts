import { ICSSStyleDeclaration, IElementCSSInlineStyle } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ElementCSSInlineStyle<TBase extends Constructor>(base: TBase) {
  return class extends base implements IElementCSSInlineStyle {
    public readonly style: ICSSStyleDeclaration;
  };
}
