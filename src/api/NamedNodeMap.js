"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Attr_1 = require("../../base/classes/Attr");
const NamedNodeMap_1 = __importDefault(require("../../base/classes/NamedNodeMap"));
const DOMException_1 = __importDefault(require("./DOMException"));
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const arrayish_1 = require("../utils/arrayish");
class NamedNodeMap extends NamedNodeMap_1.default {
    constructor() {
        super();
        Object.defineProperty(this, 'proxy', { enumerable: false, value: arrayish_1.createProxy(this) });
        exports.setHiddenState(this.proxy, { itemsByName: {}, items: [], exposeItemsBy: ['index'] });
        return this.proxy;
    }
    get length() {
        return exports.getState(this.proxy).items.length;
    }
    getNamedItem(qualifiedName) {
        const { itemsByName } = exports.getState(this.proxy);
        return itemsByName[qualifiedName] === undefined ? null : itemsByName[qualifiedName];
    }
    getNamedItemNS(namespace, localName) {
        const { items } = exports.getState(this.proxy);
        for (const attr of items) {
            if (attr.localName === localName && attr.namespaceURI === namespace) {
                return attr;
            }
        }
        return null;
    }
    item(index) {
        return exports.getState(this.proxy).items[index] || null;
    }
    removeNamedItem(qualifiedName) {
        const attr = this.getNamedItem(qualifiedName);
        if (attr === null) {
            throw new DOMException_1.default(undefined, 'NotFoundError');
        }
        removeNamedNode(this.proxy, attr);
        return attr;
    }
    removeNamedItemNS(namespace, localName) {
        const attr = this.getNamedItemNS(namespace, localName);
        if (attr === null) {
            throw new DOMException_1.default(undefined, 'NotFoundError');
        }
        removeNamedNode(this.proxy, attr);
        return attr;
    }
    setNamedItem(attr) {
        const el = attr.ownerElement;
        const ownerElement = exports.getState(this.proxy).ownerElement;
        if (el && el !== ownerElement) {
            throw new DOMException_1.default(undefined, 'InuseAttributeError');
        }
        const oldAttr = this.getNamedItem(attr.nodeName);
        addNamedNode(this.proxy, attr, oldAttr);
        return oldAttr;
    }
    setNamedItemNS(attr) {
        const el = attr.ownerElement;
        const ownerElement = exports.getState(this.proxy).ownerElement;
        let oldAttr;
        if (el && el !== ownerElement) {
            throw new DOMException_1.default(undefined, 'InuseAttributeError');
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        addNamedNode(this.proxy, attr, oldAttr);
        return oldAttr;
    }
    [Symbol.iterator]() {
        return arrayish_1.iterableIteratorForArray(() => exports.getState(this.proxy).items);
    }
}
exports.default = NamedNodeMap;
_a = StateMachine_1.default('NamedNodeMap'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfNamedNodeMap = _a.setReadonlyOfNamedNodeMap;
////////////////////////////////////////
function addNamedNode(namedNodeMap, newAttr, oldAttr) {
    const state = exports.getState(namedNodeMap);
    const ownerElement = state.ownerElement;
    if (oldAttr) {
        arrayish_1.replaceInArrayish(namedNodeMap, state, newAttr, oldAttr);
        Attr_1.setReadonlyOfAttr(oldAttr, { ownerElement: null });
    }
    else {
        arrayish_1.addToArrayish(namedNodeMap, state, [newAttr]);
    }
    if (ownerElement) {
        Attr_1.setReadonlyOfAttr(newAttr, { ownerElement });
    }
}
function removeNamedNode(namedNodeMap, attr) {
    const state = exports.getState(namedNodeMap);
    if (!state.itemsByName[attr.name]) {
        throw new DOMException_1.default(`${state.ownerElement.nodeName}@${attr}`, 'NotFoundError');
    }
    arrayish_1.removeFromArrayish(namedNodeMap, state, attr);
    Attr_1.setReadonlyOfAttr(attr, { ownerElement: null });
}
//# sourceMappingURL=NamedNodeMap.js.map