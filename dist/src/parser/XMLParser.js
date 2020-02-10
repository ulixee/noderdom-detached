"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const saxes_1 = require("saxes");
const DOMException_1 = __importDefault(require("../api/DOMException"));
const namespaces_1 = require("../constants/namespaces");
const Element_1 = require("../../base/classes/Element");
const Document_1 = require("../../base/classes/Document");
const HTML5_DOCTYPE = /<!doctype html>/i;
const PUBLIC_DOCTYPE = /<!doctype\s+([^\s]+)\s+public\s+"([^"]+)"\s+"([^"]+)"/i;
const SYSTEM_DOCTYPE = /<!doctype\s+([^\s]+)\s+system\s+"([^"]+)"/i;
const CUSTOM_NAME_DOCTYPE = /<!doctype\s+([^\s>]+)/i;
class XMLParser {
    static parseFragment(markup, _domImplementation, document) {
        const fragment = document.createDocumentFragment();
        // Only parseFragment needs resolvePrefix per the saxes documentation:
        // https://github.com/lddubeau/saxes#parsing-xml-fragments
        const parser = createParser(fragment, document, {
            xmlns: true,
            fragment: true,
            resolvePrefix(prefix) {
                // saxes wants undefined as the return value if the prefix is not defined, not null.
                return document.lookupNamespaceURI(prefix) || undefined;
            },
        });
        parser.write(markup).close();
        return fragment;
    }
    static parseIntoDocument(markup, _domImplementation, document) {
        const parser = createParser(document, document, {
            defaultXMLVersion: '1.0',
            xmlns: true,
        });
        parser.write(markup);
        const encoding = parser.xmlDecl.encoding;
        if (encoding) {
            Document_1.setReadonlyOfDocument(document, {
                characterSet: encoding,
                charset: encoding,
                inputEncoding: encoding,
            });
        }
        parser.close();
        return document;
    }
}
exports.default = XMLParser;
function parseDocType(document, html) {
    if (HTML5_DOCTYPE.test(html)) {
        return createDocumentType(document, 'html', '', '');
    }
    const publicPieces = PUBLIC_DOCTYPE.exec(html);
    if (publicPieces) {
        return createDocumentType(document, publicPieces[1], publicPieces[2], publicPieces[3]);
    }
    const systemPieces = SYSTEM_DOCTYPE.exec(html);
    if (systemPieces) {
        return createDocumentType(document, systemPieces[1], '', systemPieces[2]);
    }
    const nameExec = CUSTOM_NAME_DOCTYPE.exec(html);
    const namePiece = (nameExec ? nameExec[1] : null) || 'html';
    return createDocumentType(document, namePiece, '', '');
}
function createDocumentType(ownerDocument, name, publicId, systemId) {
    return ownerDocument.implementation.createDocumentType(name, publicId, systemId);
}
function appendChild(parent, child) {
    // Template elements do not have children but instead store their content in a separate hierarchy.
    if (parent.tagName === 'template' && parent.namespaceURI === namespaces_1.HTML_NS) {
        parent.content.append(child);
    }
    else {
        parent.append(child);
    }
}
function createParser(rootNode, ownerDocument, saxesOptions) {
    const parser = new saxes_1.SaxesParser(saxesOptions);
    const openStack = [rootNode];
    parser.ontext = (data) => {
        if (saxesOptions.fragment || openStack.length > 0) {
            appendChild(openStack[openStack.length - 1], ownerDocument.createTextNode(data));
        }
    };
    parser.oncdata = (data) => {
        appendChild(openStack[openStack.length - 1], ownerDocument.createCDATASection(data));
    };
    parser.onopentag = (tag) => {
        const { name: tagName, local: tagLocal, uri: tagURI, prefix: tagPrefix, attributes: tagAttributes } = tag;
        let elem;
        if (tagURI) {
            elem = ownerDocument.createElementNS(tagURI, tagLocal);
        }
        else {
            elem = ownerDocument.createElement(tagName);
        }
        Element_1.setReadonlyOfElement(elem, {
            prefix: tagPrefix || null,
        });
        for (const key of Object.keys(tagAttributes)) {
            const { name, uri, value } = tagAttributes[key];
            if (uri) {
                elem.setAttributeNS(uri, name, value);
            }
            else {
                elem.setAttribute(name, value);
            }
        }
        appendChild(openStack[openStack.length - 1], elem);
        openStack.push(elem);
    };
    parser.onclosetag = () => {
        openStack.pop();
    };
    parser.oncomment = (data) => {
        appendChild(openStack[openStack.length - 1], ownerDocument.createComment(data));
    };
    parser.onprocessinginstruction = ({ target, body }) => {
        appendChild(openStack[openStack.length - 1], ownerDocument.createProcessingInstruction(target, body));
    };
    parser.ondoctype = (dt) => {
        appendChild(openStack[openStack.length - 1], parseDocType(ownerDocument, `<!doctype ${dt}>`));
        const entityMatcher = /<!ENTITY ([^ ]+) "([^"]+)">/g;
        const result = entityMatcher.exec(dt);
        if (result) {
            const [, name, value] = result;
            if (!(name in parser.ENTITIES)) {
                parser.ENTITIES[name] = value;
            }
        }
    };
    parser.onerror = (err) => {
        throw new DOMException_1.default(err.message, 'SyntaxError');
    };
    return parser;
}
//# sourceMappingURL=XMLParser.js.map