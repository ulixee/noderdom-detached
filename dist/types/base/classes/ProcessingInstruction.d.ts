import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import { ICharacterData, IProcessingInstruction } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties } from './CharacterData';
export declare const getState: (instance: IProcessingInstruction) => any, setState: <P = IProcessingInstructionProperties>(instance: IProcessingInstruction, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IProcessingInstruction, properties: IHiddenProperties) => void, setReadonlyOfProcessingInstruction: (instance: IProcessingInstruction, properties: IProcessingInstructionReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IProcessingInstruction>;
export declare function ProcessingInstructionGenerator(CharacterData: Constructable<ICharacterData>): {
    new (): {
        readonly target: string;
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
        readonly childNodes: import("../interfaces").INodeList<import("../interfaces").INode>;
        readonly firstChild: import("../interfaces").INode | null;
        readonly isConnected: boolean;
        readonly lastChild: import("../interfaces").INode | null;
        readonly nextSibling: import("../interfaces").INode | null;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string | null;
        readonly ownerDocument: import("../interfaces").IDocument | null;
        readonly parentElement: import("../interfaces").IElement | null;
        readonly parentNode: import("../interfaces").INode | null;
        readonly previousSibling: import("../interfaces").INode | null;
        textContent: string | null;
        appendChild(node: import("../interfaces").INode): import("../interfaces").INode;
        cloneNode(deep?: boolean | undefined): import("../interfaces").INode;
        compareDocumentPosition(other: import("../interfaces").INode): number;
        contains(other: import("../interfaces").INode | null): boolean;
        getRootNode(options?: import("../interfaces").IGetRootNodeOptions | undefined): import("../interfaces").INode;
        hasChildNodes(): boolean;
        insertBefore(node: import("../interfaces").INode, child: import("../interfaces").INode | null): import("../interfaces").INode;
        isDefaultNamespace(namespace: string | null): boolean;
        isEqualNode(otherNode: import("../interfaces").INode | null): boolean;
        isSameNode(otherNode: import("../interfaces").INode | null): boolean;
        lookupNamespaceURI(prefix: string | null): string | null;
        lookupPrefix(namespace: string | null): string | null;
        normalize(): void;
        removeChild(child: import("../interfaces").INode): import("../interfaces").INode;
        replaceChild(node: import("../interfaces").INode, child: import("../interfaces").INode): import("../interfaces").INode;
        dispatchEvent(event: import("../interfaces").IEvent): boolean;
        after(...nodes: (string | import("../interfaces").INode)[]): void;
        before(...nodes: (string | import("../interfaces").INode)[]): void;
        remove(): void;
        replaceWith(...nodes: (string | import("../interfaces").INode)[]): void;
        readonly nextElementSibling: import("../interfaces").IElement | null;
        readonly previousElementSibling: import("../interfaces").IElement | null;
    };
};
export interface IProcessingInstructionProperties extends ICharacterDataProperties {
    target?: string;
}
export interface IProcessingInstructionReadonlyProperties extends ICharacterDataReadonlyProperties {
    target?: string;
}
export declare const ProcessingInstructionPropertyKeys: string[];
export declare const ProcessingInstructionConstantKeys: string[];
