import InternalHandler from '../InternalHandler';
import { INode, IXMLSerializer } from '../interfaces';
export declare const getState: (instance: IXMLSerializer) => any, setState: <P = IXMLSerializerProperties>(instance: IXMLSerializer, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IXMLSerializer, properties: IHiddenProperties) => void, setReadonlyOfXMLSerializer: (instance: IXMLSerializer, properties: IXMLSerializerReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IXMLSerializer>;
export default class XMLSerializer implements IXMLSerializer {
    constructor();
    serializeToString(root: INode): string;
}
export interface IXMLSerializerProperties {
}
export interface IXMLSerializerReadonlyProperties {
}
export declare const XMLSerializerPropertyKeys: never[];
export declare const XMLSerializerConstantKeys: never[];
