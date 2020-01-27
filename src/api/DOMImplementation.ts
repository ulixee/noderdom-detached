import { IDOMImplementation, IDocumentType, IMutable, IHTMLDocument, IXMLDocument, IDocument } from '../interfaces';
import { setDocumentRps } from './Document';
import DocumentType, { setDocumentTypeRps } from './DocumentType';
import { HTML_NS, SVG_NS } from '../constants/namespaces';
import XMLDocument from './XMLDocument';
import HTMLDocument from './HTMLDocument';

export default class DOMImplementation implements IDOMImplementation {
  public createDocument(
    namespaceURI: string | null,
    qualifiedName: string | null,
    doctype: IDocumentType | null,
  ): IXMLDocument {
    const document = new XMLDocument();
    return populateDocument<XMLDocument>(document, namespaceURI, qualifiedName, doctype, this);
  }

  public createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType {
    const documentType = new DocumentType();
    setDocumentTypeRps(documentType, {
      name: qualifiedName,
      nodeName: qualifiedName,
      publicId: publicId,
      systemId: systemId,
    });
    return documentType;
  }

  public createHTMLDocument(_title?: string): IHTMLDocument {
    const doctype = this.createDocumentType('html', '', '');
    const document = new HTMLDocument();
    // const titleElem = document.createElement('title');
    populateDocument<HTMLDocument>(document, HTML_NS, 'html', doctype, this);
    return document;
  }
}

function populateDocument<T extends IDocument>(
  document: IMutable<T>,
  namespaceURI: string | null,
  qualifiedName: string | null,
  doctype: IDocumentType | null,
  implementation: IDOMImplementation,
) {
  const properties = {
    doctype: doctype,
    implementation: implementation,
  };
  if (doctype) {
    document.appendChild(doctype);
    setDocumentTypeRps(doctype, { ownerDocument: document });
  }
  properties.contentType = 'application/xml';
  if (namespaceURI === HTML_NS) {
    properties.contentType = 'application/xhtml+xml';
  } else if (namespaceURI === SVG_NS) {
    properties.contentType = 'image/svg+xml';
  }

  setDocumentRps(document, properties);

  if (namespaceURI && qualifiedName) {
    const root = document.createElementNS(namespaceURI, qualifiedName);
    document.appendChild(root);
  }

  return document as T;
}
