"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = require("../../base/classes/Comment");
const NodeType_1 = __importDefault(require("../constants/NodeType"));
const CharacterData_1 = __importDefault(require("./CharacterData"));
class Comment extends Comment_1.CommentGenerator(CharacterData_1.default) {
    constructor() {
        super();
        Comment_1.setState(this, {
            nodeName: '#comment',
            nodeType: NodeType_1.default.COMMENT_NODE,
        });
    }
}
exports.default = Comment;
//# sourceMappingURL=Comment.js.map