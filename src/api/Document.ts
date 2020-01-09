import DOMNode from './Node';
import {
  ICaretPosition,
  IComment,
  IDocument,
  IDocumentFragment,
  IDocumentReadyState,
  IDocumentTimeline,
  IDocumentType,
  IDOMImplementation,
  IElement,
  IElementCreationOptions,
  IHTMLAnchorElement,
  IHTMLAreaElement,
  IHTMLCollectionOf,
  IHTMLElement,
  IHTMLElementTagNameMap,
  IHTMLEmbedElement,
  IHTMLFormElement,
  IHTMLHeadElement,
  IHTMLImageElement,
  IHTMLOrSVGScriptElement,
  IHTMLScriptElement,
  ILocation,
  INode,
  IProgressEvent,
  ISVGElement,
  ISVGElementTagNameMap,
  IVisibilityState,
  IWindowProxy,
  IAnimationEvent,
  IAnimationPlaybackEvent,
  IAudioProcessingEvent,
  IBeforeUnloadEvent,
  IClipboardEvent,
  ICloseEvent,
  ICompositionEvent,
  ICustomEvent,
  IDeviceLightEvent,
  IDeviceMotionEvent,
  IDeviceOrientationEvent,
  IDragEvent,
  IErrorEvent,
  IEvent,
  IFocusEvent,
  IFocusNavigationEvent,
  IGamepadEvent,
  IHashChangeEvent,
  IIDBVersionChangeEvent,
  IInputEvent,
  IKeyboardEvent,
  IListeningStateChangedEvent,
  IMSGestureEvent,
  IMSMediaKeyMessageEvent,
  IMSMediaKeyNeededEvent,
  IMSPointerEvent,
  IMediaEncryptedEvent,
  IMediaKeyMessageEvent,
  IMediaQueryListEvent,
  IMediaStreamErrorEvent,
  IMediaStreamEvent,
  IMediaStreamTrackEvent,
  IMessageEvent,
  IMouseEvent,
  IMutationEvent,
  IOfflineAudioCompletionEvent,
  IOverflowEvent,
  IPageTransitionEvent,
  IPaymentRequestUpdateEvent,
  IPermissionRequestedEvent,
  IPointerEvent,
  IPopStateEvent,
  IIProgressEvent,
  IPromiseRejectionEvent,
  IRTCDTMFToneChangeEvent,
  IRTCDataChannelEvent,
  IRTCDtlsTransportStateChangedEvent,
  IRTCErrorEvent,
  IRTCIceCandidatePairChangedEvent,
  IRTCIceGathererEvent,
  IRTCIceTransportStateChangedEvent,
  IRTCPeerConnectionIceErrorEvent,
  IRTCPeerConnectionIceEvent,
  IRTCSsrcConflictEvent,
  IRTCStatsEvent,
  IRTCTrackEvent,
  ISVGZoomEvent,
  ISecurityPolicyViolationEvent,
  IServiceWorkerMessageEvent,
  ISpeechRecognitionError,
  ISpeechRecognitionEvent,
  ISpeechSynthesisErrorEvent,
  ISpeechSynthesisEvent,
  IStorageEvent,
  ITextEvent,
  ITouchEvent,
  ITrackEvent,
  ITransitionEvent,
  IUIEvent,
  IVRDisplayEvent,
  IWebGLContextEvent,
  IWheelEvent,
  INodeFilter,
  INodeIterator,
  IRange,
  IText,
  IAnimation,
  ITreeWalker,
  ISelection,
  IDocumentEventMap,
  IAddEventListenerOptions,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IMutable,
} from '../interfaces';
import DocumentAndElementEventHandlers from './DocumentAndElementEventHandlers';
import DocumentOrShadowRoot from './DocumentOrShadowRoot';
import GlobalEventHandlers from './GlobalEventHandlers';
import NonElementParentNode from './NonElementParentNode';
import ParentNode from './ParentNode';
import XPathEvaluatorBase from './XPathEvaluatorBase';
import { _visitNode } from '../lib/document-utils';
import { isAttr, isElement } from '../lib/utils';
import CDATASection from './CDATASection';
import Element from './Element';
import ProcessingInstruction from './ProcessingInstruction';
import Attr from './Attr';
import NodeListOf from './NodeListOf';
import Comment from './Comment';
import DocumentFragment from './DocumentFragment';
import Text from './Text';
import HTMLElement from './HTMLElement';
import HTMLCollectionOf from './HTMLCollectionOf';
import NODE_TYPE from '../constants/NodeType';

// tslint:disable-next-line:variable-name
const DocumentBase = DocumentAndElementEventHandlers(
  DocumentOrShadowRoot(GlobalEventHandlers(NonElementParentNode(ParentNode(XPathEvaluatorBase(DOMNode))))),
);

export default class Document extends DocumentBase implements IDocument {
  public readonly URL: string;
  public readonly activeElement: IElement | null;
  public body: IHTMLElement;
  public readonly characterSet: string;
  public readonly charset: string;
  public readonly compatMode: string;
  public readonly contentType: string;
  public cookie: string;
  public readonly currentScript: IHTMLOrSVGScriptElement | null;
  public readonly defaultView: IWindowProxy | null;
  public designMode: string;
  public dir: string;
  public readonly doctype: IDocumentType | null;
  public readonly documentURI: string;
  public domain: string;
  public readonly embeds: IHTMLCollectionOf<IHTMLEmbedElement>;
  public readonly forms: IHTMLCollectionOf<IHTMLFormElement>;
  public readonly fullscreenEnabled: boolean;
  public readonly head: IHTMLHeadElement;
  public readonly hidden: boolean;
  public readonly images: IHTMLCollectionOf<IHTMLImageElement>;
  public readonly implementation: IDOMImplementation;
  public readonly inputEncoding: string;
  public readonly lastModified: string;
  public readonly links: IHTMLCollectionOf<IHTMLAnchorElement | IHTMLAreaElement>;
  public location: ILocation;
  public onfullscreenchange: ((this: IDocument, ev: IEvent) => any) | null;
  public onfullscreenerror: ((this: IDocument, ev: IEvent) => any) | null;
  public onpointerlockchange: ((this: IDocument, ev: IEvent) => any) | null;
  public onpointerlockerror: ((this: IDocument, ev: IEvent) => any) | null;
  public onreadystatechange: ((this: IDocument, ev: IProgressEvent<IDocument>) => any) | null;
  public onvisibilitychange: ((this: IDocument, ev: IEvent) => any) | null;
  public readonly origin: string;
  public readonly plugins: IHTMLCollectionOf<IHTMLEmbedElement>;
  public readonly readyState: IDocumentReadyState;
  public readonly referrer: string;
  public readonly scripts: IHTMLCollectionOf<IHTMLScriptElement>;
  public readonly scrollingElement: IElement | null;
  public readonly timeline: IDocumentTimeline;
  public title: string;
  public readonly visibilityState: IVisibilityState;

  constructor() {
    super({
      nodeName: '#document',
      nodeType: NODE_TYPE.DOCUMENT_NODE,
    });
    this.contentType = 'text/html';
    this.compatMode = 'CSS1Compat';
  }

  public adoptNode<T extends INode>(_source: T): T {
    throw new Error('Method not implemented.');
  }

  public appendChild<T extends INode>(newChild: T): T {
    const node = super.appendChild<T>(newChild);
    return node;
  }

  public caretPositionFromPoint(_x: number, _y: number): ICaretPosition | null {
    throw new Error('Method not implemented.');
  }

  public close(): void {
    throw new Error('Method not implemented.');
  }

  public createAttribute(localName: string): Attr {
    const attr = new Attr() as IMutable<Attr>;
    attr.name = localName;
    attr.nodeName = localName;
    attr.localName = localName;
    attr.ownerDocument = this;
    return attr as Attr;
  }

  public createAttributeNS(namespace: string | null, qualifiedName: string): Attr {
    const pl = qualifiedName.split(':');
    const attr = new Attr() as IMutable<Attr>;
    attr.name = qualifiedName;
    attr.nodeName = qualifiedName;
    attr.specified = true;
    attr.namespaceURI = namespace;
    attr.ownerDocument = this as IDocument;
    if (pl.length === 2) {
      attr.prefix = pl[0];
      attr.localName = pl[1];
    } else {
      attr.localName = qualifiedName;
    }
    return attr as Attr;
  }

  public createCDATASection(data: string): CDATASection {
    const cdataSection = new CDATASection() as IMutable<CDATASection>;
    cdataSection.ownerDocument = this as IDocument;
    cdataSection.appendData(data);
    return cdataSection as CDATASection;
  }

  public createComment(data: string): IComment {
    const comment = new Comment() as IMutable<Comment>;
    comment.ownerDocument = this as IDocument;
    comment.appendData(data);
    return comment as Comment;
  }

  public createDocumentFragment(): IDocumentFragment {
    const documentFragment = new DocumentFragment() as IMutable<DocumentFragment>;
    documentFragment.ownerDocument = this as IDocument;
    return documentFragment as DocumentFragment;
  }

  public createElement<K extends keyof IHTMLElementTagNameMap>(
    tagName: K,
    options?: IElementCreationOptions,
  ): IHTMLElementTagNameMap[K];
  public createElement(tagName: string, _options?: IElementCreationOptions): IHTMLElement {
    const htmlElement = new HTMLElement() as IMutable<HTMLElement>;
    htmlElement.ownerDocument = this as IDocument;
    htmlElement.nodeName = tagName.toUpperCase();
    htmlElement.tagName = htmlElement.nodeName;
    htmlElement.localName = tagName.toLowerCase();
    return htmlElement as HTMLElement;
  }

  // ToDo: I'm not sure if @ts-ignore should be here... but haven't figured out how to fix overload
  // @ts-ignore
  public createElementNS(namespaceURI: 'http://www.w3.org/1999/xhtml', qualifiedName: string): IHTMLElement;
  public createElementNS<K extends keyof ISVGElementTagNameMap>(
    namespaceURI: 'http://www.w3.org/2000/svg',
    qualifiedName: K,
  ): ISVGElementTagNameMap[K];
  public createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: string): ISVGElement;
  public createElementNS(
    namespaceURI: string | null,
    qualifiedName: string,
    _options?: IElementCreationOptions,
  ): Element;
  public createElementNS(
    namespace: string | null,
    qualifiedName: string,
    _options?: string | IElementCreationOptions,
  ): Element {
    const pl = qualifiedName.split(':');
    const element = new Element() as IMutable<Element>;
    element.ownerDocument = this as IDocument;
    element.nodeName = qualifiedName.toUpperCase();
    element.tagName = element.nodeName;
    element.namespaceURI = namespace;
    if (pl.length === 2) {
      element.prefix = pl[0];
      element.localName = pl[1].toLowerCase();
    } else {
      element.localName = qualifiedName.toLowerCase();
    }
    return element as Element;
  }

  public createEvent(_eventInterface: 'AnimationEvent'): IAnimationEvent;
  public createEvent(_eventInterface: 'AnimationPlaybackEvent'): IAnimationPlaybackEvent;
  public createEvent(_eventInterface: 'AudioProcessingEvent'): IAudioProcessingEvent;
  public createEvent(_eventInterface: 'BeforeUnloadEvent'): IBeforeUnloadEvent;
  public createEvent(_eventInterface: 'ClipboardEvent'): IClipboardEvent;
  public createEvent(_eventInterface: 'CloseEvent'): ICloseEvent;
  public createEvent(_eventInterface: 'CompositionEvent'): ICompositionEvent;
  public createEvent(_eventInterface: 'CustomEvent'): ICustomEvent;
  public createEvent(_eventInterface: 'DeviceLightEvent'): IDeviceLightEvent;
  public createEvent(_eventInterface: 'DeviceMotionEvent'): IDeviceMotionEvent;
  public createEvent(_eventInterface: 'DeviceOrientationEvent'): IDeviceOrientationEvent;
  public createEvent(_eventInterface: 'DragEvent'): IDragEvent;
  public createEvent(_eventInterface: 'ErrorEvent'): IErrorEvent;
  public createEvent(_eventInterface: 'Event' | 'Events'): IEvent;
  public createEvent(_eventInterface: 'FocusEvent'): IFocusEvent;
  public createEvent(_eventInterface: 'FocusNavigationEvent'): IFocusNavigationEvent;
  public createEvent(_eventInterface: 'GamepadEvent'): IGamepadEvent;
  public createEvent(_eventInterface: 'HashChangeEvent'): IHashChangeEvent;
  public createEvent(_eventInterface: 'IDBVersionChangeEvent'): IIDBVersionChangeEvent;
  public createEvent(_eventInterface: 'InputEvent'): IInputEvent;
  public createEvent(_eventInterface: 'KeyboardEvent'): IKeyboardEvent;
  public createEvent(_eventInterface: 'ListeningStateChangedEvent'): IListeningStateChangedEvent;
  public createEvent(_eventInterface: 'MSGestureEvent'): IMSGestureEvent;
  public createEvent(_eventInterface: 'MSMediaKeyMessageEvent'): IMSMediaKeyMessageEvent;
  public createEvent(_eventInterface: 'MSMediaKeyNeededEvent'): IMSMediaKeyNeededEvent;
  public createEvent(_eventInterface: 'MSPointerEvent'): IMSPointerEvent;
  public createEvent(_eventInterface: 'MediaEncryptedEvent'): IMediaEncryptedEvent;
  public createEvent(_eventInterface: 'MediaKeyMessageEvent'): IMediaKeyMessageEvent;
  public createEvent(_eventInterface: 'MediaQueryListEvent'): IMediaQueryListEvent;
  public createEvent(_eventInterface: 'MediaStreamErrorEvent'): IMediaStreamErrorEvent;
  public createEvent(_eventInterface: 'MediaStreamEvent'): IMediaStreamEvent;
  public createEvent(_eventInterface: 'MediaStreamTrackEvent'): IMediaStreamTrackEvent;
  public createEvent(_eventInterface: 'MessageEvent'): IMessageEvent;
  public createEvent(_eventInterface: 'MouseEvent' | 'MouseEvents'): IMouseEvent;
  public createEvent(_eventInterface: 'MutationEvent' | 'MutationEvents'): IMutationEvent;
  public createEvent(_eventInterface: 'OfflineAudioCompletionEvent'): IOfflineAudioCompletionEvent;
  public createEvent(_eventInterface: 'OverflowEvent'): IOverflowEvent;
  public createEvent(_eventInterface: 'PageTransitionEvent'): IPageTransitionEvent;
  public createEvent(_eventInterface: 'PaymentRequestUpdateEvent'): IPaymentRequestUpdateEvent;
  public createEvent(_eventInterface: 'PermissionRequestedEvent'): IPermissionRequestedEvent;
  public createEvent(_eventInterface: 'PointerEvent'): IPointerEvent;
  public createEvent(_eventInterface: 'PopStateEvent'): IPopStateEvent;
  public createEvent(_eventInterface: 'ProgressEvent'): IIProgressEvent;
  public createEvent(_eventInterface: 'PromiseRejectionEvent'): IPromiseRejectionEvent;
  public createEvent(_eventInterface: 'RTCDTMFToneChangeEvent'): IRTCDTMFToneChangeEvent;
  public createEvent(_eventInterface: 'RTCDataChannelEvent'): IRTCDataChannelEvent;
  public createEvent(_eventInterface: 'RTCDtlsTransportStateChangedEvent'): IRTCDtlsTransportStateChangedEvent;
  public createEvent(_eventInterface: 'RTCErrorEvent'): IRTCErrorEvent;
  public createEvent(_eventInterface: 'RTCIceCandidatePairChangedEvent'): IRTCIceCandidatePairChangedEvent;
  public createEvent(_eventInterface: 'RTCIceGathererEvent'): IRTCIceGathererEvent;
  public createEvent(_eventInterface: 'RTCIceTransportStateChangedEvent'): IRTCIceTransportStateChangedEvent;
  public createEvent(_eventInterface: 'RTCPeerConnectionIceErrorEvent'): IRTCPeerConnectionIceErrorEvent;
  public createEvent(_eventInterface: 'RTCPeerConnectionIceEvent'): IRTCPeerConnectionIceEvent;
  public createEvent(_eventInterface: 'RTCSsrcConflictEvent'): IRTCSsrcConflictEvent;
  public createEvent(_eventInterface: 'RTCStatsEvent'): IRTCStatsEvent;
  public createEvent(_eventInterface: 'RTCTrackEvent'): IRTCTrackEvent;
  public createEvent(_eventInterface: 'SVGZoomEvent' | 'SVGZoomEvents'): ISVGZoomEvent;
  public createEvent(_eventInterface: 'SecurityPolicyViolationEvent'): ISecurityPolicyViolationEvent;
  public createEvent(_eventInterface: 'ServiceWorkerMessageEvent'): IServiceWorkerMessageEvent;
  public createEvent(_eventInterface: 'SpeechRecognitionError'): ISpeechRecognitionError;
  public createEvent(_eventInterface: 'SpeechRecognitionEvent'): ISpeechRecognitionEvent;
  public createEvent(_eventInterface: 'SpeechSynthesisErrorEvent'): ISpeechSynthesisErrorEvent;
  public createEvent(_eventInterface: 'SpeechSynthesisEvent'): ISpeechSynthesisEvent;
  public createEvent(_eventInterface: 'StorageEvent'): IStorageEvent;
  public createEvent(_eventInterface: 'TextEvent'): ITextEvent;
  public createEvent(_eventInterface: 'TouchEvent'): ITouchEvent;
  public createEvent(_eventInterface: 'TrackEvent'): ITrackEvent;
  public createEvent(_eventInterface: 'TransitionEvent'): ITransitionEvent;
  public createEvent(_eventInterface: 'UIEvent' | 'UIEvents'): IUIEvent;
  public createEvent(_eventInterface: 'VRDisplayEvent' | 'VRDisplayEvent '): IVRDisplayEvent;
  public createEvent(_eventInterface: 'WebGLContextEvent'): IWebGLContextEvent;
  public createEvent(_eventInterface: 'WheelEvent'): IWheelEvent;
  public createEvent(_eventInterface: string): IEvent {
    throw new Error('Method not implemented.');
  }

  public createNodeIterator(_root: INode, _whatToShow?: number, _filter?: INodeFilter | null): INodeIterator {
    throw new Error('Method not implemented.');
  }

  public createProcessingInstruction(target: string, data: string): ProcessingInstruction {
    const processingInstruction = new ProcessingInstruction() as IMutable<ProcessingInstruction>;
    processingInstruction.nodeName = target;
    processingInstruction.target = target;
    processingInstruction.ownerDocument = this;
    processingInstruction.nodeValue = processingInstruction.data = data;
    return processingInstruction as ProcessingInstruction;
  }

  public createRange(): IRange {
    throw new Error('Method not implemented.');
  }

  public createTextNode(data: string): IText {
    const text = new Text() as IMutable<Text>;
    text.ownerDocument = this;
    text.appendData(data);
    return text as Text;
  }

  public createTreeWalker(_root: INode, _whatToShow?: number, _filter?: INodeFilter | null): ITreeWalker {
    throw new Error('Method not implemented.');
  }

  public get documentElement() {
    for (let i = 0; i < this.childNodes.length; i += 1) {
      const childNode = this.childNodes.item(i);
      if (childNode.nodeType === NODE_TYPE.ELEMENT_NODE) {
        return childNode as HTMLElement;
      }
    }
    return null as never;
  }

  public elementFromPoint(_x: number, _y: number): IElement | null {
    throw new Error('Method not implemented.');
  }

  public elementsFromPoint(_x: number, _y: number): IElement[] {
    throw new Error('Method not implemented.');
  }
  public execCommand(_commandId: string, _showUI?: boolean, _value?: string): boolean {
    throw new Error('Method not implemented.');
  }

  public exitFullscreen(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public exitPointerLock(): void {
    throw new Error('Method not implemented.');
  }

  public getAnimations(): IAnimation[] {
    throw new Error('Method not implemented.');
  }

  public getElementById(elementId: string): IHTMLElement | null {
    let rtv: IElement | null = null;
    _visitNode(this.documentElement, (node: INode) => {
      if (isElement(node)) {
        if ((node as IElement).getAttribute('id') === elementId) {
          rtv = node as IElement;
          return true;
        }
      }
    });
    return rtv;
  }

  public getElementsByClassName(_classNames: string): IHTMLCollectionOf<IElement> {
    throw new Error('Method not implemented.');
  }

  public getElementsByName(_elementName: string): NodeListOf<IHTMLElement> {
    throw new Error('Method not implemented.');
  }

  public getElementsByTagName<K extends keyof IHTMLElementTagNameMap>(
    qualifiedName: K,
  ): IHTMLCollectionOf<IHTMLElementTagNameMap[K]>;
  public getElementsByTagName<K extends keyof ISVGElementTagNameMap>(
    qualifiedName: K,
  ): IHTMLCollectionOf<ISVGElementTagNameMap[K]>;
  public getElementsByTagName(qualifiedName: string): IHTMLCollectionOf<IElement> {
    const ls: IElement[] = [];
    _visitNode(this, node => {
      if (node !== this && isElement(node) && (qualifiedName === '*' || node.tagName === qualifiedName)) {
        ls.push(node);
      }
    });
    return new HTMLCollectionOf<IElement>(...ls);
  }

  public getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string,
  ): IHTMLCollectionOf<IHTMLElement>;
  public getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string,
  ): IHTMLCollectionOf<ISVGElement>;
  public getElementsByTagNameNS(namespaceURI: string, localName: string): IHTMLCollectionOf<IElement> {
    const ls: IElement[] = [];
    _visitNode(this, node => {
      if (
        node !== this &&
        isElement(node) &&
        (namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
        (localName === '*' || node.localName === localName)
      ) {
        ls.push(node);
      }
    });
    return new HTMLCollectionOf<IElement>(...ls);
  }

  public getSelection(): ISelection | null {
    throw new Error('Method not implemented.');
  }

  public hasFocus(): boolean {
    throw new Error('Method not implemented.');
  }

  public importNode<T extends INode>(importedNode: T, deep: boolean): T {
    let node2: IMutable<T> | undefined;

    if (isElement(importedNode)) {
      node2 = importedNode.cloneNode(false) as IMutable<T>;
      node2.ownerDocument = this;
    } else if (isAttr(importedNode)) {
      deep = true;
    }

    if (!node2) {
      node2 = importedNode.cloneNode(false) as IMutable<T>; // false
    }
    node2.ownerDocument = this;
    node2.parentNode = null;
    if (deep) {
      let child = importedNode.firstChild;
      while (child) {
        node2.appendChild(this.importNode(child, deep));
        child = child.nextSibling;
      }
    }
    return node2;
  }

  public open(_url?: string, _name?: string, _features?: string, _replace?: boolean): Document {
    throw new Error('Method not implemented.');
  }

  public queryCommandEnabled(_commandId: string): boolean {
    throw new Error('Method not implemented.');
  }

  public queryCommandIndeterm(_commandId: string): boolean {
    throw new Error('Method not implemented.');
  }

  public queryCommandState(_commandId: string): boolean {
    throw new Error('Method not implemented.');
  }

  public queryCommandSupported(_commandId: string): boolean {
    throw new Error('Method not implemented.');
  }

  public queryCommandValue(_commandId: string): string {
    throw new Error('Method not implemented.');
  }

  public write(..._text: string[]): void {
    throw new Error('Method not implemented.');
  }

  public writeln(..._text: string[]): void {
    throw new Error('Method not implemented.');
  }

  public addEventListener<K extends keyof IDocumentEventMap>(
    _type: K,
    _listener: (this: Document, ev: IDocumentEventMap[K]) => any,
    _options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject,
    _options?: boolean | IAddEventListenerOptions,
  ): void {
    throw new Error('Method not implemented.');
  }

  public removeEventListener<K extends keyof IDocumentEventMap>(
    _type: K,
    _listener: (this: Document, ev: IDocumentEventMap[K]) => any,
    _options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    _type: string,
    _listener: IEventListenerOrEventListenerObject,
    _options?: boolean | IEventListenerOptions,
  ): void {
    throw new Error('Method not implemented.');
  }
}
