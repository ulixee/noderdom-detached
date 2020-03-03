import { IComment } from '../../base/interfaces';
declare const Comment_base: {
    new (_data?: string | undefined): {
        data: string;
        readonly length: number;
        appendData(data: string): void;
        deleteData(offset: number, count: number): void;
        insertData(offset: number, data: string): void;
        replaceData(offset: number, count: number, data: string): void;
        substringData(offset: number, count: number): string;
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
        readonly childNodes: import("../../base/interfaces").INodeList<import("../../base/interfaces").INode>;
        readonly firstChild: import("../../base/interfaces").INode | null;
        readonly isConnected: boolean;
        readonly lastChild: import("../../base/interfaces").INode | null;
        readonly nextSibling: import("../../base/interfaces").INode | null;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string | null;
        readonly ownerDocument: import("../../base/interfaces").IDocument | null;
        readonly parentElement: import("../../base/interfaces").IElement | null;
        readonly parentNode: import("../../base/interfaces").INode | null;
        readonly previousSibling: import("../../base/interfaces").INode | null;
        textContent: string | null;
        appendChild(node: import("../../base/interfaces").INode): import("../../base/interfaces").INode;
        cloneNode(deep?: boolean | undefined): import("../../base/interfaces").INode;
        compareDocumentPosition(other: import("../../base/interfaces").INode): number;
        contains(other: import("../../base/interfaces").INode | null): boolean;
        getRootNode(options?: import("../../base/interfaces").IGetRootNodeOptions | undefined): import("../../base/interfaces").INode;
        hasChildNodes(): boolean;
        insertBefore(node: import("../../base/interfaces").INode, child: import("../../base/interfaces").INode | null): import("../../base/interfaces").INode;
        isDefaultNamespace(namespace: string | null): boolean;
        isEqualNode(otherNode: import("../../base/interfaces").INode | null): boolean;
        isSameNode(otherNode: import("../../base/interfaces").INode | null): boolean;
        lookupNamespaceURI(prefix: string | null): string | null;
        lookupPrefix(namespace: string | null): string | null;
        normalize(): void;
        removeChild(child: import("../../base/interfaces").INode): import("../../base/interfaces").INode;
        replaceChild(node: import("../../base/interfaces").INode, child: import("../../base/interfaces").INode): import("../../base/interfaces").INode;
        dispatchEvent(event: import("../../base/interfaces").IEvent): boolean;
        after(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        before(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        remove(): void;
        replaceWith(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        readonly nextElementSibling: import("../../base/interfaces").IElement | null;
        readonly previousElementSibling: import("../../base/interfaces").IElement | null;
    };
};
export default class Comment extends Comment_base implements IComment {
    constructor();
}
export {};
