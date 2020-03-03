import { IHTMLDocument } from '../../base/interfaces';
declare const Parent: {
    new (): {
        addEventListener<K extends "change" | "readystatechange" | "visibilitychange" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K, listener: (this: IHTMLDocument, ev: import("../../base/interfaces").IDocumentEventMap[K]) => any, options?: boolean | import("../../base/interfaces").IAddEventListenerOptions | undefined): void;
        removeEventListener<K_1 extends "change" | "readystatechange" | "visibilitychange" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K_1, listener: (this: IHTMLDocument, ev: import("../../base/interfaces").IDocumentEventMap[K_1]) => any, options?: boolean | import("../../base/interfaces").IEventListenerOptions | undefined): void;
        readonly URL: string;
        readonly anchors: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly applets: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        body: import("../../base/interfaces").IHTMLElement | null;
        readonly characterSet: string;
        readonly charset: string;
        readonly compatMode: string;
        readonly contentType: string;
        cookie: string;
        readonly currentScript: import("../../base/interfaces").IHTMLScriptElement | null;
        readonly defaultView: void | null;
        dir: string;
        readonly doctype: import("../../base/interfaces").IDocumentType | null;
        readonly documentElement: import("../../base/interfaces").IElement | null;
        readonly documentURI: string;
        readonly embeds: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly forms: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly head: import("../../base/interfaces").IHTMLHeadElement | null;
        readonly hidden: boolean;
        readonly images: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly implementation: import("../../base/interfaces").IDOMImplementation;
        readonly inputEncoding: string;
        readonly lastModified: string;
        readonly links: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly location: import("../../base/interfaces").ILocation | null;
        onreadystatechange: ((this: import("../../base/interfaces").IDocument, ev: import("../../base/interfaces").IEvent) => any) | null;
        onvisibilitychange: ((this: import("../../base/interfaces").IDocument, ev: import("../../base/interfaces").IEvent) => any) | null;
        readonly plugins: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly readyState: import("../../base/interfaces").IDocumentReadyState;
        readonly referrer: string;
        readonly scripts: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        title: string;
        readonly visibilityState: import("../../base/interfaces").IVisibilityState;
        adoptNode(node: import("../../base/interfaces").INode): import("../../base/interfaces").INode;
        captureEvents(): void;
        clear(): void;
        close(): void;
        createAttribute(localName: string): import("../../base/interfaces").IAttr;
        createAttributeNS(namespace: string | null, qualifiedName: string): import("../../base/interfaces").IAttr;
        createCDATASection(data: string): import("../../base/interfaces").ICDATASection;
        createComment(data: string): import("../../base/interfaces").IComment;
        createDocumentFragment(): import("../../base/interfaces").IDocumentFragment;
        createElement(localName: string, options?: import("../../base/interfaces").IElementCreationOptions | undefined): import("../../base/interfaces").IElement;
        createElementNS(namespace: string | null, qualifiedName: string, options?: import("../../base/interfaces").IElementCreationOptions | undefined): import("../../base/interfaces").IElement;
        createEvent(eventInterface: string): import("../../base/interfaces").IEvent;
        createNodeIterator(root: import("../../base/interfaces").INode, whatToShow?: number | undefined, filter?: {
            acceptNode(node: import("../../base/interfaces").INode): number;
        } | ((node: import("../../base/interfaces").INode) => number) | null | undefined): import("../../base/interfaces").INodeIterator;
        createProcessingInstruction(target: string, data: string): import("../../base/interfaces").IProcessingInstruction;
        createRange(): import("../../base/interfaces").IRange;
        createTextNode(data: string): import("../../base/interfaces").IText;
        createTreeWalker(root: import("../../base/interfaces").INode, whatToShow?: number | undefined, filter?: {
            acceptNode(node: import("../../base/interfaces").INode): number;
        } | ((node: import("../../base/interfaces").INode) => number) | null | undefined): import("../../base/interfaces").ITreeWalker;
        getElementsByClassName(classNames: string): import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        getElementsByName(elementName: string): import("../../base/interfaces").INodeList<import("../../base/interfaces").INode>;
        getElementsByTagName(qualifiedName: string): import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        getSelection(): import("../../base/interfaces").ISelection | null;
        hasFocus(): boolean;
        importNode(node: import("../../base/interfaces").INode, deep?: boolean | undefined): import("../../base/interfaces").INode;
        open(type?: string | undefined, replace?: string | undefined): import("../../base/interfaces").IDocument;
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
        readonly activeElement: import("../../base/interfaces").IElement | null;
        onabort: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onauxclick: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onblur: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oncancel: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oncanplay: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oncanplaythrough: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onchange: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onclick: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onclose: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oncontextmenu: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oncuechange: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondblclick: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondrag: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondragend: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondragenter: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondragexit: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondragleave: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondragover: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondragstart: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondrop: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ondurationchange: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onemptied: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onended: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onerror: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onfocus: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oninput: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        oninvalid: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onkeydown: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onkeypress: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onkeyup: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onload: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onloadeddata: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onloadedmetadata: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onloadend: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onloadstart: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmousedown: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmouseenter: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmouseleave: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmousemove: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmouseout: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmouseover: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onmouseup: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onpause: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onplay: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onplaying: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onprogress: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onratechange: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onreset: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onresize: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onscroll: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onsecuritypolicyviolation: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onseeked: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onseeking: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onselect: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onstalled: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onsubmit: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onsuspend: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ontimeupdate: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        ontoggle: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onvolumechange: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onwaiting: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        onwheel: ((this: import("../../base/interfaces").IGlobalEventHandlers, ev: import("../../base/interfaces").IEvent) => any) | null;
        getElementById(elementId: string): import("../../base/interfaces").IElement | null;
        readonly childElementCount: number;
        readonly children: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly firstElementChild: import("../../base/interfaces").IElement | null;
        readonly lastElementChild: import("../../base/interfaces").IElement | null;
        append(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        prepend(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        querySelector(selectors: string): import("../../base/interfaces").IElement | null;
        querySelectorAll(selectors: string): import("../../base/interfaces").INodeList<import("../../base/interfaces").INode>;
    };
};
export default class HTMLDocument extends Parent implements IHTMLDocument {
}
export {};
