"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotImplementedError extends Error {
}
exports.NotImplementedError = NotImplementedError;
class InternalHandler {
    constructor(className, getState, setState) {
        this.propertiesToHandle = new Set();
        this.propertiesToRemove = new Set();
        this.className = className;
        this.getState = getState;
        this.setState = setState;
    }
    construct(_instance, _args) {
        throw new NotImplementedError(`${this.className} constructor not implemented`);
    }
    get(instance, name, hasNullDefault = false) {
        if (this.propertiesToHandle.has(name) && !this.propertiesToRemove.has(name)) {
            const value = this.getState(instance)[name];
            return hasNullDefault && value === undefined ? null : value;
        }
        throw new NotImplementedError(`${this.className}.${name} getter not implemented`);
    }
    set(instance, name, value) {
        if (this.propertiesToHandle.has(name) && !this.propertiesToRemove.has(name)) {
            this.setState(instance, { [name]: value });
            return;
        }
        throw new NotImplementedError(`${this.className}.${name} setter not implemented`);
    }
    run(_instance, name, _args) {
        throw new NotImplementedError(`${this.className}.${name} method not implemented`);
    }
    handle(...properties) {
        properties.forEach(property => this.propertiesToHandle.add(property));
    }
    remove(...properties) {
        properties.forEach(property => this.propertiesToRemove.add(property));
    }
    isHandled(key) {
        return this.propertiesToHandle.has(key);
    }
}
exports.default = InternalHandler;
function initializeConstantsAndPrototypes(Klass, // tslint:disable-line:variable-name
instance, internalHandler, constantKeys, propertyKeys) {
    const prototype = Object.getPrototypeOf(instance);
    constantKeys.forEach(key => {
        Object.defineProperty(instance, key, { enumerable: false });
    });
    propertyKeys.forEach(key => {
        const originalPropertyDescriptor = Object.getOwnPropertyDescriptor(Klass.prototype, key);
        const redefinedPropertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
        const isHandled = internalHandler.isHandled(key) || !!redefinedPropertyDescriptor;
        if (!isHandled)
            return;
        const propertyDescriptor = redefinedPropertyDescriptor || originalPropertyDescriptor || {};
        propertyDescriptor.enumerable = true;
        Object.defineProperty(instance, key, propertyDescriptor);
    });
}
exports.initializeConstantsAndPrototypes = initializeConstantsAndPrototypes;
//# sourceMappingURL=InternalHandler.js.map