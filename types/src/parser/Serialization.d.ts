import { IDocument, INode, INodeList } from '../../base/interfaces';
interface IOptions {
    requireWellFormed: boolean;
    serializeFullNode?: boolean;
}
interface IHasChildNodes {
    childNodes: INode[] | INodeList;
}
export declare function fragmentSerialization(document: IDocument, node: IHasChildNodes, options: IOptions): string;
export {};
