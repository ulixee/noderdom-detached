import { IChildishNode, INode } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function ChildishNode<TBase extends Constructor>(base: TBase) {
  return class extends base implements IChildishNode {
    public after(..._nodes: (INode | string)[]): void {
      throw new Error('Method not implemented.');
    }
    public before(..._nodes: (INode | string)[]): void {
      throw new Error('Method not implemented.');
    }
    public remove(): void {
      throw new Error('Method not implemented.');
    }
    public replaceWith(..._nodes: (INode | string)[]): void {
      throw new Error('Method not implemented.');
    }
  };
}
