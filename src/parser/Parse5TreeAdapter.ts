import {
  IDocument,
  IDOMImplementation,
  IElement,
  INode,
  IMutable,
  IParentNode,
  IChildNode,
  IDocumentFragment,
  IText,
  IComment,
  IDocumentType,
} from '../interfaces';
import Document from '../api/Document';
import NodeListOf from '../api/NodeListOf';
import './PatchedOpenElementStack';
import ITreeAdapter, { IAttribute, IDocumentMode } from './ITreeAdapter';
import NODE_TYPE from '../constants/NodeType';
import DocumentType from '../api/DocumentType';
import Text from '../api/Text';
import Attr from '../api/Attr';

export default class Parse5TreeAdapter implements ITreeAdapter {
  private readonly implementation: IDOMImplementation;
  private readonly document: IDocument;
  // Since the createElement hook doesn't provide the parent element, we keep track of this using currentElement:
  // https://github.com/inikulin/parse5/issues/285
  private currentElement: IElement;

  constructor(domImplementation: IDOMImplementation, document: IDocument) {
    this.implementation = domImplementation;
    this.document = document;
  }

  public createDocument() {
    return this.document;
  }

  public createDocumentFragment() {
    return this.document.createDocumentFragment();
  }

  public createElement(tagName: string, namespaceURI: string, attrs: IAttribute[]) {
    const ownerDocument = this.ownerDocument();
    const element = ownerDocument.createElement(tagName as any);
    element.namespaceURI = namespaceURI;
    this.adoptAttributes(element, attrs);
    return element;
  }

  public createCommentNode(data: string) {
    const ownerDocument = this.ownerDocument();
    return ownerDocument.createComment(data);
  }

  public appendChild(parentNode: INode & IParentNode, newNode: INode) {
    (parentNode.childNodes as NodeListOf<IChildNode>).push(newNode);
    ((newNode as unknown) as IMutable<INode>).parentNode = parentNode;
    parentNode.append(newNode);
  }

  public insertBefore(parentNode: INode & IParentNode, newNode: INode, referenceNode: INode) {
    const childNodes = parentNode.childNodes as NodeListOf<IChildNode>;
    const insertionIdx = childNodes.indexOf(referenceNode);
    childNodes.splice(insertionIdx, 0, newNode);
    ((newNode as unknown) as IMutable<INode>).parentNode = parentNode;
    parentNode.prepend(newNode, referenceNode);
  }

  public setTemplateContent(templateElement: IElement, contentFragment: IDocumentFragment) {
    this.appendChild(templateElement, contentFragment);
  }

  public getTemplateContent(templateElement: IElement) {
    return templateElement.children[0];
  }

  public setDocumentType(document: IDocument, name: string, publicId: string, systemId: string) {
    let documentType = null;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < document.childNodes.length; i += 1) {
      if (document.childNodes[i].nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
        documentType = document.childNodes[i] as IMutable<DocumentType>;
        break;
      }
    }

    if (documentType) {
      documentType.name = name;
      documentType.publicId = publicId;
      documentType.systemId = systemId;
    } else {
      documentType = this.implementation.createDocumentType(name, publicId, systemId);
      this.appendChild(document, documentType);
    }
  }

  public setDocumentMode(document: IDocument, mode: IDocumentMode) {
    if (mode === 'quirks') {
      (document as IMutable<Document>).compatMode = 'BackCompat';
    } else {
      (document as IMutable<Document>).compatMode = 'CSS1Compat';
    }
  }

  public getDocumentMode(document: IDocument) {
    return document.compatMode === 'BackCompat' ? 'quirks' : 'no-quirks';
  }

  public detachNode(node: INode) {
    const parentNode = node.parentNode;
    if (parentNode) {
      parentNode.removeChild(node);
    }
  }

  public insertText(parentNode: INode & IParentNode, text: string) {
    const { lastChild } = parentNode;
    if (lastChild && lastChild.nodeType === NODE_TYPE.TEXT_NODE) {
      (lastChild as Text).data += text;
    } else {
      const ownerDocument = this.ownerDocument();
      const textNode = ownerDocument.createTextNode(text);
      parentNode.append(textNode);
    }
  }

  public insertTextBefore(parentNode: INode & IParentNode, text: string, referenceNode: INode) {
    const { previousSibling } = referenceNode;
    if (previousSibling && previousSibling.nodeType === NODE_TYPE.TEXT_NODE) {
      (previousSibling as Text).data += text;
    } else {
      const ownerDocument = this.ownerDocument();
      const textNode = ownerDocument.createTextNode(text);
      parentNode.append(textNode, referenceNode);
    }
  }

  public adoptAttributes(element: IElement, attrs: IAttribute[]) {
    for (const attr of attrs) {
      const prefix = attr.prefix === '' ? null : attr.prefix;
      const attribute = element.ownerDocument!.createAttribute(attr.name) as IMutable<Attr>;
      attribute.value = attribute.nodeValue = attr.value;
      attribute.prefix = prefix === undefined ? null : prefix;
      attribute.namespaceURI = attr.namespace === undefined ? null : attr.namespace;
      element.setAttributeNode(attribute);
    }
  }

  public getFirstChild(node: INode) {
    return node.firstChild;
  }

  public getChildNodes(node: INode) {
    return Array.from(node.childNodes);
  }

  public getParentNode(node: INode) {
    return node.parentNode;
  }

  public getAttrList(node: IElement) {
    return node.attributes;
  }

  public getTagName(element: IElement) {
    return element.localName; // https://github.com/inikulin/parse5/issues/231
  }

  public getNamespaceURI(element: IElement) {
    return element.namespaceURI;
  }

  public getTextNodeContent(node: IText) {
    return node.wholeText;
  }

  public getCommentNodeContent(node: IComment) {
    return node.data;
  }

  public getDocumentTypeNodeName(node: IDocumentType) {
    return node.name;
  }

  public getDocumentTypeNodePublicId(node: IDocumentType) {
    return node.publicId;
  }

  public getDocumentTypeNodeSystemId(node: IDocumentType) {
    return node.systemId;
  }

  public isTextNode(node: INode) {
    return node.nodeType === NODE_TYPE.TEXT_NODE;
  }

  public isCommentNode(node: INode) {
    return node.nodeType === NODE_TYPE.COMMENT_NODE;
  }

  public isDocumentTypeNode(node: INode) {
    return node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE;
  }

  public isElementNode(node: INode) {
    return node.nodeType === NODE_TYPE.ELEMENT_NODE;
  }

  public pushedOnStack(_args: any, currentElement: IElement) {
    this.currentElement = currentElement;
  }

  public poppedOffStack(_args: any, currentElement: IElement) {
    this.currentElement = currentElement;
  }

  //////////////////////////////////////

  private ownerDocument(): Document {
    // The currentElement is undefined when parsing elements at the root of the document.
    return (this.currentElement ? this.currentElement.ownerDocument : this.document) as Document;
  }
}
