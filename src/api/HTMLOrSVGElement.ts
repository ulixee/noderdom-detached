import { IDOMStringMap, IFocusOptions, IHTMLOrSVGElement } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function HTMLOrSVGElement<TBase extends Constructor>(base: TBase) {
  return class extends base implements IHTMLOrSVGElement {
    public readonly dataset: IDOMStringMap;
    public nonce?: string;
    public tabIndex: number;

    public blur(): void {
      throw new Error('Method not implemented.');
    }

    public focus(_options?: IFocusOptions): void {
      throw new Error('Method not implemented.');
    }
  };
}
