import { IChildNode, INode } from '../interfaces';
import Node from './Node';

export default class ChildNode extends Node implements IChildNode {
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
}
