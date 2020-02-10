import { IAttr, IElement, INamedNodeMap } from '../../base/interfaces';
import GeneratedNamedNodeMap, { INamedNodeMapProperties as IOriginalNamedNodeMapProperties, INamedNodeMapReadonlyProperties as IOriginalNamedNodeMapReadonlyProperties } from '../../base/classes/NamedNodeMap';
export default class NamedNodeMap extends GeneratedNamedNodeMap implements INamedNodeMap {
    private readonly proxy;
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
export interface INamedNodeMapProperties extends IOriginalNamedNodeMapProperties {
    ownerElement?: IElement;
}
export interface INamedNodeMapReadonlyProperties extends IOriginalNamedNodeMapReadonlyProperties {
    ownerElement?: IElement;
}
export declare const getState: (instance: INamedNodeMap) => any, setState: <P = INamedNodeMapProperties>(instance: INamedNodeMap, properties: P) => void, setHiddenState: <IHiddenProperties_1 extends {}>(instance: INamedNodeMap, properties: IHiddenProperties_1) => void, setReadonlyOfNamedNodeMap: (instance: INamedNodeMap, properties: INamedNodeMapReadonlyProperties) => void;
