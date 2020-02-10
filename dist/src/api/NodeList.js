"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeList_1 = __importStar(require("../../base/classes/NodeList"));
const arrayish_1 = require("../utils/arrayish");
class NodeList extends NodeList_1.default {
    constructor() {
        super();
        Object.defineProperty(this, 'proxy', { enumerable: false, value: arrayish_1.createProxy(this) });
        NodeList_1.setHiddenState(this.proxy, { items: [], exposeItemsBy: ['index'] });
        return this.proxy;
    }
    get length() {
        const { items } = NodeList_1.getState(this.proxy);
        return items.length;
    }
    item(index) {
        const { items } = NodeList_1.getState(this.proxy);
        return items[index];
    }
    forEach(callbackfn, thisArg) {
        const { items } = NodeList_1.getState(this.proxy);
        items.forEach((value, key) => callbackfn(value, key, this), thisArg);
    }
    entries() {
        return arrayish_1.iterableIteratorForArray(() => {
            const { items } = NodeList_1.getState(this.proxy);
            return items.map((item, index) => [index, item]);
        });
    }
    keys() {
        return arrayish_1.iterableIteratorForArray(() => {
            const { items } = NodeList_1.getState(this.proxy);
            return items.map((_item, index) => index);
        });
    }
    values() {
        return arrayish_1.iterableIteratorForArray(() => {
            const { items } = NodeList_1.getState(this.proxy);
            return items.map((item) => item);
        });
    }
    [Symbol.iterator]() {
        return arrayish_1.iterableIteratorForArray(() => NodeList_1.getState(this.proxy).items);
    }
}
exports.default = NodeList;
// HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////
function pushIntoNodeList(nodeList, ...nodesToAdd) {
    arrayish_1.addToArrayish(nodeList, NodeList_1.getState(nodeList), nodesToAdd);
}
exports.pushIntoNodeList = pushIntoNodeList;
function spliceIntoNodeList(nodeList, i, ...nodesToAdd) {
    arrayish_1.addToArrayish(nodeList, NodeList_1.getState(nodeList), nodesToAdd, i);
}
exports.spliceIntoNodeList = spliceIntoNodeList;
function removeFromNodeList(nodeList, child) {
    arrayish_1.removeFromArrayish(nodeList, NodeList_1.getState(nodeList), child);
}
exports.removeFromNodeList = removeFromNodeList;
function indexOfNodeListItem(nodeList, node) {
    const { items } = NodeList_1.getState(nodeList);
    return items.indexOf(node);
}
exports.indexOfNodeListItem = indexOfNodeListItem;
//# sourceMappingURL=NodeList.js.map