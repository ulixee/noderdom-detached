import { INode, INodeList } from '../interfaces';

export default class NodeList extends Array<INode> implements INodeList {
  public readonly length: number;

  public item(index: number): INode | null {
    return this[index] || null;
  }

  // @ts-ignore
  public forEach(callbackfn: (value: INode, key: number, parent: INodeList) => void, thisArg?: any): void {
    super.forEach((value: INode, key: number) => callbackfn(value, key, this), thisArg);
  }

  [index: number]: INode;
}
