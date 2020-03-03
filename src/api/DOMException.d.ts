import { IDOMException } from '../../base/interfaces';
import BaseDOMException from '../../base/classes/DOMException';
export default class DOMException extends BaseDOMException implements IDOMException {
    constructor(message?: string, name?: string);
    get code(): number;
    get message(): string;
    get name(): string;
}
