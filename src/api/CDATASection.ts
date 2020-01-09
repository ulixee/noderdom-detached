import Text from './Text';
import { ICDATASection, IMutable } from '../interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class CDATASection extends Text implements ICDATASection {
  constructor() {
    super();
    (this as IMutable<CDATASection>).nodeName = '#cdata-section';
    (this as IMutable<CDATASection>).nodeType = NODE_TYPE.CDATA_SECTION_NODE;
  }
}
