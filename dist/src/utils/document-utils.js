"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
// tslint:disable-next-line:function-name
function _visitNode(n, callback) {
    let node = n;
    if (callback(node)) {
        return true;
    }
    node = node.firstChild;
    while (node) {
        if (_visitNode(node, callback)) {
            return true;
        }
        node = node.nextSibling;
    }
}
exports._visitNode = _visitNode;
//# sourceMappingURL=document-utils.js.map