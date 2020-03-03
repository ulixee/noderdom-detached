"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeType_1 = __importDefault(require("../constants/NodeType"));
function isDocumentFragment(node) {
    return node != null && node.nodeType === NodeType_1.default.DOCUMENT_FRAGMENT_NODE;
}
exports.isDocumentFragment = isDocumentFragment;
function isDocument(node) {
    return node != null && node.nodeType === NodeType_1.default.DOCUMENT_NODE;
}
exports.isDocument = isDocument;
function isText(node) {
    return node != null && node.nodeType === NodeType_1.default.TEXT_NODE;
}
exports.isText = isText;
function isAttr(node) {
    return node != null && node.nodeType === NodeType_1.default.ATTRIBUTE_NODE;
}
exports.isAttr = isAttr;
function isElement(node) {
    return node != null && node.nodeType === NodeType_1.default.ELEMENT_NODE;
}
exports.isElement = isElement;
function isProcessingInstruction(node) {
    return node != null && node.nodeType === NodeType_1.default.PROCESSING_INSTRUCTION_NODE;
}
exports.isProcessingInstruction = isProcessingInstruction;
function isComment(node) {
    return node != null && node.nodeType === NodeType_1.default.COMMENT_NODE;
}
exports.isComment = isComment;
function isCDATASection(node) {
    return node != null && node.nodeType === NodeType_1.default.CDATA_SECTION_NODE;
}
exports.isCDATASection = isCDATASection;
function isDocumentType(node) {
    return node != null && node.nodeType === NodeType_1.default.DOCUMENT_TYPE_NODE;
}
exports.isDocumentType = isDocumentType;
function isCharacterData(node) {
    return (node != null &&
        (node.nodeType === NodeType_1.default.TEXT_NODE ||
            node.nodeType === NodeType_1.default.CDATA_SECTION_NODE ||
            node.nodeType === NodeType_1.default.COMMENT_NODE ||
            node.nodeType === NodeType_1.default.PROCESSING_INSTRUCTION_NODE));
}
exports.isCharacterData = isCharacterData;
//# sourceMappingURL=utils.js.map