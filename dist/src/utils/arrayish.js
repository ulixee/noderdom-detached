"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToUniqueArray(input) {
    const tokens = new Set();
    for (const token of input.split(/[\t\n\f\r ]+/)) {
        if (token) {
            tokens.add(token);
        }
    }
    return Array.from(tokens);
}
exports.stringToUniqueArray = stringToUniqueArray;
function iterableIteratorForArray(getArray) {
    let index = 0;
    const iterator = {
        next: () => {
            const array = getArray();
            const item = array[index];
            index += 1;
            return { value: item, done: index > array.length };
        },
        [Symbol.iterator]() {
            return iterator;
        },
    };
    return iterator;
}
exports.iterableIteratorForArray = iterableIteratorForArray;
function createProxy(self) {
    return new Proxy(self, {
        get(_, prop) {
            if (prop === 'proxy')
                return undefined;
            if (prop === '_internalInstance')
                return self;
            const propIsNumber = typeof prop === 'number' || (typeof prop === 'string' && !isNaN(prop));
            if (propIsNumber) {
                return self.item.call(self, Number(prop));
            }
            const value = self[prop];
            if (typeof value === 'function') {
                return value.bind(self);
            }
            if (value !== undefined) {
                return value;
            }
            return self.namedItem ? self.namedItem.call(self, prop) : undefined;
        },
    });
}
exports.createProxy = createProxy;
function addToArrayish(arrayish, state, itemsToAdd, i) {
    const { itemsByName, items, exposeItemsBy } = state;
    const itemsAreObjects = itemsToAdd.every(i => typeof i === 'object');
    items.splice(i === undefined ? items.length : i, 0, ...itemsToAdd);
    for (const item of itemsToAdd) {
        const indexOfItem = items.indexOf(item);
        const name = itemsAreObjects ? item.name : item;
        if (name && itemsByName) {
            itemsByName[name] = item;
            if (exposeItemsBy.includes('name')) {
                createAttrProperty(arrayish, name);
            }
        }
        createAttrProperty(arrayish, indexOfItem);
    }
}
exports.addToArrayish = addToArrayish;
function replaceInArrayish(arrayish, state, newItem, oldItem) {
    const { itemsByName, items, exposeItemsBy } = state;
    const itemIsObject = typeof newItem === 'object' && typeof oldItem === 'object';
    const indexOfOldItem = items.indexOf(oldItem);
    if (indexOfOldItem < 0)
        return false;
    const nameOfOldItem = itemIsObject ? oldItem.name : oldItem;
    if (nameOfOldItem && itemsByName)
        delete itemsByName[nameOfOldItem];
    items[indexOfOldItem] = newItem;
    const nameOfNewItem = itemIsObject ? newItem.name : newItem;
    if (nameOfNewItem && itemsByName)
        itemsByName[nameOfNewItem] = newItem;
    if (exposeItemsBy.includes('name') && nameOfOldItem !== nameOfNewItem) {
        removeAttrProperty(arrayish, nameOfOldItem);
        createAttrProperty(arrayish, nameOfNewItem);
    }
    return true;
}
exports.replaceInArrayish = replaceInArrayish;
function removeFromArrayish(arrayish, state, item) {
    const { items, itemsByName, exposeItemsBy } = state;
    const index = items.indexOf(item);
    const itemIsObject = typeof item === 'object';
    const name = itemIsObject ? item.name : item;
    items.splice(index, 1);
    if (name && itemsByName) {
        delete itemsByName[name];
        if (exposeItemsBy.includes('name')) {
            removeAttrProperty(arrayish, name);
        }
    }
    const indexOfItem = items.indexOf(item);
    if (indexOfItem >= 0) {
        items.splice(indexOfItem, 1);
        for (let i = indexOfItem; i < items.length; i += 1) {
            createAttrProperty(arrayish, i);
        }
        removeAttrProperty(arrayish, items.length);
    }
}
exports.removeFromArrayish = removeFromArrayish;
///////
function createAttrProperty(arrayish, key) {
    const internalInstance = arrayish._internalInstance;
    if (typeof key === 'number' && key < 0) {
        console.log(new Error('key is less than 0'));
    }
    Object.defineProperty(internalInstance, key, {
        get: () => arrayish.item.call(internalInstance, key),
        enumerable: true,
        configurable: true,
    });
}
function removeAttrProperty(arrayish, key) {
    const internalInstance = arrayish._internalInstance;
    delete internalInstance[key];
}
//# sourceMappingURL=arrayish.js.map