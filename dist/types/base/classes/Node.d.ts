import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import { IEventTarget, IDocument, INode, IElement, INodeList, IGetRootNodeOptions } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties } from './EventTarget';
export declare const getState: (instance: INode) => any, setState: <P = INodeProperties>(instance: INode, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: INode, properties: IHiddenProperties) => void, setReadonlyOfNode: (instance: INode, properties: INodeReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<INode>;
export declare function NodeGenerator(EventTarget: Constructable<IEventTarget>): {
    new (): {
        readonly ATTRIBUTE_NODE: number;
        readonly CDATA_SECTION_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_POSITION_CONTAINED_BY: number;
        readonly DOCUMENT_POSITION_CONTAINS: number;
        readonly DOCUMENT_POSITION_DISCONNECTED: number;
        readonly DOCUMENT_POSITION_FOLLOWING: number;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        readonly DOCUMENT_POSITION_PRECEDING: number;
        readonly DOCUMENT_TYPE_NODE: number;
        readonly ELEMENT_NODE: number;
        readonly ENTITY_NODE: number;
        readonly ENTITY_REFERENCE_NODE: number;
        readonly NOTATION_NODE: number;
        readonly PROCESSING_INSTRUCTION_NODE: number;
        readonly TEXT_NODE: number;
        readonly baseURI: string;
        readonly childNodes: INodeList<INode>;
        readonly firstChild: INode | null;
        readonly isConnected: boolean;
        readonly lastChild: INode | null;
        readonly nextSibling: INode | null;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string | null;
        readonly ownerDocument: IDocument | null;
        readonly parentElement: IElement | null;
        readonly parentNode: INode | null;
        readonly previousSibling: INode | null;
        textContent: string | null;
        appendChild(node: INode): INode;
        cloneNode(deep?: boolean | undefined): INode;
        compareDocumentPosition(other: INode): number;
        contains(other: INode | null): boolean;
        getRootNode(options?: IGetRootNodeOptions | undefined): INode;
        hasChildNodes(): boolean;
        insertBefore(node: INode, child: INode | null): INode;
        isDefaultNamespace(namespace: string | null): boolean;
        isEqualNode(otherNode: INode | null): boolean;
        isSameNode(otherNode: INode | null): boolean;
        lookupNamespaceURI(prefix: string | null): string | null;
        lookupPrefix(namespace: string | null): string | null;
        normalize(): void;
        removeChild(child: INode): INode;
        replaceChild(node: INode, child: INode): INode;
        dispatchEvent(event: import("../interfaces").IEvent): boolean;
    };
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
};
export interface INodeProperties extends IEventTargetProperties {
    baseURI?: string;
    childNodes?: INodeList;
    firstChild?: INode | null;
    isConnected?: boolean;
    lastChild?: INode | null;
    nextSibling?: INode | null;
    nodeName?: string;
    nodeType?: number;
    nodeValue?: string | null;
    ownerDocument?: IDocument | null;
    parentElement?: IElement | null;
    parentNode?: INode | null;
    previousSibling?: INode | null;
    textContent?: string | null;
}
export interface INodeReadonlyProperties extends IEventTargetReadonlyProperties {
    baseURI?: string;
    childNodes?: INodeList;
    firstChild?: INode | null;
    isConnected?: boolean;
    lastChild?: INode | null;
    nextSibling?: INode | null;
    nodeName?: string;
    nodeType?: number;
    ownerDocument?: IDocument | null;
    parentElement?: IElement | null;
    parentNode?: INode | null;
    previousSibling?: INode | null;
}
export declare const NodePropertyKeys: string[];
export declare const NodeConstantKeys: string[];
