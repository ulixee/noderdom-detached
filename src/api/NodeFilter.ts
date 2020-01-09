import { INode, INodeFilter } from '../interfaces';

const FILTER_ACCEPT: number = 1;
const FILTER_REJECT: number = 2;
const FILTER_SKIP: number = 3;
const SHOW_ALL: number = 4294967295;
const SHOW_ATTRIBUTE: number = 2;
const SHOW_CDATA_SECTION: number = 8;
const SHOW_COMMENT: number = 128;
const SHOW_DOCUMENT: number = 256;
const SHOW_DOCUMENT_FRAGMENT: number = 1024;
const SHOW_DOCUMENT_TYPE: number = 512;
const SHOW_ELEMENT: number = 1;
const SHOW_ENTITY: number = 32;
const SHOW_ENTITY_REFERENCE: number = 16;
const SHOW_NOTATION: number = 2048;
const SHOW_PROCESSING_INSTRUCTION: number = 64;
const SHOW_TEXT: number = 4;

export default class NodeFilter implements INodeFilter {
  public static readonly FILTER_ACCEPT: number = FILTER_ACCEPT;
  public static readonly FILTER_REJECT: number = FILTER_REJECT;
  public static readonly FILTER_SKIP: number = FILTER_SKIP;

  public static readonly SHOW_ALL: number = SHOW_ALL;
  public static readonly SHOW_ATTRIBUTE: number = SHOW_ATTRIBUTE;
  public static readonly SHOW_CDATA_SECTION: number = SHOW_CDATA_SECTION;
  public static readonly SHOW_COMMENT: number = SHOW_COMMENT;
  public static readonly SHOW_DOCUMENT: number = SHOW_DOCUMENT;
  public static readonly SHOW_DOCUMENT_FRAGMENT: number = SHOW_DOCUMENT_FRAGMENT;
  public static readonly SHOW_DOCUMENT_TYPE: number = SHOW_DOCUMENT_TYPE;
  public static readonly SHOW_ELEMENT: number = SHOW_ELEMENT;
  public static readonly SHOW_ENTITY: number = SHOW_ENTITY;
  public static readonly SHOW_ENTITY_REFERENCE: number = SHOW_ENTITY_REFERENCE;
  public static readonly SHOW_NOTATION: number = SHOW_NOTATION;
  public static readonly SHOW_PROCESSING_INSTRUCTION: number = SHOW_PROCESSING_INSTRUCTION;
  public static readonly SHOW_TEXT: number = SHOW_TEXT;

  public readonly FILTER_ACCEPT: number = FILTER_ACCEPT;
  public readonly FILTER_REJECT: number = FILTER_REJECT;
  public readonly FILTER_SKIP: number = FILTER_SKIP;

  public readonly SHOW_ALL: number = SHOW_ALL;
  public readonly SHOW_ATTRIBUTE: number = SHOW_ATTRIBUTE;
  public readonly SHOW_CDATA_SECTION: number = SHOW_CDATA_SECTION;
  public readonly SHOW_COMMENT: number = SHOW_COMMENT;
  public readonly SHOW_DOCUMENT: number = SHOW_DOCUMENT;
  public readonly SHOW_DOCUMENT_FRAGMENT: number = SHOW_DOCUMENT_FRAGMENT;
  public readonly SHOW_DOCUMENT_TYPE: number = SHOW_DOCUMENT_TYPE;
  public readonly SHOW_ELEMENT: number = SHOW_ELEMENT;
  public readonly SHOW_ENTITY: number = SHOW_ENTITY;
  public readonly SHOW_ENTITY_REFERENCE: number = SHOW_ENTITY_REFERENCE;
  public readonly SHOW_NOTATION: number = SHOW_NOTATION;
  public readonly SHOW_PROCESSING_INSTRUCTION: number = SHOW_PROCESSING_INSTRUCTION;
  public readonly SHOW_TEXT: number = SHOW_TEXT;

  public acceptNode: (node: INode) => number;
}
