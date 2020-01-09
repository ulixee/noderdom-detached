import { IHTMLSlotElement, ISlotable } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Slotable<TBase extends Constructor>(base: TBase) {
  return class extends base implements ISlotable {
    public readonly assignedSlot: IHTMLSlotElement | null;
  };
}
