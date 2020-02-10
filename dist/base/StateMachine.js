"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _objects = new WeakMap();
function StateMachine(klass) {
    function setState(instance, properties) {
        const object = getState(instance);
        Object.entries(properties).forEach(([key, value]) => {
            object[key] = value;
        });
        _objects.set(instance, object);
    }
    function setHiddenState(instance, properties) {
        setState(instance, properties);
    }
    function getState(instance) {
        return _objects.get(instance) || {};
    }
    function setReadonlyOf(instance, properties) {
        setState(instance, properties);
    }
    return {
        getState,
        setState,
        setHiddenState,
        [`setReadonlyOf${klass}`]: setReadonlyOf,
    };
}
exports.default = StateMachine;
//# sourceMappingURL=StateMachine.js.map