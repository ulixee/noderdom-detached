import Slotable from './Slotable';
import CharacterData from './CharacterData';
import NODE_TYPE from '../constants/NodeType';
import { IText, IHTMLSlotElement } from '../interfaces';

// tslint:disable-next-line:variable-name
const TextBase = Slotable(CharacterData);

export default class Text extends TextBase implements IText {
  public readonly assignedSlot: IHTMLSlotElement | null;
  public readonly wholeText: string;

  constructor(data?: string) {
    super({
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
    this._length = text.length;
    const newTextNode = this.ownerDocument!.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newTextNode, this.nextSibling);
    }
    return newTextNode;
  }
}
