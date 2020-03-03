"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const InternalHandler_1 = __importStar(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Element_1 = require("./Element");
const ElementCSSInlineStyle_1 = require("../mixins/ElementCSSInlineStyle");
const ElementContentEditable_1 = require("../mixins/ElementContentEditable");
const GlobalEventHandlers_1 = require("../mixins/GlobalEventHandlers");
const HTMLOrSVGElement_1 = require("../mixins/HTMLOrSVGElement");
_a = StateMachine_1.default('HTMLElement'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfHTMLElement = _a.setReadonlyOfHTMLElement;
exports.internalHandler = new InternalHandler_1.default('HTMLElement', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function HTMLElementGenerator(Element, ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(Element, [ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement]);
    return class HTMLElement extends Parent {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(HTMLElement, this, exports.internalHandler, exports.HTMLElementConstantKeys, exports.HTMLElementPropertyKeys);
        }
        // properties
        get accessKey() {
            return exports.internalHandler.get(this, 'accessKey', false);
        }
        set accessKey(value) {
            exports.internalHandler.set(this, 'accessKey', value);
        }
        get dir() {
            return exports.internalHandler.get(this, 'dir', false);
        }
        set dir(value) {
            exports.internalHandler.set(this, 'dir', value);
        }
        get draggable() {
            return exports.internalHandler.get(this, 'draggable', false);
        }
        set draggable(value) {
            exports.internalHandler.set(this, 'draggable', value);
        }
        get hidden() {
            return exports.internalHandler.get(this, 'hidden', false);
        }
        set hidden(value) {
            exports.internalHandler.set(this, 'hidden', value);
        }
        get lang() {
            return exports.internalHandler.get(this, 'lang', false);
        }
        set lang(value) {
            exports.internalHandler.set(this, 'lang', value);
        }
        get offsetHeight() {
            return exports.internalHandler.get(this, 'offsetHeight', false);
        }
        get offsetLeft() {
            return exports.internalHandler.get(this, 'offsetLeft', false);
        }
        get offsetParent() {
            return exports.internalHandler.get(this, 'offsetParent', true);
        }
        get offsetTop() {
            return exports.internalHandler.get(this, 'offsetTop', false);
        }
        get offsetWidth() {
            return exports.internalHandler.get(this, 'offsetWidth', false);
        }
        get title() {
            return exports.internalHandler.get(this, 'title', false);
        }
        set title(value) {
            exports.internalHandler.set(this, 'title', value);
        }
        get translate() {
            return exports.internalHandler.get(this, 'translate', false);
        }
        set translate(value) {
            exports.internalHandler.set(this, 'translate', value);
        }
        // methods
        click() {
            exports.internalHandler.run(this, 'click', []);
        }
        addEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'addEventListener', [type, listener, options]);
        }
        removeEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'removeEventListener', [type, listener, options]);
        }
    };
}
exports.HTMLElementGenerator = HTMLElementGenerator;
// tslint:disable-next-line:variable-name
exports.HTMLElementPropertyKeys = [...Element_1.ElementPropertyKeys, ...ElementCSSInlineStyle_1.ElementCSSInlineStylePropertyKeys, ...ElementContentEditable_1.ElementContentEditablePropertyKeys, ...GlobalEventHandlers_1.GlobalEventHandlersPropertyKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementPropertyKeys, 'accessKey', 'dir', 'draggable', 'hidden', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'title', 'translate'];
// tslint:disable-next-line:variable-name
exports.HTMLElementConstantKeys = [...Element_1.ElementConstantKeys, ...ElementCSSInlineStyle_1.ElementCSSInlineStyleConstantKeys, ...ElementContentEditable_1.ElementContentEditableConstantKeys, ...GlobalEventHandlers_1.GlobalEventHandlersConstantKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementConstantKeys];
//# sourceMappingURL=HTMLElement.js.map