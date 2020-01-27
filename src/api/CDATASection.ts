import BaseCDATASection, { setCDATASectionRps } from '../../base/classes/CDATASection';
import { ICDATASection } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';

export default class CDATASection extends BaseCDATASection implements ICDATASection {
  constructor() {
    super();
    setCDATASectionRps(this, {
      nodeName: '#cdata-section',
      nodeType: NODE_TYPE.CDATA_SECTION_NODE,
    });
  }
}

export { setCDATASectionRps };
