import {
  IAddEventListenerOptions,
  IAnimationEvent,
  IDragEvent,
  IEvent,
  IEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IFocusEvent,
  IGlobalEventHandlers,
  IGlobalEventHandlersEventMap,
  IKeyboardEvent,
  IMouseEvent,
  IOnErrorEventHandler,
  IPointerEvent,
  IProgressEvent,
  ISecurityPolicyViolationEvent,
  ITouchEvent,
  ITransitionEvent,
  IUIEvent,
  IWheelEvent,
} from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function GlobalEventHandlers<TBase extends Constructor>(base: TBase) {
  return class extends base implements IGlobalEventHandlers {
    public onabort: ((this: IGlobalEventHandlers, ev: IUIEvent) => any) | null;
    public onanimationcancel: ((this: IGlobalEventHandlers, ev: IAnimationEvent) => any) | null;
    public onanimationend: ((this: IGlobalEventHandlers, ev: IAnimationEvent) => any) | null;
    public onanimationiteration: ((this: IGlobalEventHandlers, ev: IAnimationEvent) => any) | null;
    public onanimationstart: ((this: IGlobalEventHandlers, ev: IAnimationEvent) => any) | null;
    public onauxclick: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onblur: ((this: IGlobalEventHandlers, ev: IFocusEvent) => any) | null;
    public oncancel: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public oncanplay: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public oncanplaythrough: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onchange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onclick: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onclose: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public oncontextmenu: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public oncuechange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public ondblclick: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public ondrag: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondragend: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondragenter: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondragexit: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public ondragleave: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondragover: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondragstart: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondrop: ((this: IGlobalEventHandlers, ev: IDragEvent) => any) | null;
    public ondurationchange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onemptied: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onended: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onerror: IOnErrorEventHandler;
    public onfocus: ((this: IGlobalEventHandlers, ev: IFocusEvent) => any) | null;
    public ongotpointercapture: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public oninput: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public oninvalid: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onkeydown: ((this: IGlobalEventHandlers, ev: IKeyboardEvent) => any) | null;
    public onkeypress: ((this: IGlobalEventHandlers, ev: IKeyboardEvent) => any) | null;
    public onkeyup: ((this: IGlobalEventHandlers, ev: IKeyboardEvent) => any) | null;
    public onload: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onloadeddata: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onloadedmetadata: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onloadend: ((this: IGlobalEventHandlers, ev: IProgressEvent) => any) | null;
    public onloadstart: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onlostpointercapture: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onmousedown: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onmouseenter: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onmouseleave: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onmousemove: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onmouseout: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onmouseover: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onmouseup: ((this: IGlobalEventHandlers, ev: IMouseEvent) => any) | null;
    public onpause: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onplay: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onplaying: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onpointercancel: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointerdown: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointerenter: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointerleave: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointermove: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointerout: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointerover: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onpointerup: ((this: IGlobalEventHandlers, ev: IPointerEvent) => any) | null;
    public onprogress: ((this: IGlobalEventHandlers, ev: IProgressEvent) => any) | null;
    public onratechange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onreset: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onresize: ((this: IGlobalEventHandlers, ev: IUIEvent) => any) | null;
    public onscroll: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onsecuritypolicyviolation: ((this: IGlobalEventHandlers, ev: ISecurityPolicyViolationEvent) => any) | null;
    public onseeked: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onseeking: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onselect: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onselectionchange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onselectstart: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onstalled: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onsubmit: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onsuspend: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public ontimeupdate: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public ontoggle: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public ontouchcancel: ((this: IGlobalEventHandlers, ev: ITouchEvent) => any) | null;
    public ontouchend: ((this: IGlobalEventHandlers, ev: ITouchEvent) => any) | null;
    public ontouchmove: ((this: IGlobalEventHandlers, ev: ITouchEvent) => any) | null;
    public ontouchstart: ((this: IGlobalEventHandlers, ev: ITouchEvent) => any) | null;
    public ontransitioncancel: ((this: IGlobalEventHandlers, ev: ITransitionEvent) => any) | null;
    public ontransitionend: ((this: IGlobalEventHandlers, ev: ITransitionEvent) => any) | null;
    public ontransitionrun: ((this: IGlobalEventHandlers, ev: ITransitionEvent) => any) | null;
    public ontransitionstart: ((this: IGlobalEventHandlers, ev: ITransitionEvent) => any) | null;
    public onvolumechange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onwaiting: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
    public onwheel: ((this: IGlobalEventHandlers, ev: IWheelEvent) => any) | null;

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
      _type: K,
      _listener: (this: IGlobalEventHandlers, ev: IGlobalEventHandlersEventMap[K]) => any,
      _options?: boolean | IAddEventListenerOptions,
    ): void;
    public addEventListener(
      _type: string,
      _listener: IEventListenerOrEventListenerObject,
      _options?: boolean | IAddEventListenerOptions,
    ): void {
      throw new Error('Method not implemented.');
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
      _type: K,
      _listener: (this: IGlobalEventHandlers, ev: IGlobalEventHandlersEventMap[K]) => any,
      _options?: boolean | IEventListenerOptions,
    ): void;
    public removeEventListener(
      _type: string,
      _listener: IEventListenerOrEventListenerObject,
      _options?: boolean | IEventListenerOptions,
    ): void {
      throw new Error('Method not implemented.');
    }
  };
}
