"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NonDocumentTypeChildNode_1 = __importDefault(require("../../base/mixins/NonDocumentTypeChildNode"));
const HTMLCollection_1 = __importDefault(require("../api/HTMLCollection"));
class NonDocumentTypeChildNode extends NonDocumentTypeChildNode_1.default {
    get nextElementSibling() {
        const node = this;
        const parentNode = node.parentNode;
        const children = parentNode ? parentNode.children : new HTMLCollection_1.default();
        let i = 0;
        while (i < children.length) {
            if (children[i] === node) {
                return children.item(i + 1);
            }
            i += 1;
        }
        return null;
    }
    get previousElementSibling() {
        const node = this;
        const parentElement = node.parentElement;
        const children = parentElement ? parentElement.children : new HTMLCollection_1.default();
        let i = children.length - 1;
        while (i >= 0) {
            if (children[i] === node) {
                return i > 0 ? children.item(i - 1) : null;
            }
            i -= 1;
        }
        return null;
    }
}
exports.default = NonDocumentTypeChildNode;
//# sourceMappingURL=NonDocumentTypeChildNode.js.map