"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = require("../../base/classes/Element");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const ChildNode_1 = __importDefault(require("../../base/mixins/ChildNode"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../mixins/NonDocumentTypeChildNode"));
const ParentNode_1 = __importDefault(require("../mixins/ParentNode"));
const Slotable_1 = __importDefault(require("../../base/mixins/Slotable"));
const Serialization_1 = require("../parser/Serialization");
const DOMException_1 = __importDefault(require("./DOMException"));
const utils_1 = require("../utils/utils");
const NamedNodeMap_1 = __importStar(require("./NamedNodeMap"));
const Node_1 = __importDefault(require("./Node"));
const Document_1 = require("./Document");
const DOMTokenList_1 = __importDefault(require("./DOMTokenList"));
const queryable_1 = require("../utils/queryable");
// tslint:disable-next-line:variable-name
const GeneratedElement = Element_1.ElementGenerator(Node_1.default, ChildNode_1.default, NonDocumentTypeChildNode_1.default, ParentNode_1.default, Slotable_1.default);
class Element extends GeneratedElement {
    constructor() {
        super();
        const namedNodeMap = new NamedNodeMap_1.default();
        NamedNodeMap_1.setReadonlyOfNamedNodeMap(namedNodeMap, {
            ownerElement: this,
        });
        Element_1.setState(this, {
            nodeType: NodeType_1.default.ELEMENT_NODE,
            attributes: namedNodeMap,
        });
    }
    get classList() {
        const state = Element_1.getState(this);
        if (!state.classList) {
            state.classList = new DOMTokenList_1.default();
            state.classList.value = this.className;
        }
        return state.classList;
    }
    get className() {
        return this.getAttribute('class') || '';
    }
    get id() {
        return this.getAttribute('id') || '';
    }
    get outerHTML() {
        const document = (this.nodeType === NodeType_1.default.DOCUMENT_NODE ? this : this.ownerDocument);
        return Serialization_1.fragmentSerialization(document, { childNodes: [this] }, { requireWellFormed: false });
    }
    get innerHTML() {
        const document = (this.nodeType === NodeType_1.default.DOCUMENT_NODE ? this : this.ownerDocument);
        return Serialization_1.fragmentSerialization(document, this, { requireWellFormed: true });
    }
    closest(selectors) {
        const node = this;
        const isDocumentNode = node.nodeType === NodeType_1.default.DOCUMENT_NODE;
        const document = isDocumentNode ? node : node.ownerDocument;
        if (!document)
            return null;
        return Document_1.queryEngine(document).closest(selectors, this);
    }
    getAttribute(qualifiedName) {
        const attr = this.getAttributeNode(qualifiedName);
        return attr != null ? attr.value || '' : null;
    }
    getAttributeNS(namespace, localName) {
        const attr = this.getAttributeNodeNS(namespace || '', localName);
        return (attr && attr.value) || '';
    }
    getAttributeNode(name) {
        return this.attributes.getNamedItem(name);
    }
    getAttributeNodeNS(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
    }
    getElementsByClassName(classNames) {
        return queryable_1.getElementsByClassName(this, classNames);
    }
    getElementsByTagName(qualifiedName) {
        return queryable_1.getElementsByTagName(this, qualifiedName);
    }
    getElementsByTagNameNS(namespaceURI, localName) {
        return queryable_1.getElementsByTagNameNS(this, namespaceURI, localName);
    }
    hasAttribute(qualifiedName) {
        return this.getAttributeNode(qualifiedName) != null;
    }
    hasAttributeNS(namespace, localName) {
        return this.getAttributeNodeNS(namespace || '', localName) != null;
    }
    hasAttributes() {
        return utils_1.isElement(this) ? this.attributes.length > 0 : false;
    }
    removeAttribute(qualifiedName) {
        const attr = this.getAttributeNode(qualifiedName);
        if (attr) {
            this.removeAttributeNode(attr);
        }
    }
    removeAttributeNS(namespace, localName) {
        const old = this.getAttributeNodeNS(namespace || '', localName);
        if (old) {
            this.removeAttributeNode(old);
        }
    }
    removeAttributeNode(attr) {
        return this.attributes.removeNamedItem(attr.nodeName);
    }
    setAttribute(qualifiedName, value) {
        const attr = this.ownerDocument.createAttribute(qualifiedName);
        attr.value = attr.nodeValue = `${value}`;
        this.setAttributeNode(attr);
    }
    setAttributeNS(namespace, qualifiedName, value) {
        const attr = this.ownerDocument.createAttributeNS(namespace, qualifiedName);
        attr.value = attr.nodeValue = `${value}`;
        this.setAttributeNode(attr);
    }
    setAttributeNode(attr) {
        if (this.ownerDocument !== attr.ownerDocument) {
            throw new DOMException_1.default(undefined, 'WrongDocumentError');
        }
        return this.attributes.setNamedItem(attr);
    }
    setAttributeNodeNS(attr) {
        if (this.ownerDocument !== attr.ownerDocument) {
            throw new DOMException_1.default(undefined, 'WrongDocumentError');
        }
        return this.attributes.setNamedItemNS(attr);
    }
}
exports.default = Element;
Element_1.internalHandler.handle('attributes', 'tagName', 'localName', 'namespaceURI', 'prefix');
//# sourceMappingURL=Element.js.map