import { findParentElement, removeChild, indexOfChildNode } from '../lib/document-utils';
import { cloneNode, getTextContent, locateNamespace, locateNamespacePrefix } from '../lib/node-utils';
import { isDocument, isDocumentFragment, isElement, isText } from '../lib/utils';
import NODE_TYPE from '../constants/NodeType';
import {
  IChildNode,
  IDocument,
  IGetRootNodeOptions,
  IHTMLElement,
  IMutable,
  INode,
  INodeListOf,
  IParentNode,
} from '../interfaces';
import EventTarget from './EventTarget';
import Text from './Text';
import NodeListOf from './NodeListOf';
import ChildNode from './ChildNode';

export default class Node extends EventTarget implements INode {
  public static readonly ATTRIBUTE_NODE = NODE_TYPE.ATTRIBUTE_NODE;
  public static readonly CDATA_SECTION_NODE = NODE_TYPE.CDATA_SECTION_NODE;
  public static readonly COMMENT_NODE = NODE_TYPE.COMMENT_NODE;
  public static readonly DOCUMENT_FRAGMENT_NODE = NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
  public static readonly DOCUMENT_NODE = NODE_TYPE.DOCUMENT_NODE;
  public static readonly DOCUMENT_POSITION_CONTAINED_BY = NODE_TYPE.DOCUMENT_POSITION_CONTAINED_BY;
  public static readonly DOCUMENT_POSITION_CONTAINS = NODE_TYPE.DOCUMENT_POSITION_CONTAINS;
  public static readonly DOCUMENT_POSITION_DISCONNECTED = NODE_TYPE.DOCUMENT_POSITION_DISCONNECTED;
  public static readonly DOCUMENT_POSITION_FOLLOWING = NODE_TYPE.DOCUMENT_POSITION_FOLLOWING;
  public static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC =
    NODE_TYPE.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  public static readonly DOCUMENT_POSITION_PRECEDING = NODE_TYPE.DOCUMENT_POSITION_PRECEDING;
  public static readonly DOCUMENT_TYPE_NODE = NODE_TYPE.DOCUMENT_TYPE_NODE;
  public static readonly ELEMENT_NODE = NODE_TYPE.ELEMENT_NODE;
  public static readonly ENTITY_NODE = NODE_TYPE.ENTITY_NODE;
  public static readonly ENTITY_REFERENCE_NODE = NODE_TYPE.ENTITY_REFERENCE_NODE;
  public static readonly NOTATION_NODE = NODE_TYPE.NOTATION_NODE;
  public static readonly PROCESSING_INSTRUCTION_NODE = NODE_TYPE.PROCESSING_INSTRUCTION_NODE;
  public static readonly TEXT_NODE = NODE_TYPE.TEXT_NODE;

  public readonly ATTRIBUTE_NODE = NODE_TYPE.ATTRIBUTE_NODE;
  public readonly CDATA_SECTION_NODE = NODE_TYPE.CDATA_SECTION_NODE;
  public readonly COMMENT_NODE = NODE_TYPE.COMMENT_NODE;
  public readonly DOCUMENT_FRAGMENT_NODE = NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
  public readonly DOCUMENT_NODE = NODE_TYPE.DOCUMENT_NODE;
  public readonly DOCUMENT_POSITION_CONTAINED_BY = NODE_TYPE.DOCUMENT_POSITION_CONTAINED_BY;
  public readonly DOCUMENT_POSITION_CONTAINS = NODE_TYPE.DOCUMENT_POSITION_CONTAINS;
  public readonly DOCUMENT_POSITION_DISCONNECTED = NODE_TYPE.DOCUMENT_POSITION_DISCONNECTED;
  public readonly DOCUMENT_POSITION_FOLLOWING = NODE_TYPE.DOCUMENT_POSITION_FOLLOWING;
  public readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = NODE_TYPE.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  public readonly DOCUMENT_POSITION_PRECEDING = NODE_TYPE.DOCUMENT_POSITION_PRECEDING;
  public readonly DOCUMENT_TYPE_NODE = NODE_TYPE.DOCUMENT_TYPE_NODE;
  public readonly ELEMENT_NODE = NODE_TYPE.ELEMENT_NODE;
  public readonly ENTITY_NODE = NODE_TYPE.ENTITY_NODE;
  public readonly ENTITY_REFERENCE_NODE = NODE_TYPE.ENTITY_REFERENCE_NODE;
  public readonly NOTATION_NODE = NODE_TYPE.NOTATION_NODE;
  public readonly PROCESSING_INSTRUCTION_NODE = NODE_TYPE.PROCESSING_INSTRUCTION_NODE;
  public readonly TEXT_NODE = NODE_TYPE.TEXT_NODE;

  public readonly baseURI: string;
  public readonly childNodes: INodeListOf<IChildNode> = new NodeListOf<IChildNode>();

  public get firstChild(): IChildNode | null {
    return this.childNodes[0];
  }

  public readonly isConnected: boolean;

  public get lastChild(): IChildNode | null {
    return this.childNodes[this.childNodes.length - 1];
  }

  public get nextSibling(): IChildNode | null {
    if (!this.parentNode) {
      return null;
    }
    const i = indexOfChildNode(this.parentNode.childNodes, this);
    return i >= 0 ? this.parentNode.childNodes[i + 1] : null;
  }

  public readonly nodeName: string;
  public readonly nodeType: number;
  public readonly ownerDocument: IDocument | null = null;
  public readonly parentElement: IHTMLElement | null = null;
  public readonly parentNode: (INode & IParentNode) | null = null;

  public get previousSibling(): IChildNode | null {
    if (!this.parentNode) {
      return null;
    }
    const i = indexOfChildNode(this.parentNode.childNodes, this);
    return i > 0 ? this.parentNode.childNodes[i - 1] : null;
  }

  public nodeValue: string | null;

  constructor(props: IInit) {
    super();
    Object.assign(this, props);
  }

  public get textContent() {
    return getTextContent(this);
  }

  public set textContent(data: string | null) {
    if (isElement(this) || isDocumentFragment(this)) {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      if (data) {
        this.appendChild(this.ownerDocument!.createTextNode(data));
      }
    } else {
      this.nodeValue = data;
    }
  }

  public appendChild<T extends INode>(newChild: T): T {
    const insertedNode = this.insertBefore(newChild, null);
    return (insertedNode as unknown) as T;
  }

  public cloneNode<T extends INode>(deep: boolean): T {
    if (isDocument(this)) {
      return (cloneNode(this, this, deep) as unknown) as T;
    }
    return (cloneNode(this.ownerDocument!, this, deep) as unknown) as T;
  }

  public compareDocumentPosition(_other: INode): number {
    throw new Error('Method not implemented.');
  }

  public contains(_other: INode | null): boolean {
    throw new Error('Method not implemented.');
  }

  public getRootNode(_options?: IGetRootNodeOptions | undefined): INode {
    throw new Error('Method not implemented.');
  }

  public hasChildNodes(): boolean {
    return this.firstChild != null;
  }

  public insertBefore<T extends INode>(newChild: T, refChild: INode | null): T {
    if (newChild.parentNode) newChild.parentNode.removeChild(newChild);

    // where should new node be inserted?
    let index = this.childNodes.length;
    if (refChild) {
      const childIndex = indexOfChildNode(this.childNodes, refChild);
      index = childIndex >= 0 ? childIndex : index;
    }

    // if isDocumentFragment then roll up all child nodes of fragment
    let nodesToAdd = [(newChild as unknown) as IChildNode];
    if (isDocumentFragment(newChild)) {
      nodesToAdd = (newChild.childNodes as unknown) as IChildNode[];
    }

    // parentNode and parentElement must be set on all
    const parentElement = findParentElement(this);
    for (const childNode of nodesToAdd) {
      (childNode as IMutable<ChildNode>).parentNode = (this as unknown) as INode & IParentNode;
      (childNode as IMutable<ChildNode>).parentElement = parentElement;
    }

    // insert
    ((this.childNodes as unknown) as IChildNode[]).splice(index, 0, ...nodesToAdd);

    return (newChild as unknown) as T;
  }

  public isDefaultNamespace(namespace: string | null): boolean {
    const prefix = this.lookupPrefix(namespace || '');
    return prefix == null;
  }

  public isEqualNode(_otherNode: INode | null): boolean {
    throw new Error('Method not implemented.');
  }

  public isSameNode(_otherNode: INode | null): boolean {
    throw new Error('Method not implemented.');
  }

  public lookupNamespaceURI(prefix: string): string | null {
    return locateNamespace(this, prefix || null);
  }

  public lookupPrefix(namespaceURI: string): string | null {
    return locateNamespacePrefix(this, namespaceURI || null);
  }

  public normalize(): void {
    let child = this.firstChild;
    while (child) {
      const next = child.nextSibling;
      if (next && isText(next) && isText(child)) {
        this.removeChild(next);
        (child as Text).appendData((next as Text).data);
      } else {
        child.normalize();
        child = next;
      }
    }
  }

  public removeChild<T extends INode>(oldChild: T): T {
    return removeChild(this, oldChild);
  }

  public replaceChild<T extends INode>(newChild: INode, oldChild: T): T {
    this.insertBefore(newChild, oldChild);
    return this.removeChild(oldChild);
  }
}

export interface IInit {
  readonly nodeType: number;
  readonly nodeName?: string;
}
