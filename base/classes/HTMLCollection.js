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
const HTMLCollectionBase_1 = require("./HTMLCollectionBase");
_a = StateMachine_1.default('HTMLCollection'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState, exports.setReadonlyOfHTMLCollection = _a.setReadonlyOfHTMLCollection;
exports.internalHandler = new InternalHandler_1.default('HTMLCollection', exports.getState, exports.setState);
// tslint:disable-next-line:variable-name
function HTMLCollectionGenerator(HTMLCollectionBase) {
    return class HTMLCollection extends HTMLCollectionBase {
        constructor() {
            super();
            InternalHandler_1.initializeConstantsAndPrototypes(HTMLCollection, this, exports.internalHandler, exports.HTMLCollectionConstantKeys, exports.HTMLCollectionPropertyKeys);
        }
        // methods
        namedItem(name) {
            return exports.internalHandler.run(this, 'namedItem', [name]);
        }
    };
}
exports.HTMLCollectionGenerator = HTMLCollectionGenerator;
// tslint:disable-next-line:variable-name
exports.HTMLCollectionPropertyKeys = [...HTMLCollectionBase_1.HTMLCollectionBasePropertyKeys];
// tslint:disable-next-line:variable-name
exports.HTMLCollectionConstantKeys = [...HTMLCollectionBase_1.HTMLCollectionBaseConstantKeys];
//# sourceMappingURL=HTMLCollection.js.map