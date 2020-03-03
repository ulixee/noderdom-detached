import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import { IHTMLCollectionBase, IElement, IHTMLCollection } from '../interfaces';
import { IHTMLCollectionBaseProperties, IHTMLCollectionBaseReadonlyProperties } from './HTMLCollectionBase';
export declare const getState: (instance: IHTMLCollection<IElement>) => any, setState: <P = IHTMLCollectionProperties>(instance: IHTMLCollection<IElement>, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IHTMLCollection<IElement>, properties: IHiddenProperties) => void, setReadonlyOfHTMLCollection: (instance: IHTMLCollection<IElement>, properties: IHTMLCollectionReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IHTMLCollection<IElement>>;
export declare function HTMLCollectionGenerator(HTMLCollectionBase: Constructable<IHTMLCollectionBase>): {
    new <T extends IElement = IElement>(): {
        [index: number]: IElement;
        namedItem(name: string): T | null;
        readonly length: number;
        item(index: number): IElement | null;
        [Symbol.iterator](): IterableIterator<IElement>;
    };
};
export interface IHTMLCollectionProperties extends IHTMLCollectionBaseProperties {
}
export interface IHTMLCollectionReadonlyProperties extends IHTMLCollectionBaseReadonlyProperties {
}
export declare const HTMLCollectionPropertyKeys: string[];
export declare const HTMLCollectionConstantKeys: never[];
