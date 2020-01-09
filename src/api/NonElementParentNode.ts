import { IElement, INonElementParentNode } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function NonElementParentNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements INonElementParentNode {
    public getElementById(_elementId: string): IElement | null {
      throw new Error('Method not implemented.');
    }
  };
}
