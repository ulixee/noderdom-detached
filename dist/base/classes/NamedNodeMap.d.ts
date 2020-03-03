import InternalHandler from '../InternalHandler';
import { IAttr, INamedNodeMap } from '../interfaces';
export declare const getState: (instance: INamedNodeMap) => any, setState: <P = INamedNodeMapProperties>(instance: INamedNodeMap, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: INamedNodeMap, properties: IHiddenProperties) => void, setReadonlyOfNamedNodeMap: (instance: INamedNodeMap, properties: INamedNodeMapReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<INamedNodeMap>;
export default class NamedNodeMap implements INamedNodeMap {
    constructor();
    get length(): number;
    getNamedItem(qualifiedName: string): IAttr | null;
    getNamedItemNS(namespace: string | null, localName: string): IAttr | null;
    item(index: number): IAttr | null;
    removeNamedItem(qualifiedName: string): IAttr;
    removeNamedItemNS(namespace: string | null, localName: string): IAttr;
    setNamedItem(attr: IAttr): IAttr | null;
    setNamedItemNS(attr: IAttr): IAttr | null;
    [Symbol.iterator](): IterableIterator<IAttr>;
    [index: number]: IAttr;
}
export interface INamedNodeMapProperties {
    length?: number;
}
export interface INamedNodeMapReadonlyProperties {
    length?: number;
}
export declare const NamedNodeMapPropertyKeys: string[];
export declare const NamedNodeMapConstantKeys: never[];
