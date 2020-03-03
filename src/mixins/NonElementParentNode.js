"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NonElementParentNode_1 = __importDefault(require("../../base/mixins/NonElementParentNode"));
const document_utils_1 = require("../utils/document-utils");
const utils_1 = require("../utils/utils");
class NonElementParentNode extends NonElementParentNode_1.default {
    getElementById(elementId) {
        const document = this;
        if (!document.documentElement)
            return null;
        let rtv = null;
        document_utils_1._visitNode(document.documentElement, (node) => {
            if (utils_1.isElement(node)) {
                if (node.getAttribute('id') === elementId) {
                    rtv = node;
                    return true;
                }
            }
        });
        return rtv;
    }
}
exports.default = NonElementParentNode;
//# sourceMappingURL=NonElementParentNode.js.map