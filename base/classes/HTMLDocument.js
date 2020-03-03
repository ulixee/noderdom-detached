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
_a = StateMachine_1.default('HTMLDocument'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfHTMLDocument = _a.setReadonlyOfHTMLDocument;
exports.internalHandler = new InternalHandler_1.default('HTMLDocument', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function HTMLDocumentGenerator(Document) {
    return class HTMLDocument extends Document {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(HTMLDocument, this, exports.internalHandler, exports.HTMLDocumentConstantKeys, exports.HTMLDocumentPropertyKeys);
        }
        addEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'addEventListener', [type, listener, options]);
        }
        removeEventListener(type, listener, options) {
            exports.internalHandler.run(this, 'removeEventListener', [type, listener, options]);
        }
    };
}
exports.HTMLDocumentGenerator = HTMLDocumentGenerator;
// tslint:disable-next-line:variable-name
exports.HTMLDocumentPropertyKeys = [...Document_1.DocumentPropertyKeys];
// tslint:disable-next-line:variable-name
exports.HTMLDocumentConstantKeys = [...Document_1.DocumentConstantKeys];
//# sourceMappingURL=HTMLDocument.js.map