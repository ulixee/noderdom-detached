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
const NonDocumentTypeChildNode_1 = require("../mixins/NonDocumentTypeChildNode");
_a = StateMachine_1.default('CharacterData'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfCharacterData = _a.setReadonlyOfCharacterData;
exports.internalHandler = new InternalHandler_1.default('CharacterData', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function CharacterDataGenerator(Node, ChildNode, NonDocumentTypeChildNode) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(Node, [ChildNode, NonDocumentTypeChildNode]);
    return class CharacterData extends Parent {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(CharacterData, this, exports.internalHandler, exports.CharacterDataConstantKeys, exports.CharacterDataPropertyKeys);
        }
        // properties
        get data() {
            return exports.internalHandler.get(this, 'data', false);
        }
        set data(value) {
            exports.internalHandler.set(this, 'data', value);
        }
        get length() {
            return exports.internalHandler.get(this, 'length', false);
        }
        // methods
        appendData(data) {
            exports.internalHandler.run(this, 'appendData', [data]);
        }
        deleteData(offset, count) {
            exports.internalHandler.run(this, 'deleteData', [offset, count]);
        }
        insertData(offset, data) {
            exports.internalHandler.run(this, 'insertData', [offset, data]);
        }
        replaceData(offset, count, data) {
            exports.internalHandler.run(this, 'replaceData', [offset, count, data]);
        }
        substringData(offset, count) {
            return exports.internalHandler.run(this, 'substringData', [offset, count]);
        }
    };
}
exports.CharacterDataGenerator = CharacterDataGenerator;
// tslint:disable-next-line:variable-name
exports.CharacterDataPropertyKeys = [...Node_1.NodePropertyKeys, ...ChildNode_1.ChildNodePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, 'data', 'length'];
// tslint:disable-next-line:variable-name
exports.CharacterDataConstantKeys = [...Node_1.NodeConstantKeys, ...ChildNode_1.ChildNodeConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys];
//# sourceMappingURL=CharacterData.js.map