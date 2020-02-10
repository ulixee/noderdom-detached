"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attr_1 = require("../../base/classes/Attr");
const Node_1 = __importDefault(require("./Node"));
const NodeType_1 = __importDefault(require("../constants/NodeType"));
class Attr extends Attr_1.AttrGenerator(Node_1.default) {
    constructor() {
        super();
        Attr_1.setState(this, {
            nodeType: NodeType_1.default.ATTRIBUTE_NODE,
        });
    }
    get value() {
        return this.nodeValue || '';
    }
    set value(value) {
        this.nodeValue = value;
    }
    // not allowed on Attr
    appendChild(node) {
        return Attr_1.internalHandler.run(this, 'appendChild', [node]);
    }
    hasChildNodes() {
        return Attr_1.internalHandler.run(this, 'hasChildNodes', []);
    }
    insertBefore(node, child) {
        return Attr_1.internalHandler.run(this, 'insertBefore', [node, child]);
    }
    isEqualNode(otherNode) {
        return Attr_1.internalHandler.run(this, 'isEqualNode', [otherNode]);
    }
    normalize() {
        Attr_1.internalHandler.run(this, 'normalize', []);
    }
    removeChild(child) {
        return Attr_1.internalHandler.run(this, 'removeChild', [child]);
    }
    replaceChild(node, child) {
        return Attr_1.internalHandler.run(this, 'replaceChild', [node, child]);
    }
}
exports.default = Attr;
Attr_1.internalHandler.handle('name', 'ownerElement', 'namespaceURI', 'prefix', 'localName');
Attr_1.internalHandler.remove('attributes', 'childNodes', 'firstChild', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentNode', 'previousSibling', 'schemaTypeInfo', 'specified', 'textContent');
//# sourceMappingURL=Attr.js.map