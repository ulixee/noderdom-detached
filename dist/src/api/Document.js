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
const Document_1 = require("../../base/classes/Document");
const Element_1 = require("../../base/classes/Element");
const Attr_1 = require("../../base/classes/Attr");
const CDATASection_1 = require("../../base/classes/CDATASection");
const Comment_1 = require("../../base/classes/Comment");
const DocumentFragment_1 = require("../../base/classes/DocumentFragment");
const HTMLElement_1 = require("../../base/classes/HTMLElement");
const ProcessingInstruction_1 = require("../../base/classes/ProcessingInstruction");
const Text_1 = require("../../base/classes/Text");
const Attr_2 = __importDefault(require("./Attr"));
const CDATASection_2 = __importDefault(require("./CDATASection"));
const Comment_2 = __importDefault(require("./Comment"));
const DocumentFragment_2 = __importDefault(require("./DocumentFragment"));
const Element_2 = __importDefault(require("./Element"));
const HTMLElement_2 = __importDefault(require("./HTMLElement"));
const ProcessingInstruction_2 = __importDefault(require("./ProcessingInstruction"));
const Text_2 = __importDefault(require("./Text"));
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const Node_1 = __importDefault(require("./Node"));
const DocumentOrShadowRoot_1 = __importDefault(require("../../base/mixins/DocumentOrShadowRoot"));
const GlobalEventHandlers_1 = __importDefault(require("../../base/mixins/GlobalEventHandlers"));
const NonElementParentNode_1 = __importDefault(require("../mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../mixins/ParentNode"));
const DOMException_1 = __importDefault(require("./DOMException"));
const queryable_1 = require("../utils/queryable");
const document_utils_1 = require("../utils/document-utils");
const utils_1 = require("../utils/utils");
const NodeList_1 = __importStar(require("./NodeList"));
const nwsapi = require('nwsapi');
// tslint:disable-next-line:variable-name
const GeneratedDocument = Document_1.DocumentGenerator(Node_1.default, DocumentOrShadowRoot_1.default, GlobalEventHandlers_1.default, NonElementParentNode_1.default, ParentNode_1.default);
class Document extends GeneratedDocument {
    constructor() {
        super();
        Document_1.setState(this, {
            nodeName: '#document',
            nodeType: NodeType_1.default.DOCUMENT_NODE,
            contentType: 'text/html',
            compatMode: 'CSS1Compat',
        });
    }
    get body() {
        if (!this.documentElement)
            return null;
        for (let i = 0; i < this.documentElement.childNodes.length; i += 1) {
            const node = this.documentElement.childNodes.item(i);
            if (node.nodeType === NodeType_1.default.ELEMENT_NODE && node.nodeName === 'BODY') {
                return node;
            }
        }
        return null;
    }
    get documentElement() {
        for (let i = 0; i < this.childNodes.length; i += 1) {
            const node = this.childNodes.item(i);
            if (node.nodeType === NodeType_1.default.ELEMENT_NODE) {
                return node;
            }
        }
        return null;
    }
    createAttribute(localName) {
        const attr = new Attr_2.default();
        Attr_1.setReadonlyOfAttr(attr, {
            name: localName,
            nodeName: localName,
            localName: localName,
            ownerDocument: this,
        });
        return attr;
    }
    createAttributeNS(namespace, qualifiedName) {
        const pl = qualifiedName.split(':');
        const attr = new Attr_2.default();
        Attr_1.setReadonlyOfAttr(attr, {
            name: qualifiedName,
            nodeName: qualifiedName,
            specified: true,
            namespaceURI: namespace,
            ownerDocument: this,
            prefix: pl.length === 2 ? pl[0] : null,
            localName: pl.length === 2 ? pl[1] : qualifiedName,
        });
        return attr;
    }
    createCDATASection(data) {
        const cdataSection = new CDATASection_2.default();
        CDATASection_1.setReadonlyOfCDATASection(cdataSection, {
            ownerDocument: this,
        });
        cdataSection.appendData(data);
        return cdataSection;
    }
    createComment(data) {
        const comment = new Comment_2.default();
        Comment_1.setReadonlyOfComment(comment, {
            ownerDocument: this,
        });
        comment.appendData(data);
        return comment;
    }
    createDocumentFragment() {
        const documentFragment = new DocumentFragment_2.default();
        DocumentFragment_1.setReadonlyOfDocumentFragment(documentFragment, {
            ownerDocument: this,
        });
        return documentFragment;
    }
    createElement(tagName, _options) {
        const htmlElement = new HTMLElement_2.default();
        const nodeName = tagName.toUpperCase();
        HTMLElement_1.setReadonlyOfHTMLElement(htmlElement, {
            ownerDocument: this,
            nodeName: nodeName,
            tagName: nodeName,
            localName: tagName.toLowerCase(),
        });
        return htmlElement;
    }
    createElementNS(namespace, qualifiedName, _options) {
        const pl = qualifiedName.split(':');
        const nodeName = qualifiedName.toUpperCase();
        const element = new Element_2.default();
        Element_1.setReadonlyOfElement(element, {
            ownerDocument: this,
            nodeName: nodeName,
            tagName: nodeName,
            namespaceURI: namespace,
            prefix: pl.length === 2 ? pl[0] : null,
            localName: pl.length === 2 ? pl[1].toLowerCase() : qualifiedName.toLowerCase(),
        });
        return element;
    }
    createProcessingInstruction(target, data) {
        const processingInstruction = new ProcessingInstruction_2.default();
        ProcessingInstruction_1.setReadonlyOfProcessingInstruction(processingInstruction, {
            nodeName: target,
            target: target,
            ownerDocument: this,
        });
        processingInstruction.nodeValue = data;
        processingInstruction.data = data;
        return processingInstruction;
    }
    createTextNode(data) {
        const text = new Text_2.default();
        Text_1.setReadonlyOfText(text, {
            ownerDocument: this,
        });
        text.appendData(data);
        return text;
    }
    getElementsByClassName(classNames) {
        return queryable_1.getElementsByClassName(this, classNames);
    }
    getElementsByName(elementName) {
        const nodeList = new NodeList_1.default();
        document_utils_1._visitNode(this, node => {
            if (node === this)
                return;
            if (!utils_1.isElement(node))
                return;
            const element = node;
            if (element.getAttributeNS && element.getAttributeNS(null, 'name') === elementName) {
                NodeList_1.pushIntoNodeList(nodeList, element);
            }
        });
        return nodeList;
    }
    getElementsByTagName(qualifiedName) {
        return queryable_1.getElementsByTagName(this, qualifiedName);
    }
    getElementsByTagNameNS(namespaceURI, localName) {
        return queryable_1.getElementsByTagNameNS(this, namespaceURI, localName);
    }
}
exports.default = Document;
Document_1.internalHandler.handle('doctype', 'inputEncoding', 'implementation', 'contentType', 'compatMode');
// QUERY ENGINE //////////////////////////////////////////////
function queryEngine(document) {
    let { nwsapiInstance } = Document_1.getState(document);
    if (!nwsapiInstance) {
        nwsapiInstance = nwsapi({
            document,
            DOMException: DOMException_1.default,
        });
        nwsapiInstance.configure({
            LOGERRORS: false,
            VERBOSITY: true,
            IDS_DUPES: true,
            MIXEDCASE: true,
        });
        Document_1.setHiddenState(document, { nwsapiInstance });
    }
    return nwsapiInstance;
}
exports.queryEngine = queryEngine;
//# sourceMappingURL=Document.js.map