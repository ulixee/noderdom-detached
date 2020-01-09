import { INode } from './index';

// This is the same as IChildNode, except it doesn't extend INode, which was causing typescript issues.

export default interface IChildishNode {
  /**
   * Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  after(...nodes: (INode | string)[]): void;
  /**
   * Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  before(...nodes: (INode | string)[]): void;
  /**
   * Removes node.
   */
  remove(): void;
  /**
   * Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  replaceWith(...nodes: (INode | string)[]): void;
}
