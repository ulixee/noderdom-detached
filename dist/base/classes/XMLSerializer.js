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
_a = StateMachine_1.default('XMLSerializer'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfXMLSerializer = _a.setReadonlyOfXMLSerializer;
exports.internalHandler = new InternalHandler_1.default('XMLSerializer', exports.getState, exports.setState);
class XMLSerializer {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(XMLSerializer, this, exports.internalHandler, exports.XMLSerializerConstantKeys, exports.XMLSerializerPropertyKeys);
    }
    // methods
    serializeToString(root) {
        return exports.internalHandler.run(this, 'serializeToString', [root]);
    }
}
exports.default = XMLSerializer;
// tslint:disable-next-line:variable-name
exports.XMLSerializerPropertyKeys = [];
// tslint:disable-next-line:variable-name
exports.XMLSerializerConstantKeys = [];
//# sourceMappingURL=XMLSerializer.js.map