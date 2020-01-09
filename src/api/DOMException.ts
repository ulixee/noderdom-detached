import { IDOMException } from '../interfaces';

const nameToCode: Record<string, number> = {
  IndexSizeError: 1,
  DomstringSizeError: 2,
  HierarchyRequestError: 3,
  WrongDocumentError: 4,
  InvalidCharacterError: 5,
  NoDataAllowedError: 6,
  NoModificationAllowedError: 7,
  NotFoundError: 8,
  NotSupportedError: 9,
  InuseAttributeError: 10,
  InvalidStateError: 11,
  SyntaxError: 12,
  InvalidModificationError: 13,
  NamespaceError: 14,
  InvalidAccessError: 15,
  ValidationError: 16,
  TypeMismatchError: 17,
  SecurityError: 18,
  NetworkError: 19,
  AbortError: 20,
  UrlMismatchError: 21,
  QuoteExceededError: 22,
  TimeoutError: 23,
  InvalidNodeTypeError: 24,
  DataCloneError: 25,
};

export default class DOMException extends Error implements IDOMException {
  public static readonly INDEX_SIZE_ERR = nameToCode.IndexSizeError;
  public static readonly DOMSTRING_SIZE_ERR = nameToCode.DomstringSizeError;
  public static readonly HIERARCHY_REQUEST_ERR = nameToCode.HierarchyRequestError;
  public static readonly WRONG_DOCUMENT_ERR = nameToCode.WrongDocumentError;
  public static readonly INVALID_CHARACTER_ERR = nameToCode.InvalidCharacterError;
  public static readonly NO_DATA_ALLOWED_ERR = nameToCode.NoDataAllowedError;
  public static readonly NO_MODIFICATION_ALLOWED_ERR = nameToCode.NoModificationAllowedError;
  public static readonly NOT_FOUND_ERR = nameToCode.NotFoundError;
  public static readonly NOT_SUPPORTED_ERR = nameToCode.NotSupportedError;
  public static readonly INUSE_ATTRIBUTE_ERR = nameToCode.InuseAttributeError;
  public static readonly INVALID_STATE_ERR = nameToCode.InvalidStateError;
  public static readonly SYNTAX_ERR = nameToCode.SyntaxError;
  public static readonly INVALID_MODIFICATION_ERR = nameToCode.InvalidModificationError;
  public static readonly NAMESPACE_ERR = nameToCode.NamespaceError;
  public static readonly INVALID_ACCESS_ERR = nameToCode.InvalidAccessError;
  public static readonly VALIDATION_ERR = nameToCode.ValidationError;
  public static readonly TYPE_MISMATCH_ERR = nameToCode.TypeMismatchError;
  public static readonly SECURITY_ERR = nameToCode.SecurityError;
  public static readonly NETWORK_ERR = nameToCode.NetworkError;
  public static readonly ABORT_ERR = nameToCode.AbortError;
  public static readonly URL_MISMATCH_ERR = nameToCode.UrlMismatchError;
  public static readonly QUOTA_EXCEEDED_ERR = nameToCode.QuoteExceededError;
  public static readonly TIMEOUT_ERR = nameToCode.TimeoutError;
  public static readonly INVALID_NODE_TYPE_ERR = nameToCode.InvalidNodeTypeError;
  public static readonly DATA_CLONE_ERR = nameToCode.DataCloneError;

  public readonly INDEX_SIZE_ERR = nameToCode.IndexSizeError;
  public readonly DOMSTRING_SIZE_ERR = nameToCode.DomstringSizeError;
  public readonly HIERARCHY_REQUEST_ERR = nameToCode.HierarchyRequestError;
  public readonly WRONG_DOCUMENT_ERR = nameToCode.WrongDocumentError;
  public readonly INVALID_CHARACTER_ERR = nameToCode.InvalidCharacterError;
  public readonly NO_DATA_ALLOWED_ERR = nameToCode.NoDataAllowedError;
  public readonly NO_MODIFICATION_ALLOWED_ERR = nameToCode.NoModificationAllowedError;
  public readonly NOT_FOUND_ERR = nameToCode.NotFoundError;
  public readonly NOT_SUPPORTED_ERR = nameToCode.NotSupportedError;
  public readonly INUSE_ATTRIBUTE_ERR = nameToCode.InuseAttributeError;
  public readonly INVALID_STATE_ERR = nameToCode.InvalidStateError;
  public readonly SYNTAX_ERR = nameToCode.SyntaxError;
  public readonly INVALID_MODIFICATION_ERR = nameToCode.InvalidModificationError;
  public readonly NAMESPACE_ERR = nameToCode.NamespaceError;
  public readonly INVALID_ACCESS_ERR = nameToCode.InvalidAccessError;
  public readonly VALIDATION_ERR = nameToCode.ValidationError;
  public readonly TYPE_MISMATCH_ERR = nameToCode.TypeMismatchError;
  public readonly SECURITY_ERR = nameToCode.SecurityError;
  public readonly NETWORK_ERR = nameToCode.NetworkError;
  public readonly ABORT_ERR = nameToCode.AbortError;
  public readonly URL_MISMATCH_ERR = nameToCode.UrlMismatchError;
  public readonly QUOTA_EXCEEDED_ERR = nameToCode.QuoteExceededError;
  public readonly TIMEOUT_ERR = nameToCode.TimeoutError;
  public readonly INVALID_NODE_TYPE_ERR = nameToCode.InvalidNodeTypeError;
  public readonly DATA_CLONE_ERR = nameToCode.DataCloneError;

  public readonly code: number;
  public readonly message: string;
  public readonly name: string;

  constructor(message?: string, name?: string) {
    super();
    this.code = name ? nameToCode[name] || 0 : 0;
    this.message = message || '';
    this.name = name || 'UnknownError';
  }
}
