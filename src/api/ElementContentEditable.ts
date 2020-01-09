import { IElementContentEditable } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ElementContentEditable<TBase extends Constructor>(base: TBase) {
  return class extends base implements IElementContentEditable {
    public contentEditable: string;
    public inputMode: string;
    public readonly isContentEditable: boolean;
  };
}
