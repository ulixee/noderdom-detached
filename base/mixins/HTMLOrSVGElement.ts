import InternalHandler from '../InternalHandler';
import { IDOMStringMap, IHTMLOrSVGElement } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function HTMLOrSVGElement<TBase extends Constructor>(base: TBase) {
  return class extends base implements IHTMLOrSVGElement {
    public get dataset(): IDOMStringMap {
      return InternalHandler.get<HTMLOrSVGElement, IDOMStringMap>(this, 'dataset');
    }

    public get nonce(): string {
      return InternalHandler.get<HTMLOrSVGElement, string>(this, 'nonce');
    }

    public set nonce(value: string) {
      InternalHandler.set<HTMLOrSVGElement, string>(this, 'nonce', value);
    }

    public get tabIndex(): number {
      return InternalHandler.get<HTMLOrSVGElement, number>(this, 'tabIndex');
    }

    public set tabIndex(value: number) {
      InternalHandler.set<HTMLOrSVGElement, number>(this, 'tabIndex', value);
    }

    // methods

    public blur(): void {
      InternalHandler.run<HTMLOrSVGElement, void>(this, 'blur', []);
    }

    public focus(): void {
      InternalHandler.run<HTMLOrSVGElement, void>(this, 'focus', []);
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLOrSVGElementKeys: Set<string> = new Set([]);

export interface IHTMLOrSVGElementRps {
  readonly dataset?: IDOMStringMap;
}
