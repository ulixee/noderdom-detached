import InternalHandler from '../InternalHandler';
import { IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMImplementation, IDocumentType, IElement, ILocation, IDocumentReadyState, IHTMLElement, IHTMLHeadElement, IHTMLCollection, IHTMLScriptElement, IWindowProxy, IVisibilityState, IElementCreationOptions, IDocumentFragment, IText, ICDATASection, IComment, IProcessingInstruction, INode, IAttr, IEvent, IRange, INodeFilter, INodeIterator, ITreeWalker, INodeList, IDocument, ISelection } from '../interfaces';
import Node, { INodeRps, rpNodeKeys } from './Node';
import DocumentOrShadowRoot, { IDocumentOrShadowRootRps, rpDocumentOrShadowRootKeys } from '../mixins/DocumentOrShadowRoot';
import GlobalEventHandlers, { IGlobalEventHandlersRps, rpGlobalEventHandlersKeys } from '../mixins/GlobalEventHandlers';
import NonElementParentNode, { INonElementParentNodeRps, rpNonElementParentNodeKeys } from '../mixins/NonElementParentNode';
import ParentNode, { IParentNodeRps, rpParentNodeKeys } from '../mixins/ParentNode';

// tslint:disable-next-line:variable-name
const DocumentBase = DocumentOrShadowRoot(GlobalEventHandlers(NonElementParentNode(ParentNode(Node))));

export default class Document extends DocumentBase implements IDocument {
  protected readonly _: IDocumentRps = {};

  // properties

  public get URL(): string {
    return InternalHandler.get<Document, string>(this, 'URL');
  }

  public get anchors(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'anchors');
  }

  public get applets(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'applets');
  }

  public get body(): IHTMLElement | null {
    return InternalHandler.get<Document, IHTMLElement | null>(this, 'body');
  }

  public set body(value: IHTMLElement | null) {
    InternalHandler.set<Document, IHTMLElement | null>(this, 'body', value);
  }

  public get characterSet(): string {
    return InternalHandler.get<Document, string>(this, 'characterSet');
  }

  public get charset(): string {
    return InternalHandler.get<Document, string>(this, 'charset');
  }

  public get compatMode(): string {
    return InternalHandler.get<Document, string>(this, 'compatMode');
  }

  public get contentType(): string {
    return InternalHandler.get<Document, string>(this, 'contentType');
  }

  public get cookie(): string {
    return InternalHandler.get<Document, string>(this, 'cookie');
  }

  public set cookie(value: string) {
    InternalHandler.set<Document, string>(this, 'cookie', value);
  }

  public get currentScript(): IHTMLScriptElement | null {
    return InternalHandler.get<Document, IHTMLScriptElement | null>(this, 'currentScript');
  }

  public get defaultView(): IWindowProxy | null {
    return InternalHandler.get<Document, IWindowProxy | null>(this, 'defaultView');
  }

  public get dir(): string {
    return InternalHandler.get<Document, string>(this, 'dir');
  }

  public set dir(value: string) {
    InternalHandler.set<Document, string>(this, 'dir', value);
  }

  public get doctype(): IDocumentType | null {
    return InternalHandler.get<Document, IDocumentType | null>(this, 'doctype');
  }

  public get documentElement(): IElement | null {
    return InternalHandler.get<Document, IElement | null>(this, 'documentElement');
  }

  public get documentURI(): string {
    return InternalHandler.get<Document, string>(this, 'documentURI');
  }

  public get embeds(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'embeds');
  }

  public get forms(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'forms');
  }

  public get head(): IHTMLHeadElement | null {
    return InternalHandler.get<Document, IHTMLHeadElement | null>(this, 'head');
  }

  public get hidden(): boolean {
    return InternalHandler.get<Document, boolean>(this, 'hidden');
  }

  public get images(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'images');
  }

  public get implementation(): IDOMImplementation {
    return InternalHandler.get<Document, IDOMImplementation>(this, 'implementation');
  }

  public get inputEncoding(): string {
    return InternalHandler.get<Document, string>(this, 'inputEncoding');
  }

  public get lastModified(): string {
    return InternalHandler.get<Document, string>(this, 'lastModified');
  }

  public get links(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'links');
  }

  public get location(): ILocation | null {
    return InternalHandler.get<Document, ILocation | null>(this, 'location');
  }

  public get onreadystatechange(): ((this: IDocument, ev: IEvent) => any) | null {
    return InternalHandler.get<Document, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onreadystatechange');
  }

  public set onreadystatechange(value: ((this: IDocument, ev: IEvent) => any) | null) {
    InternalHandler.set<Document, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onreadystatechange', value);
  }

  public get onvisibilitychange(): ((this: IDocument, ev: IEvent) => any) | null {
    return InternalHandler.get<Document, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onvisibilitychange');
  }

  public set onvisibilitychange(value: ((this: IDocument, ev: IEvent) => any) | null) {
    InternalHandler.set<Document, ((this: IDocument, ev: IEvent) => any) | null>(this, 'onvisibilitychange', value);
  }

  public get plugins(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'plugins');
  }

  public get readyState(): IDocumentReadyState {
    return InternalHandler.get<Document, IDocumentReadyState>(this, 'readyState');
  }

  public get referrer(): string {
    return InternalHandler.get<Document, string>(this, 'referrer');
  }

  public get scripts(): IHTMLCollection {
    return InternalHandler.get<Document, IHTMLCollection>(this, 'scripts');
  }

  public get title(): string {
    return InternalHandler.get<Document, string>(this, 'title');
  }

  public set title(value: string) {
    InternalHandler.set<Document, string>(this, 'title', value);
  }

  public get visibilityState(): IVisibilityState {
    return InternalHandler.get<Document, IVisibilityState>(this, 'visibilityState');
  }

  // methods

  public adoptNode(node: INode): INode {
    return InternalHandler.run<Document, INode>(this, 'adoptNode', [node]);
  }

  public captureEvents(): void {
    InternalHandler.run<Document, void>(this, 'captureEvents', []);
  }

  public clear(): void {
    InternalHandler.run<Document, void>(this, 'clear', []);
  }

  public close(): void {
    InternalHandler.run<Document, void>(this, 'close', []);
  }

  public createAttribute(localName: string): IAttr {
    return InternalHandler.run<Document, IAttr>(this, 'createAttribute', [localName]);
  }

  public createAttributeNS(namespace: string | null, qualifiedName: string): IAttr {
    return InternalHandler.run<Document, IAttr>(this, 'createAttributeNS', [namespace, qualifiedName]);
  }

  public createCDATASection(data: string): ICDATASection {
    return InternalHandler.run<Document, ICDATASection>(this, 'createCDATASection', [data]);
  }

  public createComment(data: string): IComment {
    return InternalHandler.run<Document, IComment>(this, 'createComment', [data]);
  }

  public createDocumentFragment(): IDocumentFragment {
    return InternalHandler.run<Document, IDocumentFragment>(this, 'createDocumentFragment', []);
  }

  public createElement(localName: string, options?: IElementCreationOptions): IElement {
    return InternalHandler.run<Document, IElement>(this, 'createElement', [localName, options]);
  }

  public createElementNS(namespace: string | null, qualifiedName: string, options?: IElementCreationOptions): IElement {
    return InternalHandler.run<Document, IElement>(this, 'createElementNS', [namespace, qualifiedName, options]);
  }

  public createEvent(eventInterface: string): IEvent {
    return InternalHandler.run<Document, IEvent>(this, 'createEvent', [eventInterface]);
  }

  public createNodeIterator(root: INode, whatToShow?: number, filter?: INodeFilter | null): INodeIterator {
    return InternalHandler.run<Document, INodeIterator>(this, 'createNodeIterator', [root, whatToShow, filter]);
  }

  public createProcessingInstruction(target: string, data: string): IProcessingInstruction {
    return InternalHandler.run<Document, IProcessingInstruction>(this, 'createProcessingInstruction', [target, data]);
  }

  public createRange(): IRange {
    return InternalHandler.run<Document, IRange>(this, 'createRange', []);
  }

  public createTextNode(data: string): IText {
    return InternalHandler.run<Document, IText>(this, 'createTextNode', [data]);
  }

  public createTreeWalker(root: INode, whatToShow?: number, filter?: INodeFilter | null): ITreeWalker {
    return InternalHandler.run<Document, ITreeWalker>(this, 'createTreeWalker', [root, whatToShow, filter]);
  }

  public getElementsByClassName(classNames: string): IHTMLCollection {
    return InternalHandler.run<Document, IHTMLCollection>(this, 'getElementsByClassName', [classNames]);
  }

  public getElementsByName(elementName: string): INodeList {
    return InternalHandler.run<Document, INodeList>(this, 'getElementsByName', [elementName]);
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection {
    return InternalHandler.run<Document, IHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
    return InternalHandler.run<Document, IHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
  }

  public getSelection(): ISelection | null {
    return InternalHandler.run<Document, ISelection | null>(this, 'getSelection', []);
  }

  public hasFocus(): boolean {
    return InternalHandler.run<Document, boolean>(this, 'hasFocus', []);
  }

  public importNode(node: INode, deep?: boolean): INode {
    return InternalHandler.run<Document, INode>(this, 'importNode', [node, deep]);
  }

  public open(type?: string, replace?: string): IDocument {
    return InternalHandler.run<Document, IDocument>(this, 'open', [type, replace]);
  }

  public releaseEvents(): void {
    InternalHandler.run<Document, void>(this, 'releaseEvents', []);
  }

  public write(...text: string[]): void {
    InternalHandler.run<Document, void>(this, 'write', [text]);
  }

  public writeln(...text: string[]): void {
    InternalHandler.run<Document, void>(this, 'writeln', [text]);
  }

  public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<Document, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<Document, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDocumentKeys: Set<string> = new Set([...rpNodeKeys, ...rpDocumentOrShadowRootKeys, ...rpGlobalEventHandlersKeys, ...rpNonElementParentNodeKeys, ...rpParentNodeKeys]);

export interface IDocumentRps extends INodeRps, IDocumentOrShadowRootRps, IGlobalEventHandlersRps, INonElementParentNodeRps, IParentNodeRps {
  readonly URL?: string;
  readonly anchors?: IHTMLCollection;
  readonly applets?: IHTMLCollection;
  readonly characterSet?: string;
  readonly charset?: string;
  readonly compatMode?: string;
  readonly contentType?: string;
  readonly currentScript?: IHTMLScriptElement | null;
  readonly defaultView?: IWindowProxy | null;
  readonly doctype?: IDocumentType | null;
  readonly documentElement?: IElement | null;
  readonly documentURI?: string;
  readonly embeds?: IHTMLCollection;
  readonly forms?: IHTMLCollection;
  readonly head?: IHTMLHeadElement | null;
  readonly hidden?: boolean;
  readonly images?: IHTMLCollection;
  readonly implementation?: IDOMImplementation;
  readonly inputEncoding?: string;
  readonly lastModified?: string;
  readonly links?: IHTMLCollection;
  readonly location?: ILocation | null;
  readonly plugins?: IHTMLCollection;
  readonly readyState?: IDocumentReadyState;
  readonly referrer?: string;
  readonly scripts?: IHTMLCollection;
  readonly visibilityState?: IVisibilityState;
}

export function setDocumentRps(instance: IDocument, data: IDocumentRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpDocumentKeys.has(key)) {
      throw new Error(`${key} is not a property of Document`);
    }
    properties[key] = value;
  });
}
