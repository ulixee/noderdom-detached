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
const Node_1 = require("./Node");
const ChildNode_1 = require("../mixins/ChildNode");
const NonDocumentTypeChildNode_1 = require("../mixins/NonDocumentTypeChildNode");
const ParentNode_1 = require("../mixins/ParentNode");
const Slotable_1 = require("../mixins/Slotable");
_a = StateMachine_1.default('Element'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfElement = _a.setReadonlyOfElement;
exports.internalHandler = new InternalHandler_1.default('Element', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function ElementGenerator(Node, ChildNode, NonDocumentTypeChildNode, ParentNode, Slotable) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(Node, [ChildNode, NonDocumentTypeChildNode, ParentNode, Slotable]);
    return class Element extends Parent {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(Element, this, exports.internalHandler, exports.ElementConstantKeys, exports.ElementPropertyKeys);
        }
        // properties
        get attributes() {
            return exports.internalHandler.get(this, 'attributes', false);
        }
        get classList() {
            return exports.internalHandler.get(this, 'classList', false);
        }
        get className() {
            return exports.internalHandler.get(this, 'className', false);
        }
        set className(value) {
            exports.internalHandler.set(this, 'className', value);
        }
        get clientHeight() {
            return exports.internalHandler.get(this, 'clientHeight', false);
        }
        get clientLeft() {
            return exports.internalHandler.get(this, 'clientLeft', false);
        }
        get clientTop() {
            return exports.internalHandler.get(this, 'clientTop', false);
        }
        get clientWidth() {
            return exports.internalHandler.get(this, 'clientWidth', false);
        }
        get id() {
            return exports.internalHandler.get(this, 'id', false);
        }
        set id(value) {
            exports.internalHandler.set(this, 'id', value);
        }
        get innerHTML() {
            return exports.internalHandler.get(this, 'innerHTML', false);
        }
        set innerHTML(value) {
            exports.internalHandler.set(this, 'innerHTML', value);
        }
        get localName() {
            return exports.internalHandler.get(this, 'localName', false);
        }
        get namespaceURI() {
            return exports.internalHandler.get(this, 'namespaceURI', true);
        }
        get outerHTML() {
            return exports.internalHandler.get(this, 'outerHTML', false);
        }
        set outerHTML(value) {
            exports.internalHandler.set(this, 'outerHTML', value);
        }
        get prefix() {
            return exports.internalHandler.get(this, 'prefix', true);
        }
        get scrollHeight() {
            return exports.internalHandler.get(this, 'scrollHeight', false);
        }
        get scrollLeft() {
            return exports.internalHandler.get(this, 'scrollLeft', false);
        }
        set scrollLeft(value) {
            exports.internalHandler.set(this, 'scrollLeft', value);
        }
        get scrollTop() {
            return exports.internalHandler.get(this, 'scrollTop', false);
        }
        set scrollTop(value) {
            exports.internalHandler.set(this, 'scrollTop', value);
        }
        get scrollWidth() {
            return exports.internalHandler.get(this, 'scrollWidth', false);
        }
        get shadowRoot() {
            return exports.internalHandler.get(this, 'shadowRoot', true);
        }
        get slot() {
            return exports.internalHandler.get(this, 'slot', false);
        }
        set slot(value) {
            exports.internalHandler.set(this, 'slot', value);
        }
        get tagName() {
            return exports.internalHandler.get(this, 'tagName', false);
        }
        // methods
        attachShadow(init) {
            return exports.internalHandler.run(this, 'attachShadow', [init]);
        }
        closest(selectors) {
            return exports.internalHandler.run(this, 'closest', [selectors]);
        }
        getAttribute(qualifiedName) {
            return exports.internalHandler.run(this, 'getAttribute', [qualifiedName]);
        }
        getAttributeNS(namespace, localName) {
            return exports.internalHandler.run(this, 'getAttributeNS', [namespace, localName]);
        }
        getAttributeNames() {
            return exports.internalHandler.run(this, 'getAttributeNames', []);
        }
        getAttributeNode(qualifiedName) {
            return exports.internalHandler.run(this, 'getAttributeNode', [qualifiedName]);
        }
        getAttributeNodeNS(namespace, localName) {
            return exports.internalHandler.run(this, 'getAttributeNodeNS', [namespace, localName]);
        }
        getBoundingClientRect() {
            return exports.internalHandler.run(this, 'getBoundingClientRect', []);
        }
        getClientRects() {
            return exports.internalHandler.run(this, 'getClientRects', []);
        }
        getElementsByClassName(classNames) {
            return exports.internalHandler.run(this, 'getElementsByClassName', [classNames]);
        }
        getElementsByTagName(qualifiedName) {
            return exports.internalHandler.run(this, 'getElementsByTagName', [qualifiedName]);
        }
        getElementsByTagNameNS(namespace, localName) {
            return exports.internalHandler.run(this, 'getElementsByTagNameNS', [namespace, localName]);
        }
        hasAttribute(qualifiedName) {
            return exports.internalHandler.run(this, 'hasAttribute', [qualifiedName]);
        }
        hasAttributeNS(namespace, localName) {
            return exports.internalHandler.run(this, 'hasAttributeNS', [namespace, localName]);
        }
        hasAttributes() {
            return exports.internalHandler.run(this, 'hasAttributes', []);
        }
        insertAdjacentElement(where, element) {
            return exports.internalHandler.run(this, 'insertAdjacentElement', [where, element]);
        }
        insertAdjacentHTML(position, text) {
            exports.internalHandler.run(this, 'insertAdjacentHTML', [position, text]);
        }
        insertAdjacentText(where, data) {
            exports.internalHandler.run(this, 'insertAdjacentText', [where, data]);
        }
        matches(selectors) {
            return exports.internalHandler.run(this, 'matches', [selectors]);
        }
        removeAttribute(qualifiedName) {
            exports.internalHandler.run(this, 'removeAttribute', [qualifiedName]);
        }
        removeAttributeNS(namespace, localName) {
            exports.internalHandler.run(this, 'removeAttributeNS', [namespace, localName]);
        }
        removeAttributeNode(attr) {
            return exports.internalHandler.run(this, 'removeAttributeNode', [attr]);
        }
        setAttribute(qualifiedName, value) {
            exports.internalHandler.run(this, 'setAttribute', [qualifiedName, value]);
        }
        setAttributeNS(namespace, qualifiedName, value) {
            exports.internalHandler.run(this, 'setAttributeNS', [namespace, qualifiedName, value]);
        }
        setAttributeNode(attr) {
            return exports.internalHandler.run(this, 'setAttributeNode', [attr]);
        }
        setAttributeNodeNS(attr) {
            return exports.internalHandler.run(this, 'setAttributeNodeNS', [attr]);
        }
        toggleAttribute(qualifiedName, force) {
            return exports.internalHandler.run(this, 'toggleAttribute', [qualifiedName, force]);
        }
        webkitMatchesSelector(selectors) {
            return exports.internalHandler.run(this, 'webkitMatchesSelector', [selectors]);
        }
    };
}
exports.ElementGenerator = ElementGenerator;
// tslint:disable-next-line:variable-name
exports.ElementPropertyKeys = [...Node_1.NodePropertyKeys, ...ChildNode_1.ChildNodePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys, ...Slotable_1.SlotablePropertyKeys, 'attributes', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'id', 'innerHTML', 'localName', 'namespaceURI', 'outerHTML', 'prefix', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot', 'slot', 'tagName'];
// tslint:disable-next-line:variable-name
exports.ElementConstantKeys = [...Node_1.NodeConstantKeys, ...ChildNode_1.ChildNodeConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys, ...Slotable_1.SlotableConstantKeys];
//# sourceMappingURL=Element.js.map