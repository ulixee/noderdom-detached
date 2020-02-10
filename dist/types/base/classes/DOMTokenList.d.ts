import InternalHandler from '../InternalHandler';
import { IDOMTokenList } from '../interfaces';
export declare const getState: (instance: IDOMTokenList) => any, setState: <P = IDOMTokenListProperties>(instance: IDOMTokenList, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IDOMTokenList, properties: IHiddenProperties) => void, setReadonlyOfDOMTokenList: (instance: IDOMTokenList, properties: IDOMTokenListReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IDOMTokenList>;
export default class DOMTokenList implements IDOMTokenList {
    constructor();
    get length(): number;
    get value(): string;
    set value(value: string);
    add(...tokens: string[]): void;
    contains(token: string): boolean;
    item(index: number): string | null;
    remove(...tokens: string[]): void;
    replace(token: string, newToken: string): boolean;
    supports(token: string): boolean;
    toggle(token: string, force?: boolean): boolean;
    toString(): string;
    forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void;
    entries(): IterableIterator<[number, string]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<string>;
    [index: number]: string;
}
export interface IDOMTokenListProperties {
    length?: number;
    value?: string;
}
export interface IDOMTokenListReadonlyProperties {
    length?: number;
}
export declare const DOMTokenListPropertyKeys: string[];
export declare const DOMTokenListConstantKeys: never[];
