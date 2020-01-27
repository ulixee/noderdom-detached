import BaseHTMLCollection from '../../base/classes/HTMLCollection';
import { IElement, IHTMLCollection } from '../../base/interfaces';

export default class HTMLCollection extends BaseHTMLCollection implements IHTMLCollection {
  private _data: IElement[] = [];

  constructor() {
    super();
    return new Proxy(this, {
      get(target: any, prop: string) {
        throw new Error('property not implemene');
      },
    });
  }

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

  public *[Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if ( nextIndex < this.end ) {
          let result = { value: nextIndex,  done: false }
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      }
    }
  }
}
