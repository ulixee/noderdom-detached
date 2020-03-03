"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importStar(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const EventTarget_1 = require("./EventTarget");
_a = StateMachine_1.default('Node'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfNode = _a.setReadonlyOfNode;
exports.internalHandler = new InternalHandler_1.default('Node', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function NodeGenerator(EventTarget) {
    var _a;
    return _a = class Node extends EventTarget {
            constructor() {
                super();
                this.ATTRIBUTE_NODE = 2;
                this.CDATA_SECTION_NODE = 4;
                this.COMMENT_NODE = 8;
                this.DOCUMENT_FRAGMENT_NODE = 11;
                this.DOCUMENT_NODE = 9;
                this.DOCUMENT_POSITION_CONTAINED_BY = 0x10;
                this.DOCUMENT_POSITION_CONTAINS = 0x08;
                this.DOCUMENT_POSITION_DISCONNECTED = 0x01;
                this.DOCUMENT_POSITION_FOLLOWING = 0x04;
                this.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
                this.DOCUMENT_POSITION_PRECEDING = 0x02;
                this.DOCUMENT_TYPE_NODE = 10;
                this.ELEMENT_NODE = 1;
                this.ENTITY_NODE = 6;
                this.ENTITY_REFERENCE_NODE = 5;
                this.NOTATION_NODE = 12;
                this.PROCESSING_INSTRUCTION_NODE = 7;
                this.TEXT_NODE = 3;
                InternalHandler_1.initializeConstantsAndPrototypes(Node, this, exports.internalHandler, exports.NodeConstantKeys, exports.NodePropertyKeys);
            }
            // properties
            get baseURI() {
                return exports.internalHandler.get(this, 'baseURI', false);
            }
            get childNodes() {
                return exports.internalHandler.get(this, 'childNodes', false);
            }
            get firstChild() {
                return exports.internalHandler.get(this, 'firstChild', true);
            }
            get isConnected() {
                return exports.internalHandler.get(this, 'isConnected', false);
            }
            get lastChild() {
                return exports.internalHandler.get(this, 'lastChild', true);
            }
            get nextSibling() {
                return exports.internalHandler.get(this, 'nextSibling', true);
            }
            get nodeName() {
                return exports.internalHandler.get(this, 'nodeName', false);
            }
            get nodeType() {
                return exports.internalHandler.get(this, 'nodeType', false);
            }
            get nodeValue() {
                return exports.internalHandler.get(this, 'nodeValue', true);
            }
            set nodeValue(value) {
                exports.internalHandler.set(this, 'nodeValue', value);
            }
            get ownerDocument() {
                return exports.internalHandler.get(this, 'ownerDocument', true);
            }
            get parentElement() {
                return exports.internalHandler.get(this, 'parentElement', true);
            }
            get parentNode() {
                return exports.internalHandler.get(this, 'parentNode', true);
            }
            get previousSibling() {
                return exports.internalHandler.get(this, 'previousSibling', true);
            }
            get textContent() {
                return exports.internalHandler.get(this, 'textContent', true);
            }
            set textContent(value) {
                exports.internalHandler.set(this, 'textContent', value);
            }
            // methods
            appendChild(node) {
                return exports.internalHandler.run(this, 'appendChild', [node]);
            }
            cloneNode(deep) {
                return exports.internalHandler.run(this, 'cloneNode', [deep]);
            }
            compareDocumentPosition(other) {
                return exports.internalHandler.run(this, 'compareDocumentPosition', [other]);
            }
            contains(other) {
                return exports.internalHandler.run(this, 'contains', [other]);
            }
            getRootNode(options) {
                return exports.internalHandler.run(this, 'getRootNode', [options]);
            }
            hasChildNodes() {
                return exports.internalHandler.run(this, 'hasChildNodes', []);
            }
            insertBefore(node, child) {
                return exports.internalHandler.run(this, 'insertBefore', [node, child]);
            }
            isDefaultNamespace(namespace) {
                return exports.internalHandler.run(this, 'isDefaultNamespace', [namespace]);
            }
            isEqualNode(otherNode) {
                return exports.internalHandler.run(this, 'isEqualNode', [otherNode]);
            }
            isSameNode(otherNode) {
                return exports.internalHandler.run(this, 'isSameNode', [otherNode]);
            }
            lookupNamespaceURI(prefix) {
                return exports.internalHandler.run(this, 'lookupNamespaceURI', [prefix]);
            }
            lookupPrefix(namespace) {
                return exports.internalHandler.run(this, 'lookupPrefix', [namespace]);
            }
            normalize() {
                exports.internalHandler.run(this, 'normalize', []);
            }
            removeChild(child) {
                return exports.internalHandler.run(this, 'removeChild', [child]);
            }
            replaceChild(node, child) {
                return exports.internalHandler.run(this, 'replaceChild', [node, child]);
            }
        },
        _a.ATTRIBUTE_NODE = 2,
        _a.CDATA_SECTION_NODE = 4,
        _a.COMMENT_NODE = 8,
        _a.DOCUMENT_FRAGMENT_NODE = 11,
        _a.DOCUMENT_NODE = 9,
        _a.DOCUMENT_POSITION_CONTAINED_BY = 0x10,
        _a.DOCUMENT_POSITION_CONTAINS = 0x08,
        _a.DOCUMENT_POSITION_DISCONNECTED = 0x01,
        _a.DOCUMENT_POSITION_FOLLOWING = 0x04,
        _a.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20,
        _a.DOCUMENT_POSITION_PRECEDING = 0x02,
        _a.DOCUMENT_TYPE_NODE = 10,
        _a.ELEMENT_NODE = 1,
        _a.ENTITY_NODE = 6,
        _a.ENTITY_REFERENCE_NODE = 5,
        _a.NOTATION_NODE = 12,
        _a.PROCESSING_INSTRUCTION_NODE = 7,
        _a.TEXT_NODE = 3,
        _a;
}
exports.NodeGenerator = NodeGenerator;
// tslint:disable-next-line:variable-name
exports.NodePropertyKeys = [...EventTarget_1.EventTargetPropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];
// tslint:disable-next-line:variable-name
exports.NodeConstantKeys = [...EventTarget_1.EventTargetConstantKeys, 'ELEMENT_NODE', 'ATTRIBUTE_NODE', 'TEXT_NODE', 'CDATA_SECTION_NODE', 'ENTITY_REFERENCE_NODE', 'ENTITY_NODE', 'PROCESSING_INSTRUCTION_NODE', 'COMMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_TYPE_NODE', 'DOCUMENT_FRAGMENT_NODE', 'NOTATION_NODE', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC'];
//# sourceMappingURL=Node.js.map