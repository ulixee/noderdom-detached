import { IDOMImplementation, IDocumentType, IMutable, IHTMLDocument, IXMLDocument } from '../interfaces';
import Document from './Document';
import DocumentType from './DocumentType';
import { HTML_NS, SVG_NS } from '../constants/namespaces';
import XMLDocument from './XMLDocument';

export default class DOMImplementation implements IDOMImplementation {
  public createDocument(
    namespaceURI: string | null,
    qualifiedName: string | null,
    doctype: IDocumentType | null,
  ): IXMLDocument {
    const document = new XMLDocument() as IMutable<XMLDocument>;
    document.doctype = doctype;
    document.implementation = this;
    if (doctype) {
      document.appendChild(doctype);
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
    return document as Document;
  }

  public createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType {
    const documentType = new DocumentType() as IMutable<DocumentType>;
    documentType.name = qualifiedName;
    documentType.nodeName = qualifiedName;
    documentType.publicId = publicId;
    documentType.systemId = systemId;
    return documentType as DocumentType;
  }

  public createHTMLDocument(title?: string): IHTMLDocument {
    const doctype = this.createDocumentType('html', '', '');
    const document = this.createDocument(HTML_NS, 'html', doctype) as IMutable<Document>;
    document.title = title || '';
    return document as IHTMLDocument;
  }
}
