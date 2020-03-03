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
const ParentNode_1 = __importDefault(require("../../base/mixins/ParentNode"));
const HTMLCollection_1 = __importStar(require("../api/HTMLCollection"));
const NodeList_1 = __importDefault(require("../api/NodeList"));
const Document_1 = require("../api/Document");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
class ParentNode extends ParentNode_1.default {
    get children() {
        const children = new HTMLCollection_1.default();
        const nodes = this.childNodes;
        if (!nodes)
            return children;
        let i = 0;
        while (nodes[i]) {
            if (nodes[i].nodeType === 1) {
                HTMLCollection_1.pushIntoHTMLCollection(children, nodes[i]);
            }
            i += 1;
        }
        return children;
    }
    get firstElementChild() {
        return this.children[0];
    }
    get lastElementChild() {
        const children = this.children;
        return children[children.length - 1];
    }
    append(...nodes) {
        const ownerNode = this;
        for (let node of nodes) {
            if (typeof node === 'string') {
                node = ownerNode.ownerDocument.createTextNode(node);
            }
            ownerNode.appendChild(node);
        }
    }
    querySelector(selectors) {
        const node = this;
        const isDocumentNode = node.nodeType === NodeType_1.default.DOCUMENT_NODE;
        const document = isDocumentNode ? node : node.ownerDocument;
        if (!document)
            return null;
        return Document_1.queryEngine(document).first(selectors, this);
    }
    querySelectorAll(selectors) {
        const node = this;
        const isDocumentNode = node.nodeType === NodeType_1.default.DOCUMENT_NODE;
        const document = isDocumentNode ? node : node.ownerDocument;
        if (!document)
            return new NodeList_1.default();
        return Document_1.queryEngine(document).select(selectors, this);
    }
}
exports.default = ParentNode;
//# sourceMappingURL=ParentNode.js.map