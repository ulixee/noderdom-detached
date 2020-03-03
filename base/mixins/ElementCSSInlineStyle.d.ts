import InternalHandler from '../InternalHandler';
import { ICSSStyleDeclaration, IElementCSSInlineStyle } from '../interfaces';
export declare const getState: (instance: IElementCSSInlineStyle) => any, setState: <P = IElementCSSInlineStyleProperties>(instance: IElementCSSInlineStyle, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IElementCSSInlineStyle, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<IElementCSSInlineStyle>;
export default class ElementCSSInlineStyle implements IElementCSSInlineStyle {
    get style(): ICSSStyleDeclaration;
}
export interface IElementCSSInlineStyleProperties {
    style?: ICSSStyleDeclaration;
}
export interface IElementCSSInlineStyleReadonlyProperties {
    style?: ICSSStyleDeclaration;
}
export declare const ElementCSSInlineStylePropertyKeys: string[];
export declare const ElementCSSInlineStyleConstantKeys: never[];
