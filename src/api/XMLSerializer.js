"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const XMLSerializer_1 = __importDefault(require("../../base/classes/XMLSerializer"));
const serialize = require('w3c-xmlserializer');
class XMLSerializer extends XMLSerializer_1.default {
    serializeToString(root) {
        let serialized = '';
        if (root.nodeType === NodeType_1.default.DOCUMENT_NODE && root.constructor.name === 'XMLDocument') {
            const document = root;
            serialized += '<?xml version="1.0"';
            if (document.inputEncoding) {
                serialized += ` encoding="${document.inputEncoding}"`;
            }
            serialized += '?>';
        }
        serialized += serialize(root, { requireWellFormed: true });
        return serialized;
    }
}
exports.default = XMLSerializer;
//# sourceMappingURL=XMLSerializer.js.map