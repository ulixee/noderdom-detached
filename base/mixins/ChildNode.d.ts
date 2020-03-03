import InternalHandler from '../InternalHandler';
import { INode, IChildNode } from '../interfaces';
export declare const getState: (instance: IChildNode) => any, setState: <P = IChildNodeProperties>(instance: IChildNode, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IChildNode, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<IChildNode>;
export default class ChildNode implements IChildNode {
    after(...nodes: (INode | string)[]): void;
    before(...nodes: (INode | string)[]): void;
    remove(): void;
    replaceWith(...nodes: (INode | string)[]): void;
}
export interface IChildNodeProperties {
}
export interface IChildNodeReadonlyProperties {
}
export declare const ChildNodePropertyKeys: never[];
export declare const ChildNodeConstantKeys: never[];
