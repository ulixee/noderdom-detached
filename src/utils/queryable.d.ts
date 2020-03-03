import { IElement, INode, IHTMLCollection, IHTMLElement, ISVGElement } from '../../base/interfaces';
export declare function getElementsByClassName(root: INode, classNames: string): IHTMLCollection;
export declare function getElementsByTagName<T extends IElement = IElement>(root: INode, qualifiedName: string): IHTMLCollection<T>;
export declare function getElementsByTagNameNS<T extends IElement = IHTMLElement | ISVGElement>(root: INode, namespaceURI: string, localName: string): IHTMLCollection<T>;
