import { INonDocumentTypeChildNode, IElement } from '../../base/interfaces';
import GeneratedNonDocumentTypeChildNode from '../../base/mixins/NonDocumentTypeChildNode';
export default class NonDocumentTypeChildNode extends GeneratedNonDocumentTypeChildNode implements INonDocumentTypeChildNode {
    get nextElementSibling(): IElement | null;
    get previousElementSibling(): IElement | null;
}
