"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Document_1 = require("../../base/classes/Document");
const DocumentType_1 = require("../../base/classes/DocumentType");
const DocumentType_2 = __importDefault(require("./DocumentType"));
const namespaces_1 = require("../constants/namespaces");
const XMLDocument_1 = __importDefault(require("./XMLDocument"));
const HTMLDocument_1 = __importDefault(require("./HTMLDocument"));
const DOMImplementation_1 = __importDefault(require("../../base/classes/DOMImplementation"));
class DOMImplementation extends DOMImplementation_1.default {
    createDocument(namespaceURI, qualifiedName, doctype) {
        const xmlDocument = new XMLDocument_1.default();
        return populateDocument(xmlDocument, namespaceURI, qualifiedName, doctype, this);
    }
    createDocumentType(qualifiedName, publicId, systemId) {
        const documentType = new DocumentType_2.default();
        DocumentType_1.setReadonlyOfDocumentType(documentType, {
            name: qualifiedName,
            nodeName: qualifiedName,
            publicId: publicId,
            systemId: systemId,
        });
        return documentType;
    }
    createHTMLDocument(_title) {
        const doctype = this.createDocumentType('html', '', '');
        const htmlDocument = new HTMLDocument_1.default();
        // const titleElem = document.createElement('title');
        populateDocument(htmlDocument, namespaces_1.HTML_NS, 'html', doctype, this);
        return htmlDocument;
    }
}
exports.default = DOMImplementation;
function populateDocument(document, namespaceURI, qualifiedName, doctype, implementation) {
    const properties = {
        doctype: doctype,
        implementation: implementation,
    };
    if (doctype) {
        document.appendChild(doctype);
        DocumentType_1.setReadonlyOfDocumentType(doctype, { ownerDocument: document });
    }
    properties.contentType = 'application/xml';
    if (namespaceURI === namespaces_1.HTML_NS) {
        properties.contentType = 'application/xhtml+xml';
    }
    else if (namespaceURI === namespaces_1.SVG_NS) {
        properties.contentType = 'image/svg+xml';
    }
    Document_1.setReadonlyOfDocument(document, properties);
    if (namespaceURI && qualifiedName) {
        const root = document.createElementNS(namespaceURI, qualifiedName);
        document.appendChild(root);
    }
    return document;
}
//# sourceMappingURL=DOMImplementation.js.map