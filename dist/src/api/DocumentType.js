"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentType_1 = require("../../base/classes/DocumentType");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const Node_1 = __importDefault(require("./Node"));
const ChildNode_1 = __importDefault(require("../../base/mixins/ChildNode"));
// tslint:disable-next-line:variable-name
const Parent = DocumentType_1.DocumentTypeGenerator(Node_1.default, ChildNode_1.default);
class DocumentType extends Parent {
    constructor() {
        super();
        DocumentType_1.setState(this, {
            nodeType: NodeType_1.default.DOCUMENT_TYPE_NODE,
        });
    }
}
exports.default = DocumentType;
DocumentType_1.internalHandler.handle('name', 'publicId', 'systemId');
//# sourceMappingURL=DocumentType.js.map