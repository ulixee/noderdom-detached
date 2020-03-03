import InternalHandler from '../InternalHandler';
import { IHTMLSlotElement, ISlotable } from '../interfaces';
export declare const getState: (instance: ISlotable) => any, setState: <P = ISlotableProperties>(instance: ISlotable, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: ISlotable, properties: IHiddenProperties) => void;
export declare const internalHandler: InternalHandler<ISlotable>;
export default class Slotable implements ISlotable {
    get assignedSlot(): IHTMLSlotElement | null;
}
export interface ISlotableProperties {
    assignedSlot?: IHTMLSlotElement | null;
}
export interface ISlotableReadonlyProperties {
    assignedSlot?: IHTMLSlotElement | null;
}
export declare const SlotablePropertyKeys: string[];
export declare const SlotableConstantKeys: never[];
