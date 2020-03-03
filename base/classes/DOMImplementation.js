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
_a = StateMachine_1.default('DOMImplementation'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfDOMImplementation = _a.setReadonlyOfDOMImplementation;
exports.internalHandler = new InternalHandler_1.default('DOMImplementation', exports.getState, exports.setState);
class DOMImplementation {
    constructor() {
        InternalHandler_1.initializeConstantsAndPrototypes(DOMImplementation, this, exports.internalHandler, exports.DOMImplementationConstantKeys, exports.DOMImplementationPropertyKeys);
    }
    // methods
    createDocument(namespace, qualifiedName, doctype) {
        return exports.internalHandler.run(this, 'createDocument', [namespace, qualifiedName, doctype]);
    }
    createDocumentType(qualifiedName, publicId, systemId) {
        return exports.internalHandler.run(this, 'createDocumentType', [qualifiedName, publicId, systemId]);
    }
    createHTMLDocument(title) {
        return exports.internalHandler.run(this, 'createHTMLDocument', [title]);
    }
    hasFeature() {
        return exports.internalHandler.run(this, 'hasFeature', []);
    }
}
exports.default = DOMImplementation;
// tslint:disable-next-line:variable-name
exports.DOMImplementationPropertyKeys = [];
// tslint:disable-next-line:variable-name
exports.DOMImplementationConstantKeys = [];
//# sourceMappingURL=DOMImplementation.js.map