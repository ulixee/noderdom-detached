"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_1 = __importStar(require("../../base/classes/DOMException"));
const nameToCode = {
    IndexSizeError: 1,
    DomstringSizeError: 2,
    HierarchyRequestError: 3,
    WrongDocumentError: 4,
    InvalidCharacterError: 5,
    NoDataAllowedError: 6,
    NoModificationAllowedError: 7,
    NotFoundError: 8,
    NotSupportedError: 9,
    InuseAttributeError: 10,
    InvalidStateError: 11,
    SyntaxError: 12,
    InvalidModificationError: 13,
    NamespaceError: 14,
    InvalidAccessError: 15,
    ValidationError: 16,
    TypeMismatchError: 17,
    SecurityError: 18,
    NetworkError: 19,
    AbortError: 20,
    UrlMismatchError: 21,
    QuoteExceededError: 22,
    TimeoutError: 23,
    InvalidNodeTypeError: 24,
    DataCloneError: 25,
};
class DOMException extends DOMException_1.default {
    constructor(message, name) {
        super();
        DOMException_1.setState(this, {
            code: name ? nameToCode[name] || 0 : 0,
            message: message || '',
            name: name || 'UnknownError',
        });
    }
    get code() {
        return DOMException_1.getState(this).code;
    }
    get message() {
        return DOMException_1.getState(this).message;
    }
    get name() {
        return DOMException_1.getState(this).name;
    }
}
exports.default = DOMException;
//# sourceMappingURL=DOMException.js.map