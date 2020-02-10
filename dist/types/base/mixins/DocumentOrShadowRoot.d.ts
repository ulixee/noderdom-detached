import InternalHandler from '../InternalHandler';
import { IElement, IDocumentOrShadowRoot } from '../interfaces';
export declare const getState: (instance: IDocumentOrShadowRoot) => any, setState: <P = IDocumentOrShadowRootProperties>(instance: IDocumentOrShadowRoot, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IDocumentOrShadowRoot, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<IDocumentOrShadowRoot>;
export default class DocumentOrShadowRoot implements IDocumentOrShadowRoot {
    get activeElement(): IElement | null;
}
export interface IDocumentOrShadowRootProperties {
    activeElement?: IElement | null;
}
export interface IDocumentOrShadowRootReadonlyProperties {
    activeElement?: IElement | null;
}
export declare const DocumentOrShadowRootPropertyKeys: string[];
export declare const DocumentOrShadowRootConstantKeys: never[];
