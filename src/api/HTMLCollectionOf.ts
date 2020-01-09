import { IHTMLCollectionOf, IElement } from '../interfaces';

export default class HTMLCollectionOf<T extends IElement> extends Array<T> implements IHTMLCollectionOf<T> {
  public item(index: number): T | null {
    return this[index];
  }

  public namedItem(name: string): T | null {
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
