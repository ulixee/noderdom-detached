"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CDATASection_1 = require("../../base/classes/CDATASection");
const Text_1 = __importDefault(require("./Text"));
const NodeType_1 = __importDefault(require("../constants/NodeType"));
class CDATASection extends CDATASection_1.CDATASectionGenerator(Text_1.default) {
    constructor() {
        super();
        CDATASection_1.setState(this, {
            nodeName: '#cdata-section',
            nodeType: NodeType_1.default.CDATA_SECTION_NODE,
        });
    }
}
exports.default = CDATASection;
//# sourceMappingURL=CDATASection.js.map