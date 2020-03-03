import InternalHandler from '../InternalHandler';
import { IElement, IHTMLCollectionBase } from '../interfaces';
export declare const getState: (instance: IHTMLCollectionBase) => any, setState: <P = IHTMLCollectionBaseProperties>(instance: IHTMLCollectionBase, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IHTMLCollectionBase, properties: IHiddenProperties) => void, setReadonlyOfHTMLCollectionBase: (instance: IHTMLCollectionBase, properties: IHTMLCollectionBaseReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IHTMLCollectionBase>;
export default class HTMLCollectionBase implements IHTMLCollectionBase {
    constructor();
    get length(): number;
    item(index: number): IElement | null;
    [Symbol.iterator](): IterableIterator<IElement>;
    [index: number]: IElement;
}
export interface IHTMLCollectionBaseProperties {
    length?: number;
}
export interface IHTMLCollectionBaseReadonlyProperties {
    length?: number;
}
export declare const HTMLCollectionBasePropertyKeys: string[];
export declare const HTMLCollectionBaseConstantKeys: never[];
