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
const ChildNode_1 = require("../mixins/ChildNode");
_a = StateMachine_1.default('DocumentType'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfDocumentType = _a.setReadonlyOfDocumentType;
exports.internalHandler = new InternalHandler_1.default('DocumentType', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function DocumentTypeGenerator(Node, ChildNode) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(Node, [ChildNode]);
    return class DocumentType extends Parent {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(DocumentType, this, exports.internalHandler, exports.DocumentTypeConstantKeys, exports.DocumentTypePropertyKeys);
        }
        // properties
        get name() {
            return exports.internalHandler.get(this, 'name', false);
        }
        get publicId() {
            return exports.internalHandler.get(this, 'publicId', false);
        }
        get systemId() {
            return exports.internalHandler.get(this, 'systemId', false);
        }
    };
}
exports.DocumentTypeGenerator = DocumentTypeGenerator;
// tslint:disable-next-line:variable-name
exports.DocumentTypePropertyKeys = [...Node_1.NodePropertyKeys, ...ChildNode_1.ChildNodePropertyKeys, 'name', 'publicId', 'systemId'];
// tslint:disable-next-line:variable-name
exports.DocumentTypeConstantKeys = [...Node_1.NodeConstantKeys, ...ChildNode_1.ChildNodeConstantKeys];
//# sourceMappingURL=DocumentType.js.map