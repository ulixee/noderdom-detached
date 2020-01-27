import BaseText, { setTextRps } from '../../base/classes/Text';
import NODE_TYPE from '../constants/NodeType';
import { IText, IHTMLSlotElement } from '../../base/interfaces';

export default class Text extends BaseText implements IText {
  public readonly assignedSlot: IHTMLSlotElement | null;
  public readonly wholeText: string;

  constructor(data?: string) {
    super();
    setTextRps(this, {
      nodeName: '#text',
      nodeType: NODE_TYPE.TEXT_NODE,
    });
    this.wholeText = data || '';
  }

  public splitText(offset: number): IText {
    let text = this.data;
    const newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    const newTextNode = this.ownerDocument!.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newTextNode, this.nextSibling);
    }
    return newTextNode;
  }
}

export { setTextRps };
