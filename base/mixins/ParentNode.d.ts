import InternalHandler from '../InternalHandler';
import { IHTMLCollection, IElement, INode, INodeList, IParentNode } from '../interfaces';
export declare const getState: (instance: IParentNode) => any, setState: <P = IParentNodeProperties>(instance: IParentNode, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IParentNode, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<IParentNode>;
export default class ParentNode implements IParentNode {
    get childElementCount(): number;
    get children(): IHTMLCollection;
    get firstElementChild(): IElement | null;
    get lastElementChild(): IElement | null;
    append(...nodes: (INode | string)[]): void;
    prepend(...nodes: (INode | string)[]): void;
    querySelector(selectors: string): IElement | null;
    querySelectorAll(selectors: string): INodeList;
}
export interface IParentNodeProperties {
    childElementCount?: number;
    children?: IHTMLCollection;
    firstElementChild?: IElement | null;
    lastElementChild?: IElement | null;
}
export interface IParentNodeReadonlyProperties {
    childElementCount?: number;
    children?: IHTMLCollection;
    firstElementChild?: IElement | null;
    lastElementChild?: IElement | null;
}
export declare const ParentNodePropertyKeys: string[];
export declare const ParentNodeConstantKeys: never[];
