"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const w3c_xmlserializer_1 = __importDefault(require("w3c-xmlserializer"));
const parse5_1 = __importDefault(require("parse5"));
const DOMException_1 = __importDefault(require("../api/DOMException"));
const Parse5TreeAdapter_1 = __importDefault(require("./Parse5TreeAdapter"));
function htmlSerialization(document, node) {
    const domImplementation = document.implementation;
    const config = {
        treeAdapter: new Parse5TreeAdapter_1.default(domImplementation, document),
    };
    return parse5_1.default.serialize(node, config);
}
function fragmentSerialization(document, node, options) {
    const { requireWellFormed } = options;
    if (document.doctype && document.doctype.name === 'html') {
        return htmlSerialization(document, node);
    }
    const nodesToSerialize = Array.from(node.childNodes);
    try {
        let serialized = '';
        for (const nodeToSerialize of nodesToSerialize) {
            serialized += w3c_xmlserializer_1.default(nodeToSerialize, { requireWellFormed });
        }
        return serialized;
    }
    catch (e) {
        console.log(e);
        throw new DOMException_1.default(e.message, 'InvalidStateError');
    }
}
exports.fragmentSerialization = fragmentSerialization;
//# sourceMappingURL=Serialization.js.map