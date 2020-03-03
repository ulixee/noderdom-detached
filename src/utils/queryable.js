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
Object.defineProperty(exports, "__esModule", { value: true });
const document_utils_1 = require("./document-utils");
const utils_1 = require("./utils");
const arrayish_1 = require("./arrayish");
const HTMLCollection_1 = __importStar(require("../api/HTMLCollection"));
const NodeType_1 = __importDefault(require("../constants/NodeType"));
// https://dom.spec.whatwg.org/#concept-getElementsByClassName
function getElementsByClassName(root, classNames) {
    const document = (root.nodeType === NodeType_1.default.DOCUMENT_NODE ? root : root.ownerDocument);
    const isQuirksMode = document.compatMode === 'BackCompat';
    const htmlCollection = new HTMLCollection_1.default();
    const classes = arrayish_1.stringToUniqueArray(classNames);
    if (classes.length === 0)
        return htmlCollection;
    document_utils_1._visitNode(root, node => {
        if (node.nodeType !== NodeType_1.default.ELEMENT_NODE || node === root)
            return;
        const { classList } = node;
        const classArray = Array.from(classList);
        if (isQuirksMode) {
            for (const className of classes) {
                if (!classArray.some(currentClassName => asciiCaseInsensitiveMatch(currentClassName, className))) {
                    return;
                }
            }
        }
        else {
            for (const className of classes) {
                if (!classList.contains(className)) {
                    return;
                }
            }
        }
        HTMLCollection_1.pushIntoHTMLCollection(htmlCollection, node);
    });
    return htmlCollection;
}
exports.getElementsByClassName = getElementsByClassName;
function getElementsByTagName(root, qualifiedName) {
    qualifiedName = qualifiedName.toUpperCase();
    const htmlCollection = new HTMLCollection_1.default();
    document_utils_1._visitNode(root, node => {
        if (node === root)
            return;
        if (!utils_1.isElement(node))
            return;
        if (qualifiedName === '*' || node.tagName === qualifiedName) {
            HTMLCollection_1.pushIntoHTMLCollection(htmlCollection, node);
        }
    });
    return htmlCollection;
}
exports.getElementsByTagName = getElementsByTagName;
function getElementsByTagNameNS(root, namespaceURI, localName) {
    localName = localName.toLowerCase();
    const htmlCollection = new HTMLCollection_1.default();
    document_utils_1._visitNode(root, node => {
        if (node !== root &&
            utils_1.isElement(node) &&
            (namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
            (localName === '*' || node.localName === localName)) {
            HTMLCollection_1.pushIntoHTMLCollection(htmlCollection, node);
        }
    });
    return htmlCollection;
}
exports.getElementsByTagNameNS = getElementsByTagNameNS;
// https://infra.spec.whatwg.org/#ascii-case-insensitive
function asciiCaseInsensitiveMatch(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i += 1) {
        if ((a.charCodeAt(i) | 32) !== (b.charCodeAt(i) | 32)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=queryable.js.map