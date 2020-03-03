import { INonElementParentNode, IHTMLElement } from '../../base/interfaces';
import GeneratedNonElementParentNode from '../../base/mixins/NonElementParentNode';
export default class NonElementParentNode extends GeneratedNonElementParentNode implements INonElementParentNode {
    getElementById(elementId: string): IHTMLElement | null;
}
