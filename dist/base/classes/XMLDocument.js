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
const Document_1 = require("./Document");
_a = StateMachine_1.default('XMLDocument'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfXMLDocument = _a.setReadonlyOfXMLDocument;
exports.internalHandler = new InternalHandler_1.default('XMLDocument', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function XMLDocumentGenerator(Document) {
    return class XMLDocument extends Document {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(XMLDocument, this, exports.internalHandler, exports.XMLDocumentConstantKeys, exports.XMLDocumentPropertyKeys);
        }
        addEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'addEventListener', [type, listener, options]);
        }
        removeEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'removeEventListener', [type, listener, options]);
        }
    };
}
exports.XMLDocumentGenerator = XMLDocumentGenerator;
// tslint:disable-next-line:variable-name
exports.XMLDocumentPropertyKeys = [...Document_1.DocumentPropertyKeys];
// tslint:disable-next-line:variable-name
exports.XMLDocumentConstantKeys = [...Document_1.DocumentConstantKeys];
//# sourceMappingURL=XMLDocument.js.map