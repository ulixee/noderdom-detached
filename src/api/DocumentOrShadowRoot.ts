import { ICaretPosition, IDocumentOrShadowRoot, IElement, ISelection, IStyleSheetList } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function DocumentOrShadowRoot<TBase extends Constructor>(base: TBase) {
  return class extends base implements IDocumentOrShadowRoot {
    public readonly activeElement: IElement | null;
    public readonly fullscreenElement: IElement | null;
    public readonly pointerLockElement: IElement | null;
    public readonly styleSheets: IStyleSheetList;

    public caretPositionFromPoint(_x: number, _y: number): ICaretPosition | null {
      throw new Error('Method not implemented.');
    }

    public elementFromPoint(_x: number, _y: number): IElement | null {
      throw new Error('Method not implemented.');
    }

    public elementsFromPoint(_x: number, _y: number): IElement[] {
      throw new Error('Method not implemented.');
    }

    public getSelection(): ISelection | null {
      throw new Error('Method not implemented.');
    }
  };
}
