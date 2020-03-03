import GeneratedDOMTokenList from '../../base/classes/DOMTokenList';
import { IDOMTokenList } from '../../base/interfaces';
export default class DOMTokenList extends GeneratedDOMTokenList implements IDOMTokenList {
    private readonly proxy;
    constructor();
    get length(): number;
    get value(): string;
    set value(value: string);
    add(...tokens: string[]): void;
    contains(token: string): boolean;
    item(index: number): string | null;
    remove(...tokens: string[]): void;
    replace(token: string, newToken: string): boolean;
    supports(_token: string): boolean;
    toggle(token: string, force?: boolean): boolean;
    toString(): string;
    forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void;
    entries(): IterableIterator<[number, string]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<string>;
    [index: number]: string;
}
