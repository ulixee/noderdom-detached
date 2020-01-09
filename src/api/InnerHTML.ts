import { IInnerHTML } from '../interfaces';
import { fragmentSerialization } from '../parser/Serialization';
import Node from './Node';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function InnerHTML<TBase extends Constructor>(base: TBase) {
  return class extends base implements IInnerHTML {
    public get innerHTML(): string {
      return fragmentSerialization((this as unknown) as Node, {
        requireWellFormed: true,
      });
    }
    public set innerHTML(_html: string) {
      throw new Error('Set property not implemented.');
    }
  };
}
