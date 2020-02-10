"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
function getTextContent(n) {
    let node = n;
    if (utils_1.isElement(node) || utils_1.isDocumentFragment(node)) {
        const buf = [];
        node = node.firstChild;
        while (node) {
            if (!utils_1.isProcessingInstruction(node) && !utils_1.isComment(node)) {
                const content = getTextContent(node);
                if (content != null) {
                    buf.push(content);
                }
            }
            node = node.nextSibling;
        }
        return buf.join('');
    }
    return node.nodeValue;
}
exports.getTextContent = getTextContent;
// https://dom.spec.whatwg.org/#locate-a-namespace-prefix
function locateNamespacePrefix(node, namespace) {
    if (node.nodeType === NodeType_1.default.ELEMENT_NODE) {
        const element = node;
        if (element.namespaceURI === namespace && element.prefix !== null) {
            return element.prefix;
        }
        for (const attribute of Array.from(element.attributes)) {
            if (attribute.prefix === 'xmlns' && attribute.value === namespace) {
                return attribute.localName;
            }
        }
    }
    return node.parentElement ? exports.locateNamespacePrefix(node.parentElement, namespace) : null;
}
exports.locateNamespacePrefix = locateNamespacePrefix;
// https://dom.spec.whatwg.org/#locate-a-namespace
function locateNamespace(node, prefix) {
    switch (node.nodeType) {
        case NodeType_1.default.ELEMENT_NODE: {
            const element = node;
            if (element.namespaceURI !== null && element.prefix === prefix) {
                return element.namespaceURI;
            }
            for (const attribute of Array.from(element.attributes)) {
                if (attribute.prefix === 'xmlns' && attribute.localName === prefix) {
                    return attribute.value !== '' ? attribute.value : null;
                }
                if (attribute.localName === 'xmlns' && prefix === null) {
                    return attribute.value !== '' ? attribute.value : null;
                }
            }
            return element.parentElement ? locateNamespace(element.parentElement, prefix) : null;
        }
        case NodeType_1.default.DOCUMENT_NODE: {
            const document = node;
            return document.documentElement ? locateNamespace(document.documentElement, prefix) : null;
        }
        case NodeType_1.default.DOCUMENT_TYPE_NODE:
        case NodeType_1.default.DOCUMENT_FRAGMENT_NODE: {
            return null;
        }
        default: {
            return node.parentElement ? locateNamespace(node.parentElement, prefix) : null;
        }
    }
}
exports.locateNamespace = locateNamespace;
//# sourceMappingURL=node-utils.js.map