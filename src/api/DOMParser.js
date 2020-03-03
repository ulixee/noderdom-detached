"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLParser_1 = __importDefault(require("../parser/HTMLParser"));
const XMLParser_1 = __importDefault(require("../parser/XMLParser"));
const DOMImplementation_1 = __importDefault(require("./DOMImplementation"));
const Document_1 = require("../../base/classes/Document");
class DOMParser {
    parseFromString(str, type = '') {
        switch (type) {
            case 'text/html': {
                return this.createDocument('html', type, str);
            }
            case 'text/xml':
            case 'application/xml':
            case 'application/xhtml+xml':
            case 'image/svg+xml': {
                try {
                    return this.createDocument('xml', type, str);
                }
                catch (error) {
                    const document = this.createDocument('xml', type);
                    const element = document.createElementNS('http://www.mozilla.org/newlayout/xml/parsererror.xml', 'parsererror');
                    element.textContent = error.message;
                    document.appendChild(element);
                    return document;
                }
            }
            default:
                throw new TypeError('Invalid contentType');
        }
    }
    createDocument(parsingMode, type, str) {
        const domImplementation = new DOMImplementation_1.default();
        const document = parsingMode === 'html'
            ? domImplementation.createHTMLDocument()
            : domImplementation.createDocument(null, null, null);
        Document_1.setReadonlyOfDocument(document, {
            contentType: type,
        });
        if (str !== undefined) {
            if (parsingMode === 'html') {
                HTMLParser_1.default.parseIntoDocument(str, domImplementation, document);
            }
            else if (parsingMode === 'xml') {
                XMLParser_1.default.parseIntoDocument(str, domImplementation, document);
            }
        }
        return document;
    }
}
exports.default = DOMParser;
//# sourceMappingURL=DOMParser.js.map