"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLDocument_1 = require("../../base/classes/HTMLDocument");
const Document_1 = __importDefault(require("./Document"));
// tslint:disable-next-line:variable-name
const Parent = HTMLDocument_1.HTMLDocumentGenerator(Document_1.default);
class HTMLDocument extends Parent {
}
exports.default = HTMLDocument;
//# sourceMappingURL=HTMLDocument.js.map