import { IDocument, IDOMImplementation, IXMLDocument } from '../../base/interfaces';
export default class XMLParser {
    static parseFragment(markup: string, _domImplementation: IDOMImplementation, document: IDocument): import("../../base/interfaces").IDocumentFragment;
    static parseIntoDocument(markup: string, _domImplementation: IDOMImplementation, document: IXMLDocument): IXMLDocument;
}
