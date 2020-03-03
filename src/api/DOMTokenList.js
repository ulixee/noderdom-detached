"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMTokenList_1 = __importStar(require("../../base/classes/DOMTokenList"));
const arrayish_1 = require("../utils/arrayish");
class DOMTokenList extends DOMTokenList_1.default {
    constructor() {
        super();
        Object.defineProperty(this, 'proxy', { enumerable: false, value: arrayish_1.createProxy(this) });
        DOMTokenList_1.setHiddenState(this.proxy, { items: [], itemsByName: {}, exposeItemsBy: ['index', 'name'] });
        return this.proxy;
    }
    get length() {
        return DOMTokenList_1.getState(this.proxy).items.length;
    }
    get value() {
        return DOMTokenList_1.getState(this.proxy).value || '';
    }
    set value(value) {
        const tokens = arrayish_1.stringToUniqueArray(value);
        // @ts-ignore
        const proxy = this._internalInstance ? this : this.proxy;
        DOMTokenList_1.setHiddenState(proxy, { items: [], itemsByName: {} });
        DOMTokenList_1.setState(proxy, { value });
        arrayish_1.addToArrayish(this, DOMTokenList_1.getState(proxy), tokens);
    }
    // methods
    add(...tokens) {
        arrayish_1.addToArrayish(this, DOMTokenList_1.getState(this.proxy), tokens);
    }
    contains(token) {
        return !!DOMTokenList_1.getState(this.proxy).itemsByName[token];
    }
    item(index) {
        return DOMTokenList_1.getState(this.proxy).items[index] || null;
    }
    remove(...tokens) {
        for (const token of tokens) {
            arrayish_1.removeFromArrayish(this, DOMTokenList_1.getState(this.proxy), token);
        }
    }
    replace(token, newToken) {
        return arrayish_1.replaceInArrayish(this, DOMTokenList_1.getState(this.proxy), newToken, token);
    }
    supports(_token) {
        return true;
    }
    toggle(token, force) {
        const alreadyExists = this.contains(token);
        if (alreadyExists && force !== true) {
            this.remove(token);
            return false;
        }
        if (alreadyExists && force !== false) {
            this.add(token);
            return true;
        }
        return alreadyExists;
    }
    toString() {
        return this.value;
    }
    forEach(callbackfn, thisArg) {
        const { items } = DOMTokenList_1.getState(this.proxy);
        items.forEach((value, key) => callbackfn(value, key, this), thisArg);
    }
    entries() {
        return arrayish_1.iterableIteratorForArray(() => {
            return DOMTokenList_1.getState(this.proxy).items.map((v, i) => [i, v]);
        });
    }
    keys() {
        return arrayish_1.iterableIteratorForArray(() => DOMTokenList_1.getState(this.proxy).items.map((_, i) => i));
    }
    values() {
        return arrayish_1.iterableIteratorForArray(() => DOMTokenList_1.getState(this.proxy).items.map((x) => x));
    }
    [Symbol.iterator]() {
        return arrayish_1.iterableIteratorForArray(() => DOMTokenList_1.getState(this.proxy).items);
    }
}
exports.default = DOMTokenList;
//# sourceMappingURL=DOMTokenList.js.map