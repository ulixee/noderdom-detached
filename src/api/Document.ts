import {
  IComment,
  IDocument,
  IDocumentFragment,
  IElement,
  IHTMLElement,
  IHTMLElementTagNameMap,
  INode,
  IText,
  IElementCreationOptions, IHTMLCollection,
} from '../../base/interfaces';
import BaseDocument, { setDocumentRps } from '../../base/classes/Document';
import { _visitNode } from '../lib/document-utils';
import { isAttr, isElement } from '../lib/utils';
import Attr, { setAttrRps } from './Attr';
import CDATASection, { setCDATASectionRps } from './CDATASection';
import Comment, { setCommentRps } from './Comment';
import DocumentFragment, { setDocumentFragmentRps } from './DocumentFragment';
import Element, { setElementRps } from './Element';
import HTMLElement, { setHTMLElementRps } from './HTMLElement';
import ProcessingInstruction, { setProcessingInstructionRps } from './ProcessingInstruction';
import Text, { setTextRps } from './Text';
import HTMLCollection from './HTMLCollection';
import NODE_TYPE from '../constants/NodeType';

export default class Document extends BaseDocument implements IDocument {
  constructor() {
    super();
    setDocumentRps(this, {
      nodeName: '#document',
      nodeType: NODE_TYPE.DOCUMENT_NODE,
      contentType: 'text/html',
      compatMode: 'CSS1Compat',
    });
  }

  public get body(): IHTMLElement | null {
    if (!this.documentElement) return null;

    for (let i = 0; i < this.documentElement.childNodes.length; i += 1) {
      const node = this.documentElement.childNodes.item(i);
      if (node.nodeType === NODE_TYPE.ELEMENT_NODE && node.nodeName === 'BODY') {
        return node as HTMLElement;
      }
    }

    return null;
  }

  public createAttribute(localName: string): Attr {
    const attr = new Attr();
    setAttrRps(attr, {
      name: localName,
      nodeName: localName,
      localName: localName,
      ownerDocument: this,
    });
    return attr as Attr;
  }

  public createAttributeNS(namespace: string | null, qualifiedName: string): Attr {
    const pl = qualifiedName.split(':');
    const attr = new Attr();
    setAttrRps(attr, {
      name: qualifiedName,
      nodeName: qualifiedName,
      specified: true,
      namespaceURI: namespace,
      ownerDocument: this,
      prefix: pl.length === 2 ? pl[0] : null,
      localName: pl.length === 2 ? pl[1] : qualifiedName,
    });
    return attr as Attr;
  }

  public createCDATASection(data: string): CDATASection {
    const cdataSection = new CDATASection();
    setCDATASectionRps(cdataSection, {
      ownerDocument: this,
    });
    cdataSection.appendData(data);
    return cdataSection as CDATASection;
  }

  public createComment(data: string): IComment {
    const comment = new Comment();
    setCommentRps(comment, {
      ownerDocument: this,
    });
    comment.appendData(data);
    return comment as Comment;
  }

  public createDocumentFragment(): IDocumentFragment {
    const documentFragment = new DocumentFragment();
    setDocumentFragmentRps(documentFragment, {
      ownerDocument: this,
    });
    return documentFragment as DocumentFragment;
  }

  public createElement<K extends keyof IHTMLElementTagNameMap>(
    tagName: K,
    options?: IElementCreationOptions,
  ): IHTMLElementTagNameMap[K];
  public createElement(tagName: string, _options?: IElementCreationOptions): IHTMLElement {
    const htmlElement = new HTMLElement();
    const nodeName = tagName.toUpperCase();
    setHTMLElementRps(htmlElement, {
      ownerDocument: this,
      nodeName: nodeName,
      tagName: nodeName,
      localName: tagName.toLowerCase(),
    });
    return htmlElement;
  }

  public createElementNS(
    namespaceURI: string | null,
    qualifiedName: string,
    _options?: IElementCreationOptions,
  ): Element;
  public createElementNS(
    namespace: string | null,
    qualifiedName: string,
    _options?: string | IElementCreationOptions,
  ): Element {
    const pl = qualifiedName.split(':');
    const nodeName = qualifiedName.toUpperCase();
    const element = new Element();
    setElementRps(element, {
      ownerDocument: this,
      nodeName: nodeName,
      tagName: nodeName,
      namespaceURI: namespace,
      prefix: pl.length === 2 ? pl[0] : null,
      localName: pl.length === 2 ? pl[1].toLowerCase() : qualifiedName.toLowerCase(),
    });
    return element as Element;
  }

  public createProcessingInstruction(target: string, data: string): ProcessingInstruction {
    const processingInstruction = new ProcessingInstruction();
    setProcessingInstructionRps(processingInstruction, {
      nodeName: target,
      target: target,
      ownerDocument: this,
    });
    processingInstruction.nodeValue = data;
    processingInstruction.data = data;
    return processingInstruction;
  }

  public createTextNode(data: string): IText {
    const text = new Text();
    setTextRps(this, {
      ownerDocument: this,
    });
    text.appendData(data);
    return text as Text;
  }

  public get documentElement(): IHTMLElement | null {
    for (let i = 0; i < this.childNodes.length; i += 1) {
      const node = this.childNodes.item(i);
      if (node.nodeType === NODE_TYPE.ELEMENT_NODE) {
        return node as HTMLElement;
      }
    }
    return null;
  }

  public getElementById(elementId: string): IHTMLElement | null {
    if (!this.documentElement) return null;
    let rtv: IElement | null = null;
    _visitNode(this.documentElement, (node: INode) => {
      if (isElement(node)) {
        if ((node as IElement).getAttribute('id') === elementId) {
          rtv = node as IElement;
          return true;
        }
      }
    });
    return rtv;
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection {
    const ls: IElement[] = [];
    _visitNode(this, node => {
      if (node !== this && isElement(node) && (qualifiedName === '*' || node.tagName === qualifiedName)) {
        ls.push(node);
      }
    });
    return new HTMLCollection<IElement>(...ls);
  }

  public getElementsByTagNameNS(namespaceURI: string, localName: string): IHTMLCollection<IElement> {
    const ls: IElement[] = [];
    _visitNode(this, node => {
      if (
        node !== this &&
        isElement(node) &&
        (namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
        (localName === '*' || node.localName === localName)
      ) {
        ls.push(node);
      }
    });
    return new HTMLCollection<IElement>(...ls);
  }

  public importNode<T extends INode>(importedNode: T, deep: boolean): T {
    let node2: IMutable<T> | undefined;

    if (isElement(importedNode)) {
      node2 = importedNode.cloneNode(false) as IMutable<T>;
      node2.ownerDocument = this;
    } else if (isAttr(importedNode)) {
      deep = true;
    }

    if (!node2) {
      node2 = importedNode.cloneNode(false) as IMutable<T>; // false
    }
    node2.ownerDocument = this;
    node2.parentNode = null;
    if (deep) {
      let child = importedNode.firstChild;
      while (child) {
        node2.appendChild(this.importNode(child, deep));
        child = child.nextSibling;
      }
    }
    return node2;
  }
}
