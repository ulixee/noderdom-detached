/// <reference types="jest" />
import Constructable = jest.Constructable;
export declare class NotImplementedError extends Error {
}
export default class InternalHandler<TClass> {
    private readonly className;
    private readonly getState;
    private readonly setState;
    private readonly propertiesToHandle;
    private readonly propertiesToRemove;
    constructor(className: string, getState: any, setState: any);
    construct(_instance: TClass, _args: any[]): void;
    get<T>(instance: TClass, name: string, hasNullDefault?: boolean): T;
    set<T>(instance: TClass, name: string, value: T): void;
    run<T>(_instance: TClass, name: string, _args: any[]): T;
    handle(...properties: string[]): void;
    remove(...properties: string[]): void;
    isHandled(key: string): boolean;
}
export declare function initializeConstantsAndPrototypes<K>(Klass: Constructable, // tslint:disable-line:variable-name
instance: K, internalHandler: InternalHandler<K>, constantKeys: string[], propertyKeys: string[]): void;
