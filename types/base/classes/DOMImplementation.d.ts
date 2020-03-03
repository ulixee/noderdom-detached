import InternalHandler from '../InternalHandler';
import { IDocumentType, IXMLDocument, IDocument, IDOMImplementation } from '../interfaces';
export declare const getState: (instance: IDOMImplementation) => any, setState: <P = IDOMImplementationProperties>(instance: IDOMImplementation, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IDOMImplementation, properties: IHiddenProperties) => void, setReadonlyOfDOMImplementation: (instance: IDOMImplementation, properties: IDOMImplementationReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IDOMImplementation>;
export default class DOMImplementation implements IDOMImplementation {
    constructor();
    createDocument(namespace: string | null, qualifiedName: string, doctype?: IDocumentType | null): IXMLDocument;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType;
    createHTMLDocument(title?: string): IDocument;
    hasFeature(): boolean;
}
export interface IDOMImplementationProperties {
}
export interface IDOMImplementationReadonlyProperties {
}
export declare const DOMImplementationPropertyKeys: never[];
export declare const DOMImplementationConstantKeys: never[];
