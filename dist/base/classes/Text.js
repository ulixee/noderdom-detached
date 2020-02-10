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
const CharacterData_1 = require("./CharacterData");
const Slotable_1 = require("../mixins/Slotable");
_a = StateMachine_1.default('Text'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfText = _a.setReadonlyOfText;
exports.internalHandler = new InternalHandler_1.default('Text', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function TextGenerator(CharacterData, Slotable) {
    // tslint:disable-next-line:variable-name
    const Parent = ClassMixer_1.default(CharacterData, [Slotable]);
    return class Text extends Parent {
        constructor(_data) {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(Text, this, exports.internalHandler, exports.TextConstantKeys, exports.TextPropertyKeys);
        }
        // properties
        get wholeText() {
            return exports.internalHandler.get(this, 'wholeText', false);
        }
        // methods
        splitText(offset) {
            return exports.internalHandler.run(this, 'splitText', [offset]);
        }
    };
}
exports.TextGenerator = TextGenerator;
// tslint:disable-next-line:variable-name
exports.TextPropertyKeys = [...CharacterData_1.CharacterDataPropertyKeys, ...Slotable_1.SlotablePropertyKeys, 'wholeText'];
// tslint:disable-next-line:variable-name
exports.TextConstantKeys = [...CharacterData_1.CharacterDataConstantKeys, ...Slotable_1.SlotableConstantKeys];
//# sourceMappingURL=Text.js.map