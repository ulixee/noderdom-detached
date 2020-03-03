import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import { IElement, IElementCSSInlineStyle, IElementContentEditable, IGlobalEventHandlers, IHTMLOrSVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOptions, IHTMLElement } from '../interfaces';
import { IElementProperties, IElementReadonlyProperties } from './Element';
import { IElementCSSInlineStyleProperties, IElementCSSInlineStyleReadonlyProperties } from '../mixins/ElementCSSInlineStyle';
import { IElementContentEditableProperties, IElementContentEditableReadonlyProperties } from '../mixins/ElementContentEditable';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties } from '../mixins/GlobalEventHandlers';
import { IHTMLOrSVGElementProperties, IHTMLOrSVGElementReadonlyProperties } from '../mixins/HTMLOrSVGElement';
export declare const getState: (instance: IHTMLElement) => any, setState: <P = IHTMLElementProperties>(instance: IHTMLElement, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IHTMLElement, properties: IHiddenProperties) => void, setReadonlyOfHTMLElement: (instance: IHTMLElement, properties: IHTMLElementReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IHTMLElement>;
export declare function HTMLElementGenerator(Element: Constructable<IElement>, ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, ElementContentEditable: Constructable<IElementContentEditable>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>): {
    new (): {
        accessKey: string;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        lang: string;
        readonly offsetHeight: number;
        readonly offsetLeft: number;
        readonly offsetParent: IElement | null;
        readonly offsetTop: number;
        readonly offsetWidth: number;
        title: string;
        translate: boolean;
        click(): void;
        addEventListener<K extends "change" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions | undefined): void;
        removeEventListener<K_1 extends "change" | "abort" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "volumechange" | "waiting" | "wheel">(type: K_1, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K_1]) => any, options?: boolean | IEventListenerOptions | undefined): void;
        readonly attributes: import("../interfaces").INamedNodeMap;
        readonly classList: import("../interfaces").IDOMTokenList;
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
        readonly shadowRoot: import("../interfaces").IShadowRoot | null;
        slot: string;
        readonly tagName: string;
        attachShadow(init: import("../interfaces").IShadowRootInit): import("../interfaces").IShadowRoot;
        closest(selectors: string): IElement | null;
        getAttribute(qualifiedName: string): string | null;
        getAttributeNS(namespace: string | null, localName: string): string | null;
        getAttributeNames(): Iterable<string>;
        getAttributeNode(qualifiedName: string): import("../interfaces").IAttr | null;
        getAttributeNodeNS(namespace: string | null, localName: string): import("../interfaces").IAttr | null;
        getBoundingClientRect(): import("../interfaces").IDOMRect;
        getClientRects(): import("../interfaces").IDOMRectList;
        getElementsByClassName(classNames: string): import("../interfaces").IHTMLCollection<IElement>;
        getElementsByTagName(qualifiedName: string): import("../interfaces").IHTMLCollection<IElement>;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../interfaces").IHTMLCollection<IElement>;
        hasAttribute(qualifiedName: string): boolean;
        hasAttributeNS(namespace: string | null, localName: string): boolean;
        hasAttributes(): boolean;
        insertAdjacentElement(where: string, element: IElement): IElement | null;
        insertAdjacentHTML(position: string, text: string): void;
        insertAdjacentText(where: string, data: string): void;
        matches(selectors: string): boolean;
        removeAttribute(qualifiedName: string): void;
        removeAttributeNS(namespace: string | null, localName: string): void;
        removeAttributeNode(attr: import("../interfaces").IAttr): import("../interfaces").IAttr;
        setAttribute(qualifiedName: string, value: string): void;
        setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
        setAttributeNode(attr: import("../interfaces").IAttr): import("../interfaces").IAttr | null;
        setAttributeNodeNS(attr: import("../interfaces").IAttr): import("../interfaces").IAttr | null;
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
        readonly childNodes: import("../interfaces").INodeList<import("../interfaces").INode>;
        readonly firstChild: import("../interfaces").INode | null;
        readonly isConnected: boolean;
        readonly lastChild: import("../interfaces").INode | null;
        readonly nextSibling: import("../interfaces").INode | null;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string | null;
        readonly ownerDocument: import("../interfaces").IDocument | null;
        readonly parentElement: IElement | null;
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
        readonly nextElementSibling: IElement | null;
        readonly previousElementSibling: IElement | null;
        readonly childElementCount: number;
        readonly children: import("../interfaces").IHTMLCollection<IElement>;
        readonly firstElementChild: IElement | null;
        readonly lastElementChild: IElement | null;
        append(...nodes: (string | import("../interfaces").INode)[]): void;
        prepend(...nodes: (string | import("../interfaces").INode)[]): void;
        querySelector(selectors: string): IElement | null;
        querySelectorAll(selectors: string): import("../interfaces").INodeList<import("../interfaces").INode>;
        readonly assignedSlot: import("../interfaces").IHTMLSlotElement | null;
        readonly style: import("../interfaces").ICSSStyleDeclaration;
        onabort: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onauxclick: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onblur: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncancel: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncanplay: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncanplaythrough: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onchange: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onclick: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onclose: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncontextmenu: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oncuechange: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondblclick: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondrag: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragend: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragenter: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragexit: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragleave: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragover: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondragstart: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondrop: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ondurationchange: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onemptied: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onended: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onerror: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onfocus: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oninput: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        oninvalid: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onkeydown: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onkeypress: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onkeyup: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onload: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadeddata: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadedmetadata: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadend: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onloadstart: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmousedown: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseenter: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseleave: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmousemove: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseout: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseover: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onmouseup: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onpause: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onplay: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onplaying: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onprogress: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onratechange: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onreset: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onresize: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onscroll: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onsecuritypolicyviolation: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onseeked: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onseeking: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onselect: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onstalled: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onsubmit: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onsuspend: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ontimeupdate: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        ontoggle: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onvolumechange: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onwaiting: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        onwheel: ((this: IGlobalEventHandlers, ev: import("../interfaces").IEvent) => any) | null;
        readonly dataset: import("../interfaces").IDOMStringMap;
        nonce: string;
        tabIndex: number;
        blur(): void;
        focus(): void;
    };
};
export interface IHTMLElementProperties extends IElementProperties, IElementCSSInlineStyleProperties, IElementContentEditableProperties, IGlobalEventHandlersProperties, IHTMLOrSVGElementProperties {
    accessKey?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    lang?: string;
    offsetHeight?: number;
    offsetLeft?: number;
    offsetParent?: IElement | null;
    offsetTop?: number;
    offsetWidth?: number;
    title?: string;
    translate?: boolean;
}
export interface IHTMLElementReadonlyProperties extends IElementReadonlyProperties, IElementCSSInlineStyleReadonlyProperties, IElementContentEditableReadonlyProperties, IGlobalEventHandlersReadonlyProperties, IHTMLOrSVGElementReadonlyProperties {
    offsetHeight?: number;
    offsetLeft?: number;
    offsetParent?: IElement | null;
    offsetTop?: number;
    offsetWidth?: number;
}
export declare const HTMLElementPropertyKeys: string[];
export declare const HTMLElementConstantKeys: string[];
