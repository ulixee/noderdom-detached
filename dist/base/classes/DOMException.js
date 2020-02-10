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
_a = StateMachine_1.default('DOMException'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfDOMException = _a.setReadonlyOfDOMException;
exports.internalHandler = new InternalHandler_1.default('DOMException', exports.getState, exports.setState);
class DOMException {
    // constructor required for this class
    constructor(_message, _name) {
        this.ABORT_ERR = 20;
        this.DATA_CLONE_ERR = 25;
        this.DOMSTRING_SIZE_ERR = 2;
        this.HIERARCHY_REQUEST_ERR = 3;
        this.INDEX_SIZE_ERR = 1;
        this.INUSE_ATTRIBUTE_ERR = 10;
        this.INVALID_ACCESS_ERR = 15;
        this.INVALID_CHARACTER_ERR = 5;
        this.INVALID_MODIFICATION_ERR = 13;
        this.INVALID_NODE_TYPE_ERR = 24;
        this.INVALID_STATE_ERR = 11;
        this.NAMESPACE_ERR = 14;
        this.NETWORK_ERR = 19;
        this.NOT_FOUND_ERR = 8;
        this.NOT_SUPPORTED_ERR = 9;
        this.NO_DATA_ALLOWED_ERR = 6;
        this.NO_MODIFICATION_ALLOWED_ERR = 7;
        this.QUOTA_EXCEEDED_ERR = 22;
        this.SECURITY_ERR = 18;
        this.SYNTAX_ERR = 12;
        this.TIMEOUT_ERR = 23;
        this.TYPE_MISMATCH_ERR = 17;
        this.URL_MISMATCH_ERR = 21;
        this.VALIDATION_ERR = 16;
        this.WRONG_DOCUMENT_ERR = 4;
        InternalHandler_1.initializeConstantsAndPrototypes(DOMException, this, exports.internalHandler, exports.DOMExceptionConstantKeys, exports.DOMExceptionPropertyKeys);
    }
    // properties
    get code() {
        return exports.internalHandler.get(this, 'code', false);
    }
    get message() {
        return exports.internalHandler.get(this, 'message', false);
    }
    get name() {
        return exports.internalHandler.get(this, 'name', false);
    }
}
exports.default = DOMException;
DOMException.ABORT_ERR = 20;
DOMException.DATA_CLONE_ERR = 25;
DOMException.DOMSTRING_SIZE_ERR = 2;
DOMException.HIERARCHY_REQUEST_ERR = 3;
DOMException.INDEX_SIZE_ERR = 1;
DOMException.INUSE_ATTRIBUTE_ERR = 10;
DOMException.INVALID_ACCESS_ERR = 15;
DOMException.INVALID_CHARACTER_ERR = 5;
DOMException.INVALID_MODIFICATION_ERR = 13;
DOMException.INVALID_NODE_TYPE_ERR = 24;
DOMException.INVALID_STATE_ERR = 11;
DOMException.NAMESPACE_ERR = 14;
DOMException.NETWORK_ERR = 19;
DOMException.NOT_FOUND_ERR = 8;
DOMException.NOT_SUPPORTED_ERR = 9;
DOMException.NO_DATA_ALLOWED_ERR = 6;
DOMException.NO_MODIFICATION_ALLOWED_ERR = 7;
DOMException.QUOTA_EXCEEDED_ERR = 22;
DOMException.SECURITY_ERR = 18;
DOMException.SYNTAX_ERR = 12;
DOMException.TIMEOUT_ERR = 23;
DOMException.TYPE_MISMATCH_ERR = 17;
DOMException.URL_MISMATCH_ERR = 21;
DOMException.VALIDATION_ERR = 16;
DOMException.WRONG_DOCUMENT_ERR = 4;
// tslint:disable-next-line:variable-name
exports.DOMExceptionPropertyKeys = ['code', 'message', 'name'];
// tslint:disable-next-line:variable-name
exports.DOMExceptionConstantKeys = ['INDEX_SIZE_ERR', 'DOMSTRING_SIZE_ERR', 'HIERARCHY_REQUEST_ERR', 'WRONG_DOCUMENT_ERR', 'INVALID_CHARACTER_ERR', 'NO_DATA_ALLOWED_ERR', 'NO_MODIFICATION_ALLOWED_ERR', 'NOT_FOUND_ERR', 'NOT_SUPPORTED_ERR', 'INUSE_ATTRIBUTE_ERR', 'INVALID_STATE_ERR', 'SYNTAX_ERR', 'INVALID_MODIFICATION_ERR', 'NAMESPACE_ERR', 'INVALID_ACCESS_ERR', 'VALIDATION_ERR', 'TYPE_MISMATCH_ERR', 'SECURITY_ERR', 'NETWORK_ERR', 'ABORT_ERR', 'URL_MISMATCH_ERR', 'QUOTA_EXCEEDED_ERR', 'TIMEOUT_ERR', 'INVALID_NODE_TYPE_ERR', 'DATA_CLONE_ERR'];
//# sourceMappingURL=DOMException.js.map