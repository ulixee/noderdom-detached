import { ICharacterData } from '../interfaces';
import ChildishNode from './ChildishNode';
import NonDocumentTypeChildNode from './NonDocumentTypeChildNode';
import DOMNode, { IInit as INodeInit } from './Node';

// tslint:disable-next-line:variable-name
const CharacterDataBase = ChildishNode(NonDocumentTypeChildNode(DOMNode));

export default class CharacterData extends CharacterDataBase implements ICharacterData {
  public data: string = '';
  protected _length: number = 0;

  public get length() {
    return this._length;
  }

  constructor(props: INodeInit) {
    super(props);
  }

  public appendData(data: string): void {
    const appendedData = this.data + data;
    this.nodeValue = this.data = appendedData;
    this._length = appendedData.length;
  }

  public deleteData(offset: number, count: number): void {
    this.replaceData(offset, count, '');
  }

  public insertData(offset: number, data: string): void {
    this.replaceData(offset, 0, data);
  }

  public replaceData(offset: number, count: number, data: string): void {
    const start = this.data.substring(0, offset);
    const end = this.data.substring(offset + count);
    const replacedData = start + data + end;
    this.nodeValue = this.data = replacedData;
    this._length = replacedData.length;
  }

  public substringData(offset: number, count: number): string {
    return this.data.substring(offset, offset + count);
  }
}
