"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterData_1 = require("../../base/classes/CharacterData");
const Node_1 = __importDefault(require("./Node"));
const ChildNode_1 = __importDefault(require("../../base/mixins/ChildNode"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../mixins/NonDocumentTypeChildNode"));
// tslint:disable-next-line:variable-name
const GeneratedCharacterData = CharacterData_1.CharacterDataGenerator(Node_1.default, ChildNode_1.default, NonDocumentTypeChildNode_1.default);
class CharacterData extends GeneratedCharacterData {
    get data() {
        return CharacterData_1.getState(this).data || '';
    }
    set data(value) {
        CharacterData_1.setState(this, { data: value });
    }
    get length() {
        return CharacterData_1.getState(this).length || 0;
    }
    // methods
    appendData(data) {
        const appendedData = this.data + data;
        this.nodeValue = this.data = appendedData;
        CharacterData_1.setState(this, { length: appendedData.length });
    }
    deleteData(offset, count) {
        this.replaceData(offset, count, '');
    }
    insertData(offset, data) {
        this.replaceData(offset, 0, data);
    }
    replaceData(offset, count, data) {
        const start = this.data.substring(0, offset);
        const end = this.data.substring(offset + count);
        const replacedData = start + data + end;
        this.nodeValue = this.data = replacedData;
        CharacterData_1.setState(this, { length: replacedData.length });
    }
    substringData(offset, count) {
        return this.data.substring(offset, offset + count);
    }
}
exports.default = CharacterData;
//# sourceMappingURL=CharacterData.js.map