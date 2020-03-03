"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse5_1 = __importDefault(require("parse5"));
const Parse5TreeAdapter_1 = __importDefault(require("./Parse5TreeAdapter"));
class HTMLParser {
    static parseFragment(markup, domImplementation, document) {
        const config = {
            treeAdapter: new Parse5TreeAdapter_1.default(domImplementation, document),
        };
        return parse5_1.default.parseFragment(document, markup, config);
    }
    static parseIntoDocument(markup, domImplementation, document) {
        const config = {
            treeAdapter: new Parse5TreeAdapter_1.default(domImplementation, document),
        };
        const response = parse5_1.default.parse(markup, config);
        return response;
    }
}
exports.default = HTMLParser;
//# sourceMappingURL=HTMLParser.js.map