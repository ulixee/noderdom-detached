import InternalHandler from '../InternalHandler';
import { INode, INodeList } from '../interfaces';
export declare const getState: (instance: INodeList<INode>) => any, setState: <P = INodeListProperties>(instance: INodeList<INode>, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: INodeList<INode>, properties: IHiddenProperties) => void, setReadonlyOfNodeList: (instance: INodeList<INode>, properties: INodeListReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<INodeList<INode>>;
export default class NodeList<T extends INode = INode> implements INodeList<T> {
    constructor();
    get length(): number;
    item(index: number): T | null;
    forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void;
    entries(): IterableIterator<[number, INode]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<INode>;
    [Symbol.iterator](): IterableIterator<INode>;
    [index: number]: T;
}
export interface INodeListProperties {
    length?: number;
}
export interface INodeListReadonlyProperties {
    length?: number;
}
export declare const NodeListPropertyKeys: string[];
export declare const NodeListConstantKeys: never[];
