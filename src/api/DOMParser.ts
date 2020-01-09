import { IDocument, IDOMParser, IMutable } from '../interfaces';
import HTMLParser from '../parser/HTMLParser';
import XMLParser from '../parser/XMLParser';
import DOMImplementation from './DOMImplementation';
import Document from './Document';

export default class DOMParser implements IDOMParser {
  public parseFromString(markup: string, mimeType: string = ''): IDocument {
    switch (mimeType) {
      case 'text/html': {
        return this.createDocument('html', mimeType, markup);
      }
      case 'text/xml':
      case 'application/xml':
      case 'application/xhtml+xml':
      case 'image/svg+xml': {
        try {
          return this.createDocument('xml', mimeType, markup);
        } catch (error) {
          const document = this.createDocument('xml', mimeType);
          const element = document.createElementNS(
            'http://www.mozilla.org/newlayout/xml/parsererror.xml',
            'parsererror',
          );
          element.textContent = error.message;
          document.appendChild(element);
          return document;
        }
      }
      default:
        throw new TypeError('Invalid contentType');
    }
  }

  private createDocument(parsingMode: 'html' | 'xml', mimeType: string, markup?: string) {
    const domImplementation = new DOMImplementation();
    const document =
      parsingMode === 'html'
        ? domImplementation.createHTMLDocument()
        : domImplementation.createDocument(null, null, null);
    (document as IMutable<Document>).contentType = mimeType;

    if (markup !== undefined) {
      if (parsingMode === 'html') {
        HTMLParser.parseIntoDocument(markup, domImplementation, document);
      } else if (parsingMode === 'xml') {
        XMLParser.parseIntoDocument(markup, domImplementation, document);
      }
    }
    return document;
  }
}
