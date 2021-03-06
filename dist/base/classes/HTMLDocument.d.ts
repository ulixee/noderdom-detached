import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import { IDocument, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOptions, IHTMLDocument } from '../interfaces';
import { IDocumentProperties, IDocumentReadonlyProperties } from './Document';
export declare const getState: (instance: IHTMLDocument) => any, setState: <P = IHTMLDocumentProperties>(instance: IHTMLDocument, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IHTMLDocument, properties: IHiddenProperties) => void, setReadonlyOfHTMLDocument: (instance: IHTMLDocument, properties: IHTMLDocumentReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IHTMLDocument>;
export declare function HTMLDocumentGenerator(Document: Constructable<IDocument>): {
    new (): {
        addEventListener<K extends "change" | "readystatechange" | "visibilitychange" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K, listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions | undefined): void;
        removeEventListener<K_1 extends "change" | "readystatechange" | "visibilitychange" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K_1, listener: (this: IHTMLDocument, ev: IDocumentEventMap[K_1]) => any, options?: boolean | IEventListenerOptions | undefined): void;
        readonly URL: string;
        readonly anchors: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly applets: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        body: import("../interfaces").IHTMLElement | null;
        readonly characterSet: string;
        readonly charset: string;
        readonly compatMode: string;
        readonly contentType: string;
        cookie: string;
        readonly currentScript: import("../interfaces").IHTMLScriptElement | null;
        readonly defaultView: void | null;
        dir: string;
        readonly doctype: import("../interfaces").IDocumentType | null;
        readonly documentElement: import("../interfaces").IElement | null;
        readonly documentURI: string;
        readonly embeds: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly forms: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly head: import("../interfaces").IHTMLHeadElement | null;
        readonly hidden: boolean;
        readonly images: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly implementation: import("../interfaces").IDOMImplementation;
        readonly inputEncoding: string;
        readonly lastModified: string;
        readonly links: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly location: import("../interfaces").ILocation | null;
        onreadystatechange: ((this: IDocument, ev: import("../interfaces").IEvent) => any) | null;
        onvisibilitychange: ((this: IDocument, ev: import("../interfaces").IEvent) => any) | null;
        readonly plugins: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly readyState: import("../interfaces").IDocumentReadyState;
        readonly referrer: string;
        readonly scripts: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        title: string;
        readonly visibilityState: import("../interfaces").IVisibilityState;
        adoptNode(node: import("../interfaces").INode): import("../interfaces").INode;
        captureEvents(): void;
        clear(): void;
        close(): void;
        createAttribute(localName: string): import("../interfaces").IAttr;
        createAttributeNS(namespace: string | null, qualifiedName: string): import("../interfaces").IAttr;
        createCDATASection(data: string): import("../interfaces").ICDATASection;
        createComment(data: string): import("../interfaces").IComment;
        createDocumentFragment(): import("../interfaces").IDocumentFragment;
        createElement(localName: string, options?: import("../interfaces").IElementCreationOptions | undefined): import("../interfaces").IElement;
        createElementNS(namespace: string | null, qualifiedName: string, options?: import("../interfaces").IElementCreationOptions | undefined): import("../interfaces").IElement;
        createEvent(eventInterface: string): import("../interfaces").IEvent;
        createNodeIterator(root: import("../interfaces").INode, whatToShow?: number | undefined, filter?: {
            acceptNode(node: import("../interfaces").INode): number;
        } | ((node: import("../interfaces").INode) => number) | null | undefined): import("../interfaces").INodeIterator;
        createProcessingInstruction(target: string, data: string): import("../interfaces").IProcessingInstruction;
        createRange(): import("../interfaces").IRange;
        createTextNode(data: string): import("../interfaces").IText;
        createTreeWalker(root: import("../interfaces").INode, whatToShow?: number | undefined, filter?: {
            acceptNode(node: import("../interfaces").INode): number;
        } | ((node: import("../interfaces").INode) => number) | null | undefined): import("../interfaces").ITreeWalker;
        getElementsByClassName(classNames: string): import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        getElementsByName(elementName: string): import("../interfaces").INodeList<import("../interfaces").INode>;
        getElementsByTagName(qualifiedName: string): import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        getSelection(): import("../interfaces").ISelection | null;
        hasFocus(): boolean;
        importNode(node: import("../interfaces").INode, deep?: boolean | undefined): import("../interfaces").INode;
        open(type?: string | undefined, replace?: string | undefined): IDocument;
        releaseEvents(): void;
        write(...text: string[]): void;
        writeln(...text: string[]): void;
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
        readonly ownerDocument: IDocument | null;
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
        readonly activeElement: import("../interfaces").IElement | null;
        onabort: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onauxclick: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onblur: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncancel: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncanplay: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncanplaythrough: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onchange: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onclick: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onclose: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncontextmenu: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncuechange: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondblclick: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondrag: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragend: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragenter: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragexit: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragleave: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragover: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragstart: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondrop: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondurationchange: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onemptied: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onended: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onerror: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onfocus: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oninput: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oninvalid: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onkeydown: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onkeypress: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onkeyup: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onload: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadeddata: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadedmetadata: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadend: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadstart: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmousedown: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseenter: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseleave: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmousemove: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseout: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseover: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseup: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onpause: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onplay: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onplaying: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onprogress: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onratechange: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onreset: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onresize: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onscroll: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onsecuritypolicyviolation: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onseeked: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onseeking: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onselect: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onstalled: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onsubmit: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onsuspend: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ontimeupdate: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ontoggle: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onvolumechange: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onwaiting: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onwheel: ((this: import("../interfaces").IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        getElementById(elementId: string): import("../interfaces").IElement | null;
        readonly childElementCount: number;
        readonly children: import("../interfaces").IHTMLCollection<import("../interfaces").IElement>;
        readonly firstElementChild: import("../interfaces").IElement | null;
        readonly lastElementChild: import("../interfaces").IElement | null;
        append(...nodes: (string | import("../interfaces").INode)[]): void;
        prepend(...nodes: (string | import("../interfaces").INode)[]): void;
        querySelector(selectors: string): import("../interfaces").IElement | null;
        querySelectorAll(selectors: string): import("../interfaces").INodeList<import("../interfaces").INode>;
    };
};
export interface IHTMLDocumentProperties extends IDocumentProperties {
}
export interface IHTMLDocumentReadonlyProperties extends IDocumentReadonlyProperties {
}
export declare const HTMLDocumentPropertyKeys: string[];
export declare const HTMLDocumentConstantKeys: string[];
