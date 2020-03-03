import { INode, INodeList } from '../../base/interfaces';
import GeneratedNodeList from '../../base/classes/NodeList';
export default class NodeList<T extends INode = INode> extends GeneratedNodeList<T> implements INodeList<T> {
    private readonly proxy;
    constructor();
    get length(): number;
    item(index: number): T;
    forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void;
    entries(): IterableIterator<[number, T]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<T>;
    [Symbol.iterator](): IterableIterator<T>;
    [index: number]: T;
}
export declare function pushIntoNodeList<IItem extends INode = INode>(nodeList: INodeList, ...nodesToAdd: IItem[]): void;
export declare function spliceIntoNodeList<IItem extends INode = INode>(nodeList: INodeList, i: number, ...nodesToAdd: IItem[]): void;
export declare function removeFromNodeList<IItem extends INode = INode>(nodeList: INodeList, child: IItem): void;
export declare function indexOfNodeListItem<IItem extends INode = INode>(nodeList: INodeList, node: IItem): any;
