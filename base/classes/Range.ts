import InternalHandler from '../InternalHandler';
import { INode, IRange, IDocumentFragment } from '../interfaces';
import AbstractRange, { IAbstractRangeRps, rpAbstractRangeKeys } from './AbstractRange';

export default class Range extends AbstractRange implements IRange {
  public static readonly END_TO_END: number = 2;
  public static readonly END_TO_START: number = 3;
  public static readonly START_TO_END: number = 1;
  public static readonly START_TO_START: number = 0;

  public readonly END_TO_END: number = 2;
  public readonly END_TO_START: number = 3;
  public readonly START_TO_END: number = 1;
  public readonly START_TO_START: number = 0;

  // store readonly properties

  protected readonly _: IRangeRps = {};

  // properties

  public get commonAncestorContainer(): INode {
    return InternalHandler.get<Range, INode>(this, 'commonAncestorContainer');
  }

  // methods

  public cloneContents(): IDocumentFragment {
    return InternalHandler.run<Range, IDocumentFragment>(this, 'cloneContents', []);
  }

  public cloneRange(): IRange {
    return InternalHandler.run<Range, IRange>(this, 'cloneRange', []);
  }

  public collapse(toStart?: boolean): void {
    InternalHandler.run<Range, void>(this, 'collapse', [toStart]);
  }

  public compareBoundaryPoints(how: number, sourceRange: IRange): number {
    return InternalHandler.run<Range, number>(this, 'compareBoundaryPoints', [how, sourceRange]);
  }

  public comparePoint(node: INode, offset: number): number {
    return InternalHandler.run<Range, number>(this, 'comparePoint', [node, offset]);
  }

  public createContextualFragment(fragment: string): IDocumentFragment {
    return InternalHandler.run<Range, IDocumentFragment>(this, 'createContextualFragment', [fragment]);
  }

  public deleteContents(): void {
    InternalHandler.run<Range, void>(this, 'deleteContents', []);
  }

  public detach(): void {
    InternalHandler.run<Range, void>(this, 'detach', []);
  }

  public extractContents(): IDocumentFragment {
    return InternalHandler.run<Range, IDocumentFragment>(this, 'extractContents', []);
  }

  public insertNode(node: INode): void {
    InternalHandler.run<Range, void>(this, 'insertNode', [node]);
  }

  public intersectsNode(node: INode): boolean {
    return InternalHandler.run<Range, boolean>(this, 'intersectsNode', [node]);
  }

  public isPointInRange(node: INode, offset: number): boolean {
    return InternalHandler.run<Range, boolean>(this, 'isPointInRange', [node, offset]);
  }

  public selectNode(node: INode): void {
    InternalHandler.run<Range, void>(this, 'selectNode', [node]);
  }

  public selectNodeContents(node: INode): void {
    InternalHandler.run<Range, void>(this, 'selectNodeContents', [node]);
  }

  public setEnd(node: INode, offset: number): void {
    InternalHandler.run<Range, void>(this, 'setEnd', [node, offset]);
  }

  public setEndAfter(node: INode): void {
    InternalHandler.run<Range, void>(this, 'setEndAfter', [node]);
  }

  public setEndBefore(node: INode): void {
    InternalHandler.run<Range, void>(this, 'setEndBefore', [node]);
  }

  public setStart(node: INode, offset: number): void {
    InternalHandler.run<Range, void>(this, 'setStart', [node, offset]);
  }

  public setStartAfter(node: INode): void {
    InternalHandler.run<Range, void>(this, 'setStartAfter', [node]);
  }

  public setStartBefore(node: INode): void {
    InternalHandler.run<Range, void>(this, 'setStartBefore', [node]);
  }

  public surroundContents(newParent: INode): void {
    InternalHandler.run<Range, void>(this, 'surroundContents', [newParent]);
  }

  public toString(): string {
    return InternalHandler.run<Range, string>(this, 'string', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpRangeKeys: Set<string> = new Set([...rpAbstractRangeKeys]);

export interface IRangeRps extends IAbstractRangeRps {
  readonly commonAncestorContainer?: INode;
}

export function setRangeRps(instance: IRange, data: IRangeRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpRangeKeys.has(key)) {
      throw new Error(`${key} is not a property of Range`);
    }
    properties[key] = value;
  });
}
