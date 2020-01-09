import Node from './Node';
import { IElement, IAttr } from '../interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class Attr extends Node implements IAttr {
  public readonly name: string;
  public readonly localName: string;
  public readonly namespaceURI: string | null = null;
  public readonly ownerElement: IElement | null = null;
  public readonly prefix: string | null = null;
  public readonly specified: boolean;

  constructor() {
    super({
      nodeType: NODE_TYPE.ATTRIBUTE_NODE,
    });
  }

  public get value(): string {
    return this.nodeValue || '';
  }

  public set value(value: string) {
    this.nodeValue = value;
  }
}
