import InternalHandler from '../InternalHandler';
import { IElement, INonDocumentTypeChildNode } from '../interfaces';
export declare const getState: (instance: INonDocumentTypeChildNode) => any, setState: <P = INonDocumentTypeChildNodeProperties>(instance: INonDocumentTypeChildNode, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: INonDocumentTypeChildNode, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<INonDocumentTypeChildNode>;
export default class NonDocumentTypeChildNode implements INonDocumentTypeChildNode {
    get nextElementSibling(): IElement | null;
    get previousElementSibling(): IElement | null;
}
export interface INonDocumentTypeChildNodeProperties {
    nextElementSibling?: IElement | null;
    previousElementSibling?: IElement | null;
}
export interface INonDocumentTypeChildNodeReadonlyProperties {
    nextElementSibling?: IElement | null;
    previousElementSibling?: IElement | null;
}
export declare const NonDocumentTypeChildNodePropertyKeys: string[];
export declare const NonDocumentTypeChildNodeConstantKeys: never[];
