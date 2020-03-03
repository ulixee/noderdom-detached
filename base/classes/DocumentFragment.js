"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const InternalHandler_1 = __importStar(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Node_1 = require("./Node");
const NonElementParentNode_1 = require("../mixins/NonElementParentNode");
const ParentNode_1 = require("../mixins/ParentNode");
_a = StateMachine_1.default('DocumentFragment'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfDocumentFragment = _a.setReadonlyOfDocumentFragment;
exports.internalHandler = new InternalHandler_1.default('DocumentFragment', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function DocumentFragmentGenerator(Node, NonElementParentNode, ParentNode) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(Node, [NonElementParentNode, ParentNode]);
    return class DocumentFragment extends Parent {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(DocumentFragment, this, exports.internalHandler, exports.DocumentFragmentConstantKeys, exports.DocumentFragmentPropertyKeys);
        }
    };
}
exports.DocumentFragmentGenerator = DocumentFragmentGenerator;
// tslint:disable-next-line:variable-name
exports.DocumentFragmentPropertyKeys = [...Node_1.NodePropertyKeys, ...NonElementParentNode_1.NonElementParentNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys];
// tslint:disable-next-line:variable-name
exports.DocumentFragmentConstantKeys = [...Node_1.NodeConstantKeys, ...NonElementParentNode_1.NonElementParentNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys];
//# sourceMappingURL=DocumentFragment.js.map