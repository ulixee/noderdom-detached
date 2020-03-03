import { INode, IXMLSerializer } from '../../base/interfaces';
import GeneratedXMLSerializer from '../../base/classes/XMLSerializer';
export default class XMLSerializer extends GeneratedXMLSerializer implements IXMLSerializer {
    serializeToString(root: INode): string;
}
