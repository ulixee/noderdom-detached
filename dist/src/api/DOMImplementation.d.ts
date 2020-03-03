import { IDOMImplementation, IDocumentType, IHTMLDocument, IXMLDocument } from '../../base/interfaces';
import BaseDOMImplementation from '../../base/classes/DOMImplementation';
export default class DOMImplementation extends BaseDOMImplementation implements IDOMImplementation {
    createDocument(namespaceURI: string | null, qualifiedName: string | null, doctype: IDocumentType | null): IXMLDocument;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType;
    createHTMLDocument(_title?: string): IHTMLDocument;
}
