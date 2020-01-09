import { IElement, IHTMLCollection } from '../interfaces';

export default class HTMLCollection extends Array<IElement> implements IHTMLCollection {
  public item(index: number): IElement | null {
    return this[index];
  }

  public namedItem(name: string): IElement | null {
    let itemWithName;
    for (const item of this) {
      if (item.id === name) {
        return item;
      }
      if ((item as any).name === name) {
        itemWithName = item;
      }
    }
    return itemWithName ? itemWithName : null;
  }
}
