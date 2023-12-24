import type { Defined } from '@alexaegis/common';
import type { Rectangle } from '../../../components/rectangle.interface.js';
import type { GrippyContainer } from '../grippy.js';
import type { Vec2 } from './vec2.interface.js';
export interface HandlerOptions {
    target: Element;
    /**
     * The handle specifies the area where the element can start
     * receiving drag events from
     *
     * If not specified, the target element itself will be the handle.
     */
    handle?: Element | undefined;
}
export type NormalizedHandlerOptions = Defined<HandlerOptions>;
export declare const normalizeHandlerOptions: (options: HandlerOptions) => NormalizedHandlerOptions;
export interface PointerEventActionContext {
    initialEvent: PointerEvent;
    pointerOrigin: Vec2;
    lastPointerPositon: Vec2;
}
export interface ElementActionContext {
    originalSize: Rectangle;
}
export declare abstract class Handler<Options extends HandlerOptions = HandlerOptions> {
    protected container: GrippyContainer;
    private _enabled;
    get enabled(): boolean;
    readonly options: Options;
    constructor(container: GrippyContainer, options: Options);
    initialize?(): void;
    everyMove?(pointerEvent: PointerEvent): void;
    destroy?(): void;
    abstract begin(pointerEvent: PointerEvent): void;
    abstract handle(pointerEvent: PointerEvent): void;
    abstract end(pointerEvent: PointerEvent): void;
    preferredCursor?(pointerEvent: PointerEvent): string | undefined;
    enable(): void;
    disable(): void;
    setEnabled(enabled: boolean): void;
    unsubscribe(): void;
}
//# sourceMappingURL=base-handler.class.d.ts.map