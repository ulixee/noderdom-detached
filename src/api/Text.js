"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = require("../../base/classes/Text");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const CharacterData_1 = __importDefault(require("./CharacterData"));
const Slotable_1 = __importDefault(require("../../base/mixins/Slotable"));
class Text extends Text_1.TextGenerator(CharacterData_1.default, Slotable_1.default) {
    constructor(data) {
        super();
        Text_1.setState(this, {
            nodeName: '#text',
            nodeType: NodeType_1.default.TEXT_NODE,
            nodeValue: data || '',
            data: data || '',
        });
    }
    splitText(offset) {
        let text = this.data;
        const newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        const newTextNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
            this.parentNode.insertBefore(newTextNode, this.nextSibling);
        }
        return newTextNode;
    }
}
exports.default = Text;
Text_1.internalHandler.handle();
//# sourceMappingURL=Text.js.map