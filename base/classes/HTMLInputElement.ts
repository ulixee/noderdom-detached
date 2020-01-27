import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IFileList, IHTMLElement, IValidityState, INodeList, ISelectionMode, IHTMLInputElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLInputElement extends HTMLElement implements IHTMLInputElement {
  protected readonly _: IHTMLInputElementRps = {};

  // properties

  public get accept(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'accept');
  }

  public set accept(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'accept', value);
  }

  public get align(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'align', value);
  }

  public get alt(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'alt');
  }

  public set alt(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'alt', value);
  }

  public get autocomplete(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'autocomplete');
  }

  public set autocomplete(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'autocomplete', value);
  }

  public get autofocus(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'autofocus');
  }

  public set autofocus(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'autofocus', value);
  }

  public get checked(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'checked');
  }

  public set checked(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'checked', value);
  }

  public get defaultChecked(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'defaultChecked');
  }

  public set defaultChecked(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'defaultChecked', value);
  }

  public get defaultValue(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'defaultValue');
  }

  public set defaultValue(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'defaultValue', value);
  }

  public get dirName(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'dirName');
  }

  public set dirName(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'dirName', value);
  }

  public get disabled(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'disabled');
  }

  public set disabled(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'disabled', value);
  }

  public get files(): IFileList | null {
    return InternalHandler.get<HTMLInputElement, IFileList | null>(this, 'files');
  }

  public set files(value: IFileList | null) {
    InternalHandler.set<HTMLInputElement, IFileList | null>(this, 'files', value);
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<HTMLInputElement, IHTMLFormElement | null>(this, 'form');
  }

  public get formNoValidate(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'formNoValidate');
  }

  public set formNoValidate(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'formNoValidate', value);
  }

  public get formTarget(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'formTarget');
  }

  public set formTarget(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'formTarget', value);
  }

  public get indeterminate(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'indeterminate');
  }

  public set indeterminate(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'indeterminate', value);
  }

  public get inputMode(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'inputMode');
  }

  public set inputMode(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'inputMode', value);
  }

  public get labels(): INodeList | null {
    return InternalHandler.get<HTMLInputElement, INodeList | null>(this, 'labels');
  }

  public get list(): IHTMLElement | null {
    return InternalHandler.get<HTMLInputElement, IHTMLElement | null>(this, 'list');
  }

  public get max(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'max');
  }

  public set max(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'max', value);
  }

  public get maxLength(): number {
    return InternalHandler.get<HTMLInputElement, number>(this, 'maxLength');
  }

  public set maxLength(value: number) {
    InternalHandler.set<HTMLInputElement, number>(this, 'maxLength', value);
  }

  public get min(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'min');
  }

  public set min(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'min', value);
  }

  public get minLength(): number {
    return InternalHandler.get<HTMLInputElement, number>(this, 'minLength');
  }

  public set minLength(value: number) {
    InternalHandler.set<HTMLInputElement, number>(this, 'minLength', value);
  }

  public get multiple(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'multiple');
  }

  public set multiple(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'multiple', value);
  }

  public get name(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'name', value);
  }

  public get pattern(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'pattern');
  }

  public set pattern(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'pattern', value);
  }

  public get placeholder(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'placeholder');
  }

  public set placeholder(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'placeholder', value);
  }

  public get readOnly(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'readOnly');
  }

  public set readOnly(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'readOnly', value);
  }

  public get required(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'required');
  }

  public set required(value: boolean) {
    InternalHandler.set<HTMLInputElement, boolean>(this, 'required', value);
  }

  public get selectionDirection(): string | null {
    return InternalHandler.get<HTMLInputElement, string | null>(this, 'selectionDirection');
  }

  public set selectionDirection(value: string | null) {
    InternalHandler.set<HTMLInputElement, string | null>(this, 'selectionDirection', value);
  }

  public get selectionEnd(): number | null {
    return InternalHandler.get<HTMLInputElement, number | null>(this, 'selectionEnd');
  }

  public set selectionEnd(value: number | null) {
    InternalHandler.set<HTMLInputElement, number | null>(this, 'selectionEnd', value);
  }

  public get selectionStart(): number | null {
    return InternalHandler.get<HTMLInputElement, number | null>(this, 'selectionStart');
  }

  public set selectionStart(value: number | null) {
    InternalHandler.set<HTMLInputElement, number | null>(this, 'selectionStart', value);
  }

  public get size(): number {
    return InternalHandler.get<HTMLInputElement, number>(this, 'size');
  }

  public set size(value: number) {
    InternalHandler.set<HTMLInputElement, number>(this, 'size', value);
  }

  public get src(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'src', value);
  }

  public get step(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'step');
  }

  public set step(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'step', value);
  }

  public get type(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'type', value);
  }

  public get useMap(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'useMap');
  }

  public set useMap(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'useMap', value);
  }

  public get validationMessage(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'validationMessage');
  }

  public get validity(): IValidityState {
    return InternalHandler.get<HTMLInputElement, IValidityState>(this, 'validity');
  }

  public get value(): string {
    return InternalHandler.get<HTMLInputElement, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<HTMLInputElement, string>(this, 'value', value);
  }

  public get valueAsDate(): any {
    return InternalHandler.get<HTMLInputElement, any>(this, 'valueAsDate');
  }

  public set valueAsDate(value: any) {
    InternalHandler.set<HTMLInputElement, any>(this, 'valueAsDate', value);
  }

  public get valueAsNumber(): number {
    return InternalHandler.get<HTMLInputElement, number>(this, 'valueAsNumber');
  }

  public set valueAsNumber(value: number) {
    InternalHandler.set<HTMLInputElement, number>(this, 'valueAsNumber', value);
  }

  public get willValidate(): boolean {
    return InternalHandler.get<HTMLInputElement, boolean>(this, 'willValidate');
  }

  // methods

  public checkValidity(): boolean {
    return InternalHandler.run<HTMLInputElement, boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): boolean {
    return InternalHandler.run<HTMLInputElement, boolean>(this, 'reportValidity', []);
  }

  public select(): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'select', []);
  }

  public setCustomValidity(error: string): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'setCustomValidity', [error]);
  }

  public setRangeText(replacement: string): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'setRangeText', [replacement]);
  }

  public setRangeText(replacement: string, start: number, end: number, selectionMode?: ISelectionMode): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'setRangeText', [replacement, start, end, selectionMode]);
  }

  public setSelectionRange(start: number, end: number, direction?: string): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'setSelectionRange', [start, end, direction]);
  }

  public stepDown(n?: number): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'stepDown', [n]);
  }

  public stepUp(n?: number): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'stepUp', [n]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<HTMLInputElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLInputElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLInputElementRps extends IHTMLElementRps {
  readonly form?: IHTMLFormElement | null;
  readonly labels?: INodeList | null;
  readonly list?: IHTMLElement | null;
  readonly validationMessage?: string;
  readonly validity?: IValidityState;
  readonly willValidate?: boolean;
}

export function setHTMLInputElementRps(instance: IHTMLInputElement, data: IHTMLInputElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLInputElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLInputElement`);
    }
    properties[key] = value;
  });
}
