"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:ban-types
function ClassMixer(klass, mixins) {
    const isClassable = (element) => typeof element === 'function';
    if (!Array.isArray(mixins)) {
        throw new Error('classes should be put in an array');
    }
    if (!mixins || mixins.length === 0 || !mixins.every(isClassable)) {
        throw new Error('No valid mixins were found');
    }
    return applyMixins(cloneClass(klass), mixins);
}
exports.default = ClassMixer;
function cloneClass(klass) {
    return class extends klass {
    };
}
function applyMixins(klass, mixins) {
    mixins.forEach(mixin => {
        Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
            if (name === 'constructor')
                return;
            if (Object.getOwnPropertyDescriptor(klass.prototype, name)) {
                throw new Error(`${mixin.name}.${name} conflicts with same property on ${klass.name}`);
            }
            Object.defineProperty(klass.prototype, name, Object.getOwnPropertyDescriptor(mixin.prototype, name));
        });
    });
    return klass;
}
//# sourceMappingURL=ClassMixer.js.map