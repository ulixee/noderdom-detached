import InternalHandler from '../InternalHandler';
import { INode, IRange, ISelection } from '../interfaces';

export default class Selection implements ISelection {
  protected readonly _: ISelectionRps = {};

  // properties

  public get anchorNode(): INode | null {
    return InternalHandler.get<Selection, INode | null>(this, 'anchorNode');
  }

  public get anchorOffset(): number {
    return InternalHandler.get<Selection, number>(this, 'anchorOffset');
  }

  public get focusNode(): INode | null {
    return InternalHandler.get<Selection, INode | null>(this, 'focusNode');
  }

  public get focusOffset(): number {
    return InternalHandler.get<Selection, number>(this, 'focusOffset');
  }

  public get isCollapsed(): boolean {
    return InternalHandler.get<Selection, boolean>(this, 'isCollapsed');
  }

  public get rangeCount(): number {
    return InternalHandler.get<Selection, number>(this, 'rangeCount');
  }

  public get type(): string {
    return InternalHandler.get<Selection, string>(this, 'type');
  }

  // methods

  public addRange(range: IRange): void {
    InternalHandler.run<Selection, void>(this, 'addRange', [range]);
  }

  public collapse(node: INode | null, offset?: number): void {
    InternalHandler.run<Selection, void>(this, 'collapse', [node, offset]);
  }

  public collapseToEnd(): void {
    InternalHandler.run<Selection, void>(this, 'collapseToEnd', []);
  }

  public collapseToStart(): void {
    InternalHandler.run<Selection, void>(this, 'collapseToStart', []);
  }

  public containsNode(node: INode, allowPartialContainment?: boolean): boolean {
    return InternalHandler.run<Selection, boolean>(this, 'containsNode', [node, allowPartialContainment]);
  }

  public deleteFromDocument(): void {
    InternalHandler.run<Selection, void>(this, 'deleteFromDocument', []);
  }

  public empty(): void {
    InternalHandler.run<Selection, void>(this, 'empty', []);
  }

  public extend(node: INode, offset?: number): void {
    InternalHandler.run<Selection, void>(this, 'extend', [node, offset]);
  }

  public getRangeAt(index: number): IRange {
    return InternalHandler.run<Selection, IRange>(this, 'getRangeAt', [index]);
  }

  public removeAllRanges(): void {
    InternalHandler.run<Selection, void>(this, 'removeAllRanges', []);
  }

  public removeRange(range: IRange): void {
    InternalHandler.run<Selection, void>(this, 'removeRange', [range]);
  }

  public selectAllChildren(node: INode): void {
    InternalHandler.run<Selection, void>(this, 'selectAllChildren', [node]);
  }

  public setBaseAndExtent(anchorNode: INode, anchorOffset: number, focusNode: INode, focusOffset: number): void {
    InternalHandler.run<Selection, void>(this, 'setBaseAndExtent', [anchorNode, anchorOffset, focusNode, focusOffset]);
  }

  public setPosition(node: INode | null, offset?: number): void {
    InternalHandler.run<Selection, void>(this, 'setPosition', [node, offset]);
  }

  public toString(): string {
    return InternalHandler.run<Selection, string>(this, 'string', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSelectionKeys: Set<string> = new Set([]);

export interface ISelectionRps {
  readonly anchorNode?: INode | null;
  readonly anchorOffset?: number;
  readonly focusNode?: INode | null;
  readonly focusOffset?: number;
  readonly isCollapsed?: boolean;
  readonly rangeCount?: number;
  readonly type?: string;
}

export function setSelectionRps(instance: ISelection, data: ISelectionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSelectionKeys.has(key)) {
      throw new Error(`${key} is not a property of Selection`);
    }
    properties[key] = value;
  });
}
