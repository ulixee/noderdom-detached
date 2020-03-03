import { IElement, INode, IParentNode, IHTMLCollection, INodeList } from '../../base/interfaces';
import GeneratedParentNode from '../../base/mixins/ParentNode';
export default class ParentNode extends GeneratedParentNode implements IParentNode {
    get children(): IHTMLCollection;
    get firstElementChild(): IElement | null;
    get lastElementChild(): IElement | null;
    append(...nodes: (INode | string)[]): void;
    querySelector(selectors: string): IElement | null;
    querySelectorAll(selectors: string): INodeList<IElement>;
}
