import { IElement, IHTMLCollection } from '../../base/interfaces';
declare const GeneratedHTMLCollection: {
    new <T extends IElement = IElement>(): {
        [index: number]: IElement;
        namedItem(name: string): T | null;
        readonly length: number;
        item(index: number): IElement | null;
        [Symbol.iterator](): IterableIterator<IElement>;
    };
};
export default class HTMLCollection<T extends IElement = IElement> extends GeneratedHTMLCollection<T> implements IHTMLCollection<T> {
    private readonly proxy;
    constructor();
    get length(): number;
    item(index: number): T | null;
    namedItem(name: string): T | null;
    [Symbol.iterator](): IterableIterator<T>;
    [index: number]: IElement;
    [index: string]: IElement | any;
}
export declare function pushIntoHTMLCollection(htmlCollection: IHTMLCollection, ...elementsToAdd: IElement[]): void;
export declare function removeFromHTMLCollection(htmlCollection: IHTMLCollection, child: IElement): void;
export {};
