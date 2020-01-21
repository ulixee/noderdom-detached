import { IDOMImplementation, IDocumentType, IMutable, IHTMLDocument, IXMLDocument, IDocument } from '../interfaces';
import DocumentType from './DocumentType';
import { HTML_NS, SVG_NS } from '../constants/namespaces';
import XMLDocument from './XMLDocument';
import HTMLDocument from './HTMLDocument';

export default class DOMImplementation implements IDOMImplementation {
  public createDocument(
    namespaceURI: string | null,
    qualifiedName: string | null,
    doctype: IDocumentType | null,
  ): IXMLDocument {
    const document = new XMLDocument() as IMutable<XMLDocument>;
    return populateDocument<XMLDocument>(document, namespaceURI, qualifiedName, doctype, this);
  }

  public createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType {
    const documentType = new DocumentType() as IMutable<DocumentType>;
    documentType.name = qualifiedName;
    documentType.nodeName = qualifiedName;
    documentType.publicId = publicId;
    documentType.systemId = systemId;
    return documentType as DocumentType;
  }

  public createHTMLDocument(_title?: string): IHTMLDocument {
    const doctype = this.createDocumentType('html', '', '');
    const document = new HTMLDocument() as IMutable<HTMLDocument>;
    // const titleElem = document.createElement('title');
    populateDocument<HTMLDocument>(document, HTML_NS, 'html', doctype, this);
    return document as HTMLDocument;
  }
}

function populateDocument<T extends IDocument>(
  document: IMutable<T>,
  namespaceURI: string | null,
  qualifiedName: string | null,
  doctype: IDocumentType | null,
  implementation: IDOMImplementation,
) {
  document.doctype = doctype;
  document.implementation = implementation;
  if (doctype) {
    document.appendChild(doctype);
    (doctype as IMutable<DocumentType>).ownerDocument = document;
  }
  document.contentType = 'application/xml';
  if (namespaceURI === HTML_NS) {
    document.contentType = 'application/xhtml+xml';
  } else if (namespaceURI === SVG_NS) {
    document.contentType = 'image/svg+xml';
  }
  if (namespaceURI && qualifiedName) {
    const root = document.createElementNS(namespaceURI, qualifiedName);
    document.appendChild(root);
  }
  return document as T;
}
