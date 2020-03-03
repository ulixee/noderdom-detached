"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLCollection_1 = require("../../base/classes/HTMLCollection");
const HTMLCollectionBase_1 = __importDefault(require("../../base/classes/HTMLCollectionBase"));
const arrayish_1 = require("../utils/arrayish");
// tslint:disable-next-line:variable-name
const GeneratedHTMLCollection = HTMLCollection_1.HTMLCollectionGenerator(HTMLCollectionBase_1.default);
class HTMLCollection extends GeneratedHTMLCollection {
    constructor() {
        super();
        Object.defineProperty(this, 'proxy', { enumerable: false, value: arrayish_1.createProxy(this) });
        HTMLCollection_1.setHiddenState(this.proxy, { items: [], exposeItemsBy: ['index', 'name'] });
        return this.proxy;
    }
    get length() {
        const { items } = HTMLCollection_1.getState(this.proxy);
        return items.length;
    }
    item(index) {
        const { items } = HTMLCollection_1.getState(this.proxy);
        return items[index];
    }
    namedItem(name) {
        let itemWithName;
        const { items } = HTMLCollection_1.getState(this.proxy);
        for (const item of items) {
            if (item.id === name) {
                return item;
            }
            if (item.name === name) {
                itemWithName = item;
            }
        }
        return itemWithName ? itemWithName : null;
    }
    [Symbol.iterator]() {
        return arrayish_1.iterableIteratorForArray(() => HTMLCollection_1.getState(this.proxy).items);
    }
}
exports.default = HTMLCollection;
// HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////
function pushIntoHTMLCollection(htmlCollection, ...elementsToAdd) {
    arrayish_1.addToArrayish(htmlCollection, HTMLCollection_1.getState(htmlCollection), elementsToAdd);
}
exports.pushIntoHTMLCollection = pushIntoHTMLCollection;
function removeFromHTMLCollection(htmlCollection, child) {
    arrayish_1.removeFromArrayish(htmlCollection, HTMLCollection_1.getState(htmlCollection), child);
}
exports.removeFromHTMLCollection = removeFromHTMLCollection;
//# sourceMappingURL=HTMLCollection.js.map