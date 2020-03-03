import { INode } from '../../base/interfaces';
export declare function getTextContent(n: INode): string | null;
export declare function locateNamespacePrefix(node: INode, namespace: string | null): any;
export declare function locateNamespace(node: INode, prefix: string | null): string | null;
