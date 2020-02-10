"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InternalHandler_1 = __importDefault(require("../InternalHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
_a = StateMachine_1.default('GlobalEventHandlers'), exports.getState = _a.getState, exports.setState = _a.setState, exports.setHiddenState = _a.setHiddenState;
exports.internalHandler = new InternalHandler_1.default('GlobalEventHandlers', exports.getState, exports.setState);
class GlobalEventHandlers {
    get onabort() {
        return exports.internalHandler.get(this, 'onabort', true);
    }
    set onabort(value) {
        exports.internalHandler.set(this, 'onabort', value);
    }
    get onauxclick() {
        return exports.internalHandler.get(this, 'onauxclick', true);
    }
    set onauxclick(value) {
        exports.internalHandler.set(this, 'onauxclick', value);
    }
    get onblur() {
        return exports.internalHandler.get(this, 'onblur', true);
    }
    set onblur(value) {
        exports.internalHandler.set(this, 'onblur', value);
    }
    get oncancel() {
        return exports.internalHandler.get(this, 'oncancel', true);
    }
    set oncancel(value) {
        exports.internalHandler.set(this, 'oncancel', value);
    }
    get oncanplay() {
        return exports.internalHandler.get(this, 'oncanplay', true);
    }
    set oncanplay(value) {
        exports.internalHandler.set(this, 'oncanplay', value);
    }
    get oncanplaythrough() {
        return exports.internalHandler.get(this, 'oncanplaythrough', true);
    }
    set oncanplaythrough(value) {
        exports.internalHandler.set(this, 'oncanplaythrough', value);
    }
    get onchange() {
        return exports.internalHandler.get(this, 'onchange', true);
    }
    set onchange(value) {
        exports.internalHandler.set(this, 'onchange', value);
    }
    get onclick() {
        return exports.internalHandler.get(this, 'onclick', true);
    }
    set onclick(value) {
        exports.internalHandler.set(this, 'onclick', value);
    }
    get onclose() {
        return exports.internalHandler.get(this, 'onclose', true);
    }
    set onclose(value) {
        exports.internalHandler.set(this, 'onclose', value);
    }
    get oncontextmenu() {
        return exports.internalHandler.get(this, 'oncontextmenu', true);
    }
    set oncontextmenu(value) {
        exports.internalHandler.set(this, 'oncontextmenu', value);
    }
    get oncuechange() {
        return exports.internalHandler.get(this, 'oncuechange', true);
    }
    set oncuechange(value) {
        exports.internalHandler.set(this, 'oncuechange', value);
    }
    get ondblclick() {
        return exports.internalHandler.get(this, 'ondblclick', true);
    }
    set ondblclick(value) {
        exports.internalHandler.set(this, 'ondblclick', value);
    }
    get ondrag() {
        return exports.internalHandler.get(this, 'ondrag', true);
    }
    set ondrag(value) {
        exports.internalHandler.set(this, 'ondrag', value);
    }
    get ondragend() {
        return exports.internalHandler.get(this, 'ondragend', true);
    }
    set ondragend(value) {
        exports.internalHandler.set(this, 'ondragend', value);
    }
    get ondragenter() {
        return exports.internalHandler.get(this, 'ondragenter', true);
    }
    set ondragenter(value) {
        exports.internalHandler.set(this, 'ondragenter', value);
    }
    get ondragexit() {
        return exports.internalHandler.get(this, 'ondragexit', true);
    }
    set ondragexit(value) {
        exports.internalHandler.set(this, 'ondragexit', value);
    }
    get ondragleave() {
        return exports.internalHandler.get(this, 'ondragleave', true);
    }
    set ondragleave(value) {
        exports.internalHandler.set(this, 'ondragleave', value);
    }
    get ondragover() {
        return exports.internalHandler.get(this, 'ondragover', true);
    }
    set ondragover(value) {
        exports.internalHandler.set(this, 'ondragover', value);
    }
    get ondragstart() {
        return exports.internalHandler.get(this, 'ondragstart', true);
    }
    set ondragstart(value) {
        exports.internalHandler.set(this, 'ondragstart', value);
    }
    get ondrop() {
        return exports.internalHandler.get(this, 'ondrop', true);
    }
    set ondrop(value) {
        exports.internalHandler.set(this, 'ondrop', value);
    }
    get ondurationchange() {
        return exports.internalHandler.get(this, 'ondurationchange', true);
    }
    set ondurationchange(value) {
        exports.internalHandler.set(this, 'ondurationchange', value);
    }
    get onemptied() {
        return exports.internalHandler.get(this, 'onemptied', true);
    }
    set onemptied(value) {
        exports.internalHandler.set(this, 'onemptied', value);
    }
    get onended() {
        return exports.internalHandler.get(this, 'onended', true);
    }
    set onended(value) {
        exports.internalHandler.set(this, 'onended', value);
    }
    get onerror() {
        return exports.internalHandler.get(this, 'onerror', true);
    }
    set onerror(value) {
        exports.internalHandler.set(this, 'onerror', value);
    }
    get onfocus() {
        return exports.internalHandler.get(this, 'onfocus', true);
    }
    set onfocus(value) {
        exports.internalHandler.set(this, 'onfocus', value);
    }
    get oninput() {
        return exports.internalHandler.get(this, 'oninput', true);
    }
    set oninput(value) {
        exports.internalHandler.set(this, 'oninput', value);
    }
    get oninvalid() {
        return exports.internalHandler.get(this, 'oninvalid', true);
    }
    set oninvalid(value) {
        exports.internalHandler.set(this, 'oninvalid', value);
    }
    get onkeydown() {
        return exports.internalHandler.get(this, 'onkeydown', true);
    }
    set onkeydown(value) {
        exports.internalHandler.set(this, 'onkeydown', value);
    }
    get onkeypress() {
        return exports.internalHandler.get(this, 'onkeypress', true);
    }
    set onkeypress(value) {
        exports.internalHandler.set(this, 'onkeypress', value);
    }
    get onkeyup() {
        return exports.internalHandler.get(this, 'onkeyup', true);
    }
    set onkeyup(value) {
        exports.internalHandler.set(this, 'onkeyup', value);
    }
    get onload() {
        return exports.internalHandler.get(this, 'onload', true);
    }
    set onload(value) {
        exports.internalHandler.set(this, 'onload', value);
    }
    get onloadeddata() {
        return exports.internalHandler.get(this, 'onloadeddata', true);
    }
    set onloadeddata(value) {
        exports.internalHandler.set(this, 'onloadeddata', value);
    }
    get onloadedmetadata() {
        return exports.internalHandler.get(this, 'onloadedmetadata', true);
    }
    set onloadedmetadata(value) {
        exports.internalHandler.set(this, 'onloadedmetadata', value);
    }
    get onloadend() {
        return exports.internalHandler.get(this, 'onloadend', true);
    }
    set onloadend(value) {
        exports.internalHandler.set(this, 'onloadend', value);
    }
    get onloadstart() {
        return exports.internalHandler.get(this, 'onloadstart', true);
    }
    set onloadstart(value) {
        exports.internalHandler.set(this, 'onloadstart', value);
    }
    get onmousedown() {
        return exports.internalHandler.get(this, 'onmousedown', true);
    }
    set onmousedown(value) {
        exports.internalHandler.set(this, 'onmousedown', value);
    }
    get onmouseenter() {
        return exports.internalHandler.get(this, 'onmouseenter', true);
    }
    set onmouseenter(value) {
        exports.internalHandler.set(this, 'onmouseenter', value);
    }
    get onmouseleave() {
        return exports.internalHandler.get(this, 'onmouseleave', true);
    }
    set onmouseleave(value) {
        exports.internalHandler.set(this, 'onmouseleave', value);
    }
    get onmousemove() {
        return exports.internalHandler.get(this, 'onmousemove', true);
    }
    set onmousemove(value) {
        exports.internalHandler.set(this, 'onmousemove', value);
    }
    get onmouseout() {
        return exports.internalHandler.get(this, 'onmouseout', true);
    }
    set onmouseout(value) {
        exports.internalHandler.set(this, 'onmouseout', value);
    }
    get onmouseover() {
        return exports.internalHandler.get(this, 'onmouseover', true);
    }
    set onmouseover(value) {
        exports.internalHandler.set(this, 'onmouseover', value);
    }
    get onmouseup() {
        return exports.internalHandler.get(this, 'onmouseup', true);
    }
    set onmouseup(value) {
        exports.internalHandler.set(this, 'onmouseup', value);
    }
    get onpause() {
        return exports.internalHandler.get(this, 'onpause', true);
    }
    set onpause(value) {
        exports.internalHandler.set(this, 'onpause', value);
    }
    get onplay() {
        return exports.internalHandler.get(this, 'onplay', true);
    }
    set onplay(value) {
        exports.internalHandler.set(this, 'onplay', value);
    }
    get onplaying() {
        return exports.internalHandler.get(this, 'onplaying', true);
    }
    set onplaying(value) {
        exports.internalHandler.set(this, 'onplaying', value);
    }
    get onprogress() {
        return exports.internalHandler.get(this, 'onprogress', true);
    }
    set onprogress(value) {
        exports.internalHandler.set(this, 'onprogress', value);
    }
    get onratechange() {
        return exports.internalHandler.get(this, 'onratechange', true);
    }
    set onratechange(value) {
        exports.internalHandler.set(this, 'onratechange', value);
    }
    get onreset() {
        return exports.internalHandler.get(this, 'onreset', true);
    }
    set onreset(value) {
        exports.internalHandler.set(this, 'onreset', value);
    }
    get onresize() {
        return exports.internalHandler.get(this, 'onresize', true);
    }
    set onresize(value) {
        exports.internalHandler.set(this, 'onresize', value);
    }
    get onscroll() {
        return exports.internalHandler.get(this, 'onscroll', true);
    }
    set onscroll(value) {
        exports.internalHandler.set(this, 'onscroll', value);
    }
    get onsecuritypolicyviolation() {
        return exports.internalHandler.get(this, 'onsecuritypolicyviolation', true);
    }
    set onsecuritypolicyviolation(value) {
        exports.internalHandler.set(this, 'onsecuritypolicyviolation', value);
    }
    get onseeked() {
        return exports.internalHandler.get(this, 'onseeked', true);
    }
    set onseeked(value) {
        exports.internalHandler.set(this, 'onseeked', value);
    }
    get onseeking() {
        return exports.internalHandler.get(this, 'onseeking', true);
    }
    set onseeking(value) {
        exports.internalHandler.set(this, 'onseeking', value);
    }
    get onselect() {
        return exports.internalHandler.get(this, 'onselect', true);
    }
    set onselect(value) {
        exports.internalHandler.set(this, 'onselect', value);
    }
    get onstalled() {
        return exports.internalHandler.get(this, 'onstalled', true);
    }
    set onstalled(value) {
        exports.internalHandler.set(this, 'onstalled', value);
    }
    get onsubmit() {
        return exports.internalHandler.get(this, 'onsubmit', true);
    }
    set onsubmit(value) {
        exports.internalHandler.set(this, 'onsubmit', value);
    }
    get onsuspend() {
        return exports.internalHandler.get(this, 'onsuspend', true);
    }
    set onsuspend(value) {
        exports.internalHandler.set(this, 'onsuspend', value);
    }
    get ontimeupdate() {
        return exports.internalHandler.get(this, 'ontimeupdate', true);
    }
    set ontimeupdate(value) {
        exports.internalHandler.set(this, 'ontimeupdate', value);
    }
    get ontoggle() {
        return exports.internalHandler.get(this, 'ontoggle', true);
    }
    set ontoggle(value) {
        exports.internalHandler.set(this, 'ontoggle', value);
    }
    get onvolumechange() {
        return exports.internalHandler.get(this, 'onvolumechange', true);
    }
    set onvolumechange(value) {
        exports.internalHandler.set(this, 'onvolumechange', value);
    }
    get onwaiting() {
        return exports.internalHandler.get(this, 'onwaiting', true);
    }
    set onwaiting(value) {
        exports.internalHandler.set(this, 'onwaiting', value);
    }
    get onwheel() {
        return exports.internalHandler.get(this, 'onwheel', true);
    }
    set onwheel(value) {
        exports.internalHandler.set(this, 'onwheel', value);
    }
    addEventListener(type, listener, options) {
        exports.internalHandler.run(this, 'addEventListener', [type, listener, options]);
    }
    removeEventListener(type, listener, options) {
        exports.internalHandler.run(this, 'removeEventListener', [type, listener, options]);
    }
}
exports.default = GlobalEventHandlers;
// tslint:disable-next-line:variable-name
exports.GlobalEventHandlersPropertyKeys = ['onabort', 'onauxclick', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragexit', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadend', 'onloadstart', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwheel'];
// tslint:disable-next-line:variable-name
exports.GlobalEventHandlersConstantKeys = [];
//# sourceMappingURL=GlobalEventHandlers.js.map