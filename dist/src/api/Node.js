"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_utils_1 = require("../utils/node-utils");
const utils_1 = require("../utils/utils");
const Node_1 = require("../../base/classes/Node");
const NodeList_1 = __importStar(require("./NodeList"));
const EventTarget_1 = __importDefault(require("./EventTarget"));
const NodeType_1 = __importDefault(require("../constants/NodeType"));
class Node extends Node_1.NodeGenerator(EventTarget_1.default) {
    constructor() {
        super();
        Node_1.setState(this, {
            childNodes: new NodeList_1.default(),
        });
    }
    get firstChild() {
        return this.childNodes[0];
    }
    get lastChild() {
        return this.childNodes[this.childNodes.length - 1];
    }
    get nextSibling() {
        if (!this.parentNode) {
            return null;
        }
        const i = NodeList_1.indexOfNodeListItem(this.parentNode.childNodes, this);
        return i >= 0 ? this.parentNode.childNodes[i + 1] : null;
    }
    get parentElement() {
        const parentNode = this.parentNode;
        return parentNode !== null && parentNode.nodeType === NodeType_1.default.ELEMENT_NODE ? parentNode : null;
    }
    get previousSibling() {
        if (!this.parentNode) {
            return null;
        }
        const i = NodeList_1.indexOfNodeListItem(this.parentNode.childNodes, this);
        return i > 0 ? this.parentNode.childNodes[i - 1] : null;
    }
    get textContent() {
        return node_utils_1.getTextContent(this);
    }
    set textContent(data) {
        if (utils_1.isElement(this) || utils_1.isDocumentFragment(this)) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            if (data) {
                this.appendChild(this.ownerDocument.createTextNode(data));
            }
        }
        else {
            this.nodeValue = data;
        }
    }
    appendChild(newChild) {
        const insertedNode = this.insertBefore(newChild, null);
        return insertedNode;
    }
    hasChildNodes() {
        return this.firstChild != null;
    }
    insertBefore(newChild, refChild) {
        if (newChild.parentNode)
            newChild.parentNode.removeChild(newChild);
        // where should new node be inserted?
        let index = this.childNodes.length;
        if (refChild) {
            const childIndex = NodeList_1.indexOfNodeListItem(this.childNodes, refChild);
            index = childIndex >= 0 ? childIndex : index;
        }
        // if isDocumentFragment then roll up all child nodes of fragment
        let nodesToAdd = [newChild];
        if (utils_1.isDocumentFragment(newChild)) {
            nodesToAdd = newChild.childNodes;
        }
        // parentNode must be set on all
        for (const childNode of nodesToAdd) {
            Node_1.setState(childNode, {
                parentNode: this,
            });
        }
        NodeList_1.spliceIntoNodeList(this.childNodes, index, ...nodesToAdd);
        return newChild;
    }
    isDefaultNamespace(namespace) {
        const prefix = this.lookupPrefix(namespace || '');
        return prefix == null;
    }
    lookupNamespaceURI(prefix) {
        return node_utils_1.locateNamespace(this, prefix || null);
    }
    lookupPrefix(namespaceURI) {
        return node_utils_1.locateNamespacePrefix(this, namespaceURI || null);
    }
    normalize() {
        let child = this.firstChild;
        while (child) {
            const next = child.nextSibling;
            if (next && utils_1.isText(next) && utils_1.isText(child)) {
                this.removeChild(next);
                child.appendData(next.data);
            }
            else {
                child.normalize();
                child = next;
            }
        }
    }
    removeChild(child) {
        NodeList_1.removeFromNodeList(this.childNodes, child);
        Node_1.setState(child, {
            parentNode: null,
        });
        return child;
    }
    replaceChild(node, child) {
        this.insertBefore(node, child);
        return this.removeChild(child);
    }
}
exports.default = Node;
Node_1.internalHandler.handle('nodeName', 'nodeType', 'nodeValue', 'childNodes', 'ownerDocument', 'parentNode');
//# sourceMappingURL=Node.js.map