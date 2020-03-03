import { IDocument, IDOMParser } from '../../base/interfaces';
export default class DOMParser implements IDOMParser {
    parseFromString(str: string, type?: string): IDocument;
    private createDocument;
}
