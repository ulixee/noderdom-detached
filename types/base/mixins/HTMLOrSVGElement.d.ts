import InternalHandler from '../InternalHandler';
import { IDOMStringMap, IHTMLOrSVGElement } from '../interfaces';
export declare const getState: (instance: IHTMLOrSVGElement) => any, setState: <P = IHTMLOrSVGElementProperties>(instance: IHTMLOrSVGElement, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IHTMLOrSVGElement, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<IHTMLOrSVGElement>;
export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
    get dataset(): IDOMStringMap;
    get nonce(): string;
    set nonce(value: string);
    get tabIndex(): number;
    set tabIndex(value: number);
    blur(): void;
    focus(): void;
}
export interface IHTMLOrSVGElementProperties {
    dataset?: IDOMStringMap;
    nonce?: string;
    tabIndex?: number;
}
export interface IHTMLOrSVGElementReadonlyProperties {
    dataset?: IDOMStringMap;
}
export declare const HTMLOrSVGElementPropertyKeys: string[];
export declare const HTMLOrSVGElementConstantKeys: never[];
