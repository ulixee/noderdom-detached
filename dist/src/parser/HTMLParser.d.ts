import parse5 from 'parse5';
import { IDocument, IDOMImplementation } from '../../base/interfaces';
export default class HTMLParser {
    static parseFragment(markup: string, domImplementation: IDOMImplementation, document: IDocument): parse5.DocumentFragment;
    static parseIntoDocument(markup: string, domImplementation: IDOMImplementation, document: IDocument): parse5.Document;
}
