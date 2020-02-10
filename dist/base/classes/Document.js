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
const DocumentOrShadowRoot_1 = require("../mixins/DocumentOrShadowRoot");
const GlobalEventHandlers_1 = require("../mixins/GlobalEventHandlers");
const NonElementParentNode_1 = require("../mixins/NonElementParentNode");
const ParentNode_1 = require("../mixins/ParentNode");
_a = StateMachine_1.default('Document'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfDocument = _a.setReadonlyOfDocument;
exports.internalHandler = new InternalHandler_1.default('Document', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function DocumentGenerator(Node, DocumentOrShadowRoot, GlobalEventHandlers, NonElementParentNode, ParentNode) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(Node, [DocumentOrShadowRoot, GlobalEventHandlers, NonElementParentNode, ParentNode]);
    return class Document extends Parent {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(Document, this, exports.internalHandler, exports.DocumentConstantKeys, exports.DocumentPropertyKeys);
        }
        // properties
        get URL() {
            return exports.internalHandler.get(this, 'URL', false);
        }
        get anchors() {
            return exports.internalHandler.get(this, 'anchors', false);
        }
        get applets() {
            return exports.internalHandler.get(this, 'applets', false);
        }
        get body() {
            return exports.internalHandler.get(this, 'body', true);
        }
        set body(value) {
            exports.internalHandler.set(this, 'body', value);
        }
        get characterSet() {
            return exports.internalHandler.get(this, 'characterSet', false);
        }
        get charset() {
            return exports.internalHandler.get(this, 'charset', false);
        }
        get compatMode() {
            return exports.internalHandler.get(this, 'compatMode', false);
        }
        get contentType() {
            return exports.internalHandler.get(this, 'contentType', false);
        }
        get cookie() {
            return exports.internalHandler.get(this, 'cookie', false);
        }
        set cookie(value) {
            exports.internalHandler.set(this, 'cookie', value);
        }
        get currentScript() {
            return exports.internalHandler.get(this, 'currentScript', true);
        }
        get defaultView() {
            return exports.internalHandler.get(this, 'defaultView', true);
        }
        get dir() {
            return exports.internalHandler.get(this, 'dir', false);
        }
        set dir(value) {
            exports.internalHandler.set(this, 'dir', value);
        }
        get doctype() {
            return exports.internalHandler.get(this, 'doctype', true);
        }
        get documentElement() {
            return exports.internalHandler.get(this, 'documentElement', true);
        }
        get documentURI() {
            return exports.internalHandler.get(this, 'documentURI', false);
        }
        get embeds() {
            return exports.internalHandler.get(this, 'embeds', false);
        }
        get forms() {
            return exports.internalHandler.get(this, 'forms', false);
        }
        get head() {
            return exports.internalHandler.get(this, 'head', true);
        }
        get hidden() {
            return exports.internalHandler.get(this, 'hidden', false);
        }
        get images() {
            return exports.internalHandler.get(this, 'images', false);
        }
        get implementation() {
            return exports.internalHandler.get(this, 'implementation', false);
        }
        get inputEncoding() {
            return exports.internalHandler.get(this, 'inputEncoding', false);
        }
        get lastModified() {
            return exports.internalHandler.get(this, 'lastModified', false);
        }
        get links() {
            return exports.internalHandler.get(this, 'links', false);
        }
        get location() {
            return exports.internalHandler.get(this, 'location', true);
        }
        get onreadystatechange() {
            return exports.internalHandler.get(this, 'onreadystatechange', true);
        }
        set onreadystatechange(value) {
            exports.internalHandler.set(this, 'onreadystatechange', value);
        }
        get onvisibilitychange() {
            return exports.internalHandler.get(this, 'onvisibilitychange', true);
        }
        set onvisibilitychange(value) {
            exports.internalHandler.set(this, 'onvisibilitychange', value);
        }
        get plugins() {
            return exports.internalHandler.get(this, 'plugins', false);
        }
        get readyState() {
            return exports.internalHandler.get(this, 'readyState', false);
        }
        get referrer() {
            return exports.internalHandler.get(this, 'referrer', false);
        }
        get scripts() {
            return exports.internalHandler.get(this, 'scripts', false);
        }
        get title() {
            return exports.internalHandler.get(this, 'title', false);
        }
        set title(value) {
            exports.internalHandler.set(this, 'title', value);
        }
        get visibilityState() {
            return exports.internalHandler.get(this, 'visibilityState', false);
        }
        // methods
        adoptNode(node) {
            return exports.internalHandler.run(this, 'adoptNode', [node]);
        }
        captureEvents() {
            exports.internalHandler.run(this, 'captureEvents', []);
        }
        clear() {
            exports.internalHandler.run(this, 'clear', []);
        }
        close() {
            exports.internalHandler.run(this, 'close', []);
        }
        createAttribute(localName) {
            return exports.internalHandler.run(this, 'createAttribute', [localName]);
        }
        createAttributeNS(namespace, qualifiedName) {
            return exports.internalHandler.run(this, 'createAttributeNS', [namespace, qualifiedName]);
        }
        createCDATASection(data) {
            return exports.internalHandler.run(this, 'createCDATASection', [data]);
        }
        createComment(data) {
            return exports.internalHandler.run(this, 'createComment', [data]);
        }
        createDocumentFragment() {
            return exports.internalHandler.run(this, 'createDocumentFragment', []);
        }
        createElement(localName, options) {
            return exports.internalHandler.run(this, 'createElement', [localName, options]);
        }
        createElementNS(namespace, qualifiedName, options) {
            return exports.internalHandler.run(this, 'createElementNS', [namespace, qualifiedName, options]);
        }
        createEvent(eventInterface) {
            return exports.internalHandler.run(this, 'createEvent', [eventInterface]);
        }
        createNodeIterator(root, whatToShow, filter) {
            return exports.internalHandler.run(this, 'createNodeIterator', [root, whatToShow, filter]);
        }
        createProcessingInstruction(target, data) {
            return exports.internalHandler.run(this, 'createProcessingInstruction', [target, data]);
        }
        createRange() {
            return exports.internalHandler.run(this, 'createRange', []);
        }
        createTextNode(data) {
            return exports.internalHandler.run(this, 'createTextNode', [data]);
        }
        createTreeWalker(root, whatToShow, filter) {
            return exports.internalHandler.run(this, 'createTreeWalker', [root, whatToShow, filter]);
        }
        getElementsByClassName(classNames) {
            return exports.internalHandler.run(this, 'getElementsByClassName', [classNames]);
        }
        getElementsByName(elementName) {
            return exports.internalHandler.run(this, 'getElementsByName', [elementName]);
        }
        getElementsByTagName(qualifiedName) {
            return exports.internalHandler.run(this, 'getElementsByTagName', [qualifiedName]);
        }
        getElementsByTagNameNS(namespace, localName) {
            return exports.internalHandler.run(this, 'getElementsByTagNameNS', [namespace, localName]);
        }
        getSelection() {
            return exports.internalHandler.run(this, 'getSelection', []);
        }
        hasFocus() {
            return exports.internalHandler.run(this, 'hasFocus', []);
        }
        importNode(node, deep) {
            return exports.internalHandler.run(this, 'importNode', [node, deep]);
        }
        open(type, replace) {
            return exports.internalHandler.run(this, 'open', [type, replace]);
        }
        releaseEvents() {
            exports.internalHandler.run(this, 'releaseEvents', []);
        }
        write(...text) {
            exports.internalHandler.run(this, 'write', [text]);
        }
        writeln(...text) {
            exports.internalHandler.run(this, 'writeln', [text]);
        }
        addEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'addEventListener', [type, listener, options]);
        }
        removeEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'removeEventListener', [type, listener, options]);
        }
    };
}
exports.DocumentGenerator = DocumentGenerator;
// tslint:disable-next-line:variable-name
exports.DocumentPropertyKeys = [...Node_1.NodePropertyKeys, ...DocumentOrShadowRoot_1.DocumentOrShadowRootPropertyKeys, ...GlobalEventHandlers_1.GlobalEventHandlersPropertyKeys, ...NonElementParentNode_1.NonElementParentNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys, 'URL', 'anchors', 'applets', 'body', 'characterSet', 'charset', 'compatMode', 'contentType', 'cookie', 'currentScript', 'defaultView', 'dir', 'doctype', 'documentElement', 'documentURI', 'embeds', 'forms', 'head', 'hidden', 'images', 'implementation', 'inputEncoding', 'lastModified', 'links', 'location', 'onreadystatechange', 'onvisibilitychange', 'plugins', 'readyState', 'referrer', 'scripts', 'title', 'visibilityState'];
// tslint:disable-next-line:variable-name
exports.DocumentConstantKeys = [...Node_1.NodeConstantKeys, ...DocumentOrShadowRoot_1.DocumentOrShadowRootConstantKeys, ...GlobalEventHandlers_1.GlobalEventHandlersConstantKeys, ...NonElementParentNode_1.NonElementParentNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys];
//# sourceMappingURL=Document.js.map