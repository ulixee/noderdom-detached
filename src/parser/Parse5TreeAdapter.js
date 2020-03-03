"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./PatchedOpenElementStack");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const DocumentType_1 = require("../../base/classes/DocumentType");
const Element_1 = require("../../base/classes/Element");
const Document_1 = require("../../base/classes/Document");
const Attr_1 = require("../../base/classes/Attr");
class Parse5TreeAdapter {
    constructor(domImplementation, document) {
        this.implementation = domImplementation;
        this.document = document;
    }
    createDocument() {
        return this.document;
    }
    createDocumentFragment() {
        return this.document.createDocumentFragment();
    }
    createElement(tagName, namespaceURI, attrs) {
        const ownerDocument = this.ownerDocument();
        const element = ownerDocument.createElement(tagName);
        Element_1.setReadonlyOfElement(element, { namespaceURI: namespaceURI });
        this.adoptAttributes(element, attrs);
        return element;
    }
    createCommentNode(data) {
        const ownerDocument = this.ownerDocument();
        return ownerDocument.createComment(data);
    }
    appendChild(parentNode, newNode) {
        const nodeToReplace = this.findNodeToReplace(parentNode, newNode);
        if (nodeToReplace) {
            parentNode.replaceChild(newNode, nodeToReplace);
        }
        else {
            parentNode.append(newNode);
        }
    }
    insertBefore(parentNode, newNode, referenceNode) {
        const nodeToReplace = this.findNodeToReplace(parentNode, newNode);
        if (nodeToReplace) {
            parentNode.replaceChild(newNode, nodeToReplace);
        }
        else {
            parentNode.prepend(newNode, referenceNode);
        }
    }
    setTemplateContent(templateElement, contentFragment) {
        this.appendChild(templateElement, contentFragment);
    }
    getTemplateContent(templateElement) {
        return templateElement.children[0];
    }
    setDocumentType(document, name, publicId, systemId) {
        let documentType = null;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < document.childNodes.length; i += 1) {
            if (document.childNodes[i].nodeType === NodeType_1.default.DOCUMENT_TYPE_NODE) {
                documentType = document.childNodes[i];
                break;
            }
        }
        if (documentType) {
            DocumentType_1.setReadonlyOfDocumentType(documentType, {
                name: name,
                publicId: publicId,
                systemId: systemId,
            });
        }
        else {
            documentType = this.implementation.createDocumentType(name, publicId, systemId);
            this.appendChild(document, documentType);
        }
    }
    setDocumentMode(document, mode) {
        Document_1.setReadonlyOfDocument(document, {
            compatMode: mode === 'quirks' ? 'BackCompat' : 'CSS1Compat',
        });
    }
    getDocumentMode(document) {
        return document.compatMode === 'BackCompat' ? 'quirks' : 'no-quirks';
    }
    detachNode(node) {
        const parentNode = node.parentNode;
        if (parentNode) {
            parentNode.removeChild(node);
        }
    }
    insertText(parentNode, text) {
        const { lastChild } = parentNode;
        if (lastChild && lastChild.nodeType === NodeType_1.default.TEXT_NODE) {
            lastChild.data += text;
        }
        else {
            const ownerDocument = this.ownerDocument();
            const textNode = ownerDocument.createTextNode(text);
            parentNode.append(textNode);
        }
    }
    insertTextBefore(parentNode, text, referenceNode) {
        const { previousSibling } = referenceNode;
        if (previousSibling && previousSibling.nodeType === NodeType_1.default.TEXT_NODE) {
            previousSibling.data += text;
        }
        else {
            const ownerDocument = this.ownerDocument();
            const textNode = ownerDocument.createTextNode(text);
            parentNode.append(textNode, referenceNode);
        }
    }
    adoptAttributes(element, attrs) {
        for (const attr of attrs) {
            const prefix = attr.prefix === '' ? null : attr.prefix;
            const attribute = element.ownerDocument.createAttribute(attr.name);
            attribute.value = attribute.nodeValue = attr.value;
            Attr_1.setReadonlyOfAttr(attribute, {
                prefix: prefix === undefined ? null : prefix,
                namespaceURI: attr.namespace === undefined ? null : attr.namespace,
            });
            element.setAttributeNode(attribute);
        }
    }
    getFirstChild(node) {
        return node.firstChild;
    }
    getChildNodes(node) {
        return Array.from(node.childNodes);
    }
    getParentNode(node) {
        return node.parentNode;
    }
    getAttrList(node) {
        return node.attributes;
    }
    getTagName(element) {
        return element.localName; // https://github.com/inikulin/parse5/issues/231
    }
    getNamespaceURI(element) {
        return element.namespaceURI;
    }
    getTextNodeContent(node) {
        return node.nodeValue || '';
    }
    getCommentNodeContent(node) {
        return node.data;
    }
    getDocumentTypeNodeName(node) {
        return node.name;
    }
    getDocumentTypeNodePublicId(node) {
        return node.publicId;
    }
    getDocumentTypeNodeSystemId(node) {
        return node.systemId;
    }
    isTextNode(node) {
        return node.nodeType === NodeType_1.default.TEXT_NODE;
    }
    isCommentNode(node) {
        return node.nodeType === NodeType_1.default.COMMENT_NODE;
    }
    isDocumentTypeNode(node) {
        return node.nodeType === NodeType_1.default.DOCUMENT_TYPE_NODE;
    }
    isElementNode(node) {
        return node.nodeType === NodeType_1.default.ELEMENT_NODE;
    }
    pushedOnStack(_args, currentElement) {
        this.currentElement = currentElement;
    }
    poppedOffStack(_args, currentElement) {
        this.currentElement = currentElement;
    }
    //////////////////////////////////////
    ownerDocument() {
        // The currentElement is undefined when parsing elements at the root of the document.
        // console.log('------------------------ OWNER DOCUMENT ------------------------');
        // console.log(this.document.constructor.name, this.document.nodeName, (this.document as any).testing);
        // if (this.currentElement) {
        //   console.log(this.currentElement.ownerDocument!.constructor.name, this.currentElement.ownerDocument!.nodeName, (this.currentElement.ownerDocument as any).testing);
        // }
        return (this.currentElement ? this.currentElement.ownerDocument : this.document);
    }
    findNodeToReplace(parentNode, newNode) {
        if (parentNode.nodeType === NodeType_1.default.DOCUMENT_NODE &&
            newNode.nodeType === NodeType_1.default.ELEMENT_NODE &&
            newNode.nodeName === 'HTML' &&
            this.ownerDocument().documentElement) {
            return this.ownerDocument().documentElement;
        }
        return null;
    }
}
exports.default = Parse5TreeAdapter;
//# sourceMappingURL=Parse5TreeAdapter.js.map