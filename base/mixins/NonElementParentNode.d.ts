import InternalHandler from '../InternalHandler';
import { IElement, INonElementParentNode } from '../interfaces';
export declare const getState: (instance: INonElementParentNode) => any, setState: <P = INonElementParentNodeProperties>(instance: INonElementParentNode, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: INonElementParentNode, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<INonElementParentNode>;
export default class NonElementParentNode implements INonElementParentNode {
    getElementById(elementId: string): IElement | null;
}
export interface INonElementParentNodeProperties {
}
export interface INonElementParentNodeReadonlyProperties {
}
export declare const NonElementParentNodePropertyKeys: never[];
export declare const NonElementParentNodeConstantKeys: never[];
