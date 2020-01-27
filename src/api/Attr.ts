import BaseAttr, { setAttrRps } from '../../base/classes/Attr';
import { IAttr } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class Attr extends BaseAttr implements IAttr {
  constructor() {
    super();
    setAttrRps(this, {
      nodeType: NODE_TYPE.ATTRIBUTE_NODE,
    });
  }

  public get value(): string {
    return this.nodeValue || '';
  }

  public set value(value: string) {
    this.nodeValue = value;
  }
}

export { setAttrRps };
