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
const CharacterData_1 = require("./CharacterData");
_a = StateMachine_1.default('Comment'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfComment = _a.setReadonlyOfComment;
exports.internalHandler = new InternalHandler_1.default('Comment', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function CommentGenerator(CharacterData) {
    return class Comment extends CharacterData {
        constructor(_data) {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(Comment, this, exports.internalHandler, exports.CommentConstantKeys, exports.CommentPropertyKeys);
        }
    };
}
exports.CommentGenerator = CommentGenerator;
// tslint:disable-next-line:variable-name
exports.CommentPropertyKeys = [...CharacterData_1.CharacterDataPropertyKeys];
// tslint:disable-next-line:variable-name
exports.CommentConstantKeys = [...CharacterData_1.CharacterDataConstantKeys];
//# sourceMappingURL=Comment.js.map