"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentFragment_1 = require("../../base/classes/DocumentFragment");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const Node_1 = __importDefault(require("./Node"));
const NonElementParentNode_1 = __importDefault(require("../mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../mixins/ParentNode"));
// tslint:disable-next-line:variable-name
const Parent = DocumentFragment_1.DocumentFragmentGenerator(Node_1.default, NonElementParentNode_1.default, ParentNode_1.default);
class DocumentFragment extends Parent {
    constructor() {
        super();
        DocumentFragment_1.setState(this, {
            nodeName: '#document-fragment',
            nodeType: NodeType_1.default.DOCUMENT_FRAGMENT_NODE,
        });
    }
}
exports.default = DocumentFragment;
//# sourceMappingURL=DocumentFragment.js.map