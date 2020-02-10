"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_1 = require("../../base/classes/HTMLElement");
const Element_1 = __importDefault(require("./Element"));
const ElementCSSInlineStyle_1 = __importDefault(require("../../base/mixins/ElementCSSInlineStyle"));
const ElementContentEditable_1 = __importDefault(require("../../base/mixins/ElementContentEditable"));
const GlobalEventHandlers_1 = __importDefault(require("../../base/mixins/GlobalEventHandlers"));
const HTMLOrSVGElement_1 = __importDefault(require("../../base/mixins/HTMLOrSVGElement"));
// tslint:disable-next-line:variable-name
const GeneratedHTMLElement = HTMLElement_1.HTMLElementGenerator(Element_1.default, ElementCSSInlineStyle_1.default, ElementContentEditable_1.default, GlobalEventHandlers_1.default, HTMLOrSVGElement_1.default);
class HTMLElement extends GeneratedHTMLElement {
}
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.js.map