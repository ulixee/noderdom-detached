import { INode } from '../../base/interfaces';
/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
export declare function _visitNode(n: INode, callback: (node: INode) => boolean | undefined | void): true | undefined;
