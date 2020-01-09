import * as DOM from './lib.dom';
import IChildishNode from './IChildishNode';

export { IChildishNode };

export interface IChildNode extends DOM.ChildNode {}

export interface IHTMLCollection extends DOM.HTMLCollection {}
export interface IHTMLElement extends DOM.HTMLElement {}
export interface IHTMLOrSVGElement extends DOM.HTMLOrSVGElement {}
export interface IHTMLElementTagNameMap extends DOM.HTMLElementTagNameMap {}

export interface IHTMLCollectionOf<T extends IElement> extends DOM.HTMLCollectionOf<T> {}
export interface IHTMLEmbedElement extends DOM.HTMLEmbedElement {}
export interface IHTMLFormElement extends DOM.HTMLFormElement {}
export interface IHTMLHeadElement extends DOM.HTMLHeadElement {}
export interface IHTMLImageElement extends DOM.HTMLImageElement {}
export interface IHTMLAnchorElement extends DOM.HTMLAnchorElement {}
export interface IHTMLAreaElement extends DOM.HTMLAreaElement {}
export interface IHTMLScriptElement extends DOM.HTMLScriptElement {}
export interface IHTMLElementEventMap extends DOM.HTMLElementEventMap {}
export interface IHTMLDocument extends DOM.HTMLDocument {}
export interface IHTMLTemplateElement extends DOM.HTMLTemplateElement {}

export interface IElementEventMap extends DOM.ElementEventMap {}
export interface IGlobalEventHandlersEventMap extends DOM.GlobalEventHandlersEventMap {}
export interface IGetRootNodeOptions extends DOM.GetRootNodeOptions {}

export interface ISVGElementTagNameMap extends DOM.SVGElementTagNameMap {}
export interface ISVGElement extends DOM.SVGElement {}
export interface IElementCreationOptions extends DOM.ElementCreationOptions {}
export interface IDocumentTimeline extends DOM.DocumentTimeline {}
export interface IScrollIntoViewOptions extends DOM.ScrollIntoViewOptions {}

export type IHTMLOrSVGScriptElement = DOM.HTMLOrSVGScriptElement;
export type IWindowProxy = DOM.WindowProxy;
export type IDocumentReadyState = DOM.DocumentReadyState;
export type IVisibilityState = DOM.VisibilityState;
export type IEventListenerOrEventListenerObject = DOM.EventListenerOrEventListenerObject;
export type IInsertPosition = DOM.InsertPosition;
export type IOnErrorEventHandler = DOM.OnErrorEventHandler;
export type IXPathNSResolver = DOM.XPathNSResolver;
export type IMutable<T> = { -readonly [P in keyof T]: T[P] };

export interface IXPathExpression extends DOM.XPathExpression {}
export interface IXPathResult extends DOM.XPathResult {}

export interface INode extends DOM.Node {}
export interface IText extends DOM.Text {}
export interface IEventTarget extends DOM.EventTarget {}

export interface IElement extends DOM.Element {}
export interface IElementCSSInlineStyle extends DOM.ElementCSSInlineStyle {}
export interface IElementContentEditable extends DOM.ElementContentEditable {}

export interface ICSSStyleDeclaration extends DOM.CSSStyleDeclaration {}

export interface ILocation extends DOM.Location {}
export interface IDocumentAndElementEventHandlersEventMap extends DOM.DocumentAndElementEventHandlersEventMap {}
export interface IStyleSheetList extends DOM.StyleSheetList {}
export interface IFullscreenOptions extends DOM.FullscreenOptions {}

export interface IProgressEvent<T extends IEventTarget = IEventTarget> extends DOM.ProgressEvent<T> {}
export interface ICaretPosition extends DOM.CaretPosition {}

export interface IAnimatable extends DOM.Animatable {}
export interface IInnerHTML extends DOM.InnerHTML {}
export interface INonDocumentTypeChildNode extends DOM.NonDocumentTypeChildNode {}
export interface IParentNode extends DOM.ParentNode {}
export interface ISlotable extends DOM.Slotable {}

export interface ICharacterData extends DOM.CharacterData {}
export interface IDocumentFragment extends DOM.DocumentFragment {}
export interface IDocumentType extends DOM.DocumentType {}
export interface IDocument extends DOM.Document {}

export interface IComment extends DOM.Comment {}
export interface IDOMException extends DOM.DOMException {}
export interface IDOMTokenList extends DOM.DOMTokenList {}
export interface IDOMRect extends DOM.DOMRect {}
export interface IDOMRectList extends DOM.DOMRectList {}
export interface IDOMStringMap extends DOM.DOMStringMap {}

export interface IDocumentAndElementEventHandlers extends DOM.DocumentAndElementEventHandlers {}
export interface IDocumentOrShadowRoot extends DOM.DocumentOrShadowRoot {}
export interface IGlobalEventHandlers extends DOM.GlobalEventHandlers {}
export interface INonElementParentNode extends DOM.NonElementParentNode {}
export interface IXPathEvaluatorBase extends DOM.XPathEvaluatorBase {}

export interface ICDATASection extends DOM.CDATASection {}
export interface IHTMLSlotElement extends DOM.HTMLSlotElement {}
export interface IShadowRoot extends DOM.ShadowRoot {}
export interface IShadowRootInit extends DOM.ShadowRootInit {}

export interface IDOMImplementation extends DOM.DOMImplementation {}
export interface IAttr extends DOM.Attr {}
export interface INamedNodeMap extends DOM.NamedNodeMap {}
export interface IFocusOptions extends DOM.FocusOptions {}

export interface IProcessingInstruction extends DOM.ProcessingInstruction {}

export interface INodeList extends DOM.NodeList {}
export interface INodeListOf<TNode extends INode> extends DOM.NodeListOf<TNode> {}
export interface INodeFilter extends DOM.NodeFilter {}
export interface INodeIterator extends DOM.NodeIterator {}

export interface IKeyframe extends DOM.Keyframe {}
export interface IPropertyIndexedKeyframes extends DOM.PropertyIndexedKeyframes {}
export interface IKeyframeAnimationOptions extends DOM.KeyframeAnimationOptions {}
export interface IAnimation extends DOM.Animation {}
export interface IRange extends DOM.Range {}
export interface ITreeWalker extends DOM.TreeWalker {}
export interface ISelection extends DOM.Selection {}
export interface IDocumentEventMap extends DOM.DocumentEventMap {}
export interface IAddEventListenerOptions extends DOM.AddEventListenerOptions {}
export interface IEventListenerOptions extends DOM.EventListenerOptions {}

export interface IAnimationEvent extends DOM.AnimationEvent {}
export interface IAnimationPlaybackEvent extends DOM.AnimationPlaybackEvent {}
export interface IAudioProcessingEvent extends DOM.AudioProcessingEvent {}
export interface IBeforeUnloadEvent extends DOM.BeforeUnloadEvent {}
export interface IClipboardEvent extends DOM.ClipboardEvent {}
export interface ICloseEvent extends DOM.CloseEvent {}
export interface ICompositionEvent extends DOM.CompositionEvent {}
export interface ICustomEvent<T = any> extends DOM.CustomEvent<T> {}
export interface IDeviceLightEvent extends DOM.DeviceLightEvent {}
export interface IDeviceMotionEvent extends DOM.DeviceMotionEvent {}
export interface IDeviceOrientationEvent extends DOM.DeviceOrientationEvent {}
export interface IDragEvent extends DOM.DragEvent {}
export interface IErrorEvent extends DOM.ErrorEvent {}
export interface IEvent extends DOM.Event {}
export interface IFocusEvent extends DOM.FocusEvent {}
export interface IFocusNavigationEvent extends DOM.FocusNavigationEvent {}
export interface IGamepadEvent extends DOM.GamepadEvent {}
export interface IHashChangeEvent extends DOM.HashChangeEvent {}
export interface IIDBVersionChangeEvent extends DOM.IDBVersionChangeEvent {}
export interface IInputEvent extends DOM.InputEvent {}
export interface IKeyboardEvent extends DOM.KeyboardEvent {}
export interface IListeningStateChangedEvent extends DOM.ListeningStateChangedEvent {}
export interface IMSGestureEvent extends DOM.MSGestureEvent {}
export interface IMSMediaKeyMessageEvent extends DOM.MSMediaKeyMessageEvent {}
export interface IMSMediaKeyNeededEvent extends DOM.MSMediaKeyNeededEvent {}
export interface IMSPointerEvent extends DOM.MSPointerEvent {}
export interface IMediaEncryptedEvent extends DOM.MediaEncryptedEvent {}
export interface IMediaKeyMessageEvent extends DOM.MediaKeyMessageEvent {}
export interface IMediaQueryListEvent extends DOM.MediaQueryListEvent {}
export interface IMediaStreamErrorEvent extends DOM.MediaStreamErrorEvent {}
export interface IMediaStreamEvent extends DOM.MediaStreamEvent {}
export interface IMediaStreamTrackEvent extends DOM.MediaStreamTrackEvent {}
export interface IMessageEvent extends DOM.MessageEvent {}
export interface IMouseEvent extends DOM.MouseEvent {}
export interface IMutationEvent extends DOM.MutationEvent {}
export interface IOfflineAudioCompletionEvent extends DOM.OfflineAudioCompletionEvent {}
export interface IOverflowEvent extends DOM.OverflowEvent {}
export interface IPageTransitionEvent extends DOM.PageTransitionEvent {}
export interface IPaymentRequestUpdateEvent extends DOM.PaymentRequestUpdateEvent {}
export interface IPermissionRequestedEvent extends DOM.PermissionRequestedEvent {}
export interface IPointerEvent extends DOM.PointerEvent {}
export interface IPopStateEvent extends DOM.PopStateEvent {}
export interface IIProgressEvent<T extends IEventTarget = IEventTarget> extends DOM.ProgressEvent<T> {}
export interface IPromiseRejectionEvent extends DOM.PromiseRejectionEvent {}
export interface IRTCDTMFToneChangeEvent extends DOM.RTCDTMFToneChangeEvent {}
export interface IRTCDataChannelEvent extends DOM.RTCDataChannelEvent {}
export interface IRTCDtlsTransportStateChangedEvent extends DOM.RTCDtlsTransportStateChangedEvent {}
export interface IRTCErrorEvent extends DOM.RTCErrorEvent {}
export interface IRTCIceCandidatePairChangedEvent extends DOM.RTCIceCandidatePairChangedEvent {}
export interface IRTCIceGathererEvent extends DOM.RTCIceGathererEvent {}
export interface IRTCIceTransportStateChangedEvent extends DOM.RTCIceTransportStateChangedEvent {}
export interface IRTCPeerConnectionIceErrorEvent extends DOM.RTCPeerConnectionIceErrorEvent {}
export interface IRTCPeerConnectionIceEvent extends DOM.RTCPeerConnectionIceEvent {}
export interface IRTCSsrcConflictEvent extends DOM.RTCSsrcConflictEvent {}
export interface IRTCStatsEvent extends DOM.RTCStatsEvent {}
export interface IRTCTrackEvent extends DOM.RTCTrackEvent {}
export interface ISVGZoomEvent extends DOM.SVGZoomEvent {}
export interface ISecurityPolicyViolationEvent extends DOM.SecurityPolicyViolationEvent {}
export interface IServiceWorkerMessageEvent extends DOM.ServiceWorkerMessageEvent {}
export interface ISpeechRecognitionError extends DOM.SpeechRecognitionError {}
export interface ISpeechRecognitionEvent extends DOM.SpeechRecognitionEvent {}
export interface ISpeechSynthesisErrorEvent extends DOM.SpeechSynthesisErrorEvent {}
export interface ISpeechSynthesisEvent extends DOM.SpeechSynthesisEvent {}
export interface IStorageEvent extends DOM.StorageEvent {}
export interface ITextEvent extends DOM.TextEvent {}
export interface ITouchEvent extends DOM.TouchEvent {}
export interface ITrackEvent extends DOM.TrackEvent {}
export interface ITransitionEvent extends DOM.TransitionEvent {}
export interface IUIEvent extends DOM.UIEvent {}
export interface IVRDisplayEvent extends DOM.VRDisplayEvent {}
export interface IWebGLContextEvent extends DOM.WebGLContextEvent {}
export interface IWheelEvent extends DOM.WheelEvent {}

export interface IDOMParser extends DOM.DOMParser {}
export interface IXMLSerializer extends DOM.XMLSerializer {}
export interface IXMLDocument extends DOM.XMLDocument {}
