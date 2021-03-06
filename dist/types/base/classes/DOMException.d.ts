import InternalHandler from '../InternalHandler';
import { IDOMException } from '../interfaces';
export declare const getState: (instance: IDOMException) => any, setState: <P = IDOMExceptionProperties>(instance: IDOMException, properties: P) => void, setHiddenState: <IHiddenProperties extends {}>(instance: IDOMException, properties: IHiddenProperties) => void, setReadonlyOfDOMException: (instance: IDOMException, properties: IDOMExceptionReadonlyProperties) => void;
export declare const internalHandler: InternalHandler<IDOMException>;
export default class DOMException implements IDOMException {
    static readonly ABORT_ERR: number;
    static readonly DATA_CLONE_ERR: number;
    static readonly DOMSTRING_SIZE_ERR: number;
    static readonly HIERARCHY_REQUEST_ERR: number;
    static readonly INDEX_SIZE_ERR: number;
    static readonly INUSE_ATTRIBUTE_ERR: number;
    static readonly INVALID_ACCESS_ERR: number;
    static readonly INVALID_CHARACTER_ERR: number;
    static readonly INVALID_MODIFICATION_ERR: number;
    static readonly INVALID_NODE_TYPE_ERR: number;
    static readonly INVALID_STATE_ERR: number;
    static readonly NAMESPACE_ERR: number;
    static readonly NETWORK_ERR: number;
    static readonly NOT_FOUND_ERR: number;
    static readonly NOT_SUPPORTED_ERR: number;
    static readonly NO_DATA_ALLOWED_ERR: number;
    static readonly NO_MODIFICATION_ALLOWED_ERR: number;
    static readonly QUOTA_EXCEEDED_ERR: number;
    static readonly SECURITY_ERR: number;
    static readonly SYNTAX_ERR: number;
    static readonly TIMEOUT_ERR: number;
    static readonly TYPE_MISMATCH_ERR: number;
    static readonly URL_MISMATCH_ERR: number;
    static readonly VALIDATION_ERR: number;
    static readonly WRONG_DOCUMENT_ERR: number;
    readonly ABORT_ERR: number;
    readonly DATA_CLONE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NETWORK_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly SECURITY_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
    constructor(_message?: string, _name?: string);
    get code(): number;
    get message(): string;
    get name(): string;
}
export interface IDOMExceptionProperties {
    code?: number;
    message?: string;
    name?: string;
}
export interface IDOMExceptionReadonlyProperties {
    code?: number;
    message?: string;
    name?: string;
}
export declare const DOMExceptionPropertyKeys: string[];
export declare const DOMExceptionConstantKeys: string[];
