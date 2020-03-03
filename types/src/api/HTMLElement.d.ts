import { IHTMLElement } from '../../base/interfaces';
declare const GeneratedHTMLElement: {
    new (): {
        accessKey: string;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        lang: string;
        readonly offsetHeight: number;
        readonly offsetLeft: number;
        readonly offsetParent: import("../../base/interfaces").IElement | null;
        readonly offsetTop: number;
        readonly offsetWidth: number;
        title: string;
        translate: boolean;
        click(): void;
        addEventListener<K extends "change" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K, listener: (this: IHTMLElement, ev: import("../../base/interfaces").IGlobalEventHandlersEventMap[K]) => any, options?: boolean | import("../../base/interfaces").IAddEventListenerOptions | undefined): void;
        removeEventListener<K_1 extends "change" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K_1, listener: (this: IHTMLElement, ev: import("../../base/interfaces").IGlobalEventHandlersEventMap[K_1]) => any, options?: boolean | import("../../base/interfaces").IEventListenerOptions | undefined): void;
        readonly attributes: import("../../base/interfaces").INamedNodeMap;
        readonly classList: import("../../base/interfaces").IDOMTokenList;
        className: string;
        readonly clientHeight: number;
        readonly clientLeft: number;
        readonly clientTop: number;
        readonly clientWidth: number;
        id: string;
        innerHTML: string;
        readonly localName: string;
        readonly namespaceURI: string | null;
        outerHTML: string;
        readonly prefix: string | null;
        readonly scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        readonly scrollWidth: number;
        readonly shadowRoot: import("../../base/interfaces").IShadowRoot | null;
        slot: string;
        readonly tagName: string;
        attachShadow(init: import("../../base/interfaces").IShadowRootInit): import("../../base/interfaces").IShadowRoot;
        closest(selectors: string): import("../../base/interfaces").IElement | null;
        getAttribute(qualifiedName: string): string | null;
        getAttributeNS(namespace: string | null, localName: string): string | null;
        getAttributeNames(): Iterable<string>;
        getAttributeNode(qualifiedName: string): import("../../base/interfaces").IAttr | null;
        getAttributeNodeNS(namespace: string | null, localName: string): import("../../base/interfaces").IAttr | null;
        getBoundingClientRect(): import("../../base/interfaces").IDOMRect;
        getClientRects(): import("../../base/interfaces").IDOMRectList;
        getElementsByClassName(classNames: string): import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        getElementsByTagName(qualifiedName: string): import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        hasAttribute(qualifiedName: string): boolean;
        hasAttributeNS(namespace: string | null, localName: string): boolean;
        hasAttributes(): boolean;
        insertAdjacentElement(where: string, element: import("../../base/interfaces").IElement): import("../../base/interfaces").IElement | null;
        insertAdjacentHTML(position: string, text: string): void;
        insertAdjacentText(where: string, data: string): void;
        matches(selectors: string): boolean;
        removeAttribute(qualifiedName: string): void;
        removeAttributeNS(namespace: string | null, localName: string): void;
        removeAttributeNode(attr: import("../../base/interfaces").IAttr): import("../../base/interfaces").IAttr;
        setAttribute(qualifiedName: string, value: string): void;
        setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
        setAttributeNode(attr: import("../../base/interfaces").IAttr): import("../../base/interfaces").IAttr | null;
        setAttributeNodeNS(attr: import("../../base/interfaces").IAttr): import("../../base/interfaces").IAttr | null;
        toggleAttribute(qualifiedName: string, force?: boolean | undefined): boolean;
        webkitMatchesSelector(selectors: string): boolean;
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
        readonly childElementCount: number;
        readonly children: import("../../base/interfaces").IHTMLCollection<import("../../base/interfaces").IElement>;
        readonly firstElementChild: import("../../base/interfaces").IElement | null;
        readonly lastElementChild: import("../../base/interfaces").IElement | null;
        append(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        prepend(...nodes: (string | import("../../base/interfaces").INode)[]): void;
        querySelector(selectors: string): import("../../base/interfaces").IElement | null;
        querySelectorAll(selectors: string): import("../../base/interfaces").INodeList<import("../../base/interfaces").INode>;
        readonly assignedSlot: import("../../base/interfaces").IHTMLSlotElement | null;
        readonly style: import("../../base/interfaces").ICSSStyleDeclaration;
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
        readonly dataset: import("../../base/interfaces").IDOMStringMap;
        nonce: string;
        tabIndex: number;
        blur(): void;
        focus(): void;
    };
};
export default class HTMLElement extends GeneratedHTMLElement implements IHTMLElement {
}
export {};