"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importStar(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Text_1 = require("./Text");
_a = StateMachine_1.default('CDATASection'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfCDATASection = _a.setReadonlyOfCDATASection;
exports.internalHandler = new InternalHandler_1.default('CDATASection', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function CDATASectionGenerator(Text) {
    return class CDATASection extends Text {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(CDATASection, this, exports.internalHandler, exports.CDATASectionConstantKeys, exports.CDATASectionPropertyKeys);
        }
    };
}
exports.CDATASectionGenerator = CDATASectionGenerator;
// tslint:disable-next-line:variable-name
exports.CDATASectionPropertyKeys = [...Text_1.TextPropertyKeys];
// tslint:disable-next-line:variable-name
exports.CDATASectionConstantKeys = [...Text_1.TextConstantKeys];
//# sourceMappingURL=CDATASection.js.map