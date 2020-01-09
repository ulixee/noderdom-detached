import NodeList from './NodeList';
import { INode, INodeListOf } from '../interfaces';

export default class NodeListOf<TNode extends INode> extends NodeList implements INodeListOf<TNode> {
  public length: number;

  public item(index: number): TNode {
    return this[index];
  }

  public forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void {
    super.forEach((value: any, key: number) => callbackfn(value as TNode, key, this), thisArg);
  }

  [index: number]: TNode;
}
