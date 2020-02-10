"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    NodeType[NodeType["ATTRIBUTE_NODE"] = 2] = "ATTRIBUTE_NODE";
    NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
    NodeType[NodeType["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
    NodeType[NodeType["ENTITY_REFERENCE_NODE"] = 5] = "ENTITY_REFERENCE_NODE";
    NodeType[NodeType["ENTITY_NODE"] = 6] = "ENTITY_NODE";
    NodeType[NodeType["PROCESSING_INSTRUCTION_NODE"] = 7] = "PROCESSING_INSTRUCTION_NODE";
    NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    NodeType[NodeType["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
    NodeType[NodeType["DOCUMENT_TYPE_NODE"] = 10] = "DOCUMENT_TYPE_NODE";
    NodeType[NodeType["DOCUMENT_FRAGMENT_NODE"] = 11] = "DOCUMENT_FRAGMENT_NODE";
    NodeType[NodeType["NOTATION_NODE"] = 12] = "NOTATION_NODE";
    NodeType[NodeType["DOCUMENT_POSITION_DISCONNECTED"] = 1] = "DOCUMENT_POSITION_DISCONNECTED";
    NodeType[NodeType["DOCUMENT_POSITION_PRECEDING"] = 2] = "DOCUMENT_POSITION_PRECEDING";
    NodeType[NodeType["DOCUMENT_POSITION_FOLLOWING"] = 4] = "DOCUMENT_POSITION_FOLLOWING";
    NodeType[NodeType["DOCUMENT_POSITION_CONTAINS"] = 8] = "DOCUMENT_POSITION_CONTAINS";
    NodeType[NodeType["DOCUMENT_POSITION_CONTAINED_BY"] = 16] = "DOCUMENT_POSITION_CONTAINED_BY";
    NodeType[NodeType["DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"] = 32] = "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC";
})(NodeType || (NodeType = {}));
exports.default = NodeType;
//# sourceMappingURL=NodeType.js.map