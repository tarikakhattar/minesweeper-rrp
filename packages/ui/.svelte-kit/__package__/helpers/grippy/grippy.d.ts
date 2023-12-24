import type { Defined } from '@alexaegis/common';
import type { Rectangle } from '../../components/rectangle.interface';
import type { Handler } from './handlers/base-handler.class';
import { type DragHandlerOptions } from './handlers/drag-handler.class';
import { type ResizeHandlerOptions, type Vec2 } from './handlers/index.js';
export interface GrippyContainerOptions {
    /**
     * This is where the cursor styling will go
     *
     * By default it's the body element
     */
    rootElement?: HTMLElement;
    /**
     * To counteract shifting positions when css zoom is applied to the container
     * @example 1 is 100%, 2 is 200%
     */
    zoom?: number;
    /**
     * This is for enabling certain visual debugging features.
     * Keep it turned off unless you know what you're using it for.
     * @default false
     */
    debug?: boolean;
}
export type NormalizedGrippyContainerOptions = Defined<GrippyContainerOptions>;
export declare const normalizeGrippyContainerOptions: (options?: GrippyContainerOptions) => NormalizedGrippyContainerOptions;
export declare class GrippyContainer {
    readonly options: NormalizedGrippyContainerOptions;
    private allHandlers;
    private handlersByHandleElement;
    private activeHandlers;
    private container;
    private lastMoveTimestamp;
    private readonly documentListeners;
    constructor(rawOptions?: GrippyContainerOptions);
    getContainerRect(): Rectangle;
    offsetWithContainer(vec: Vec2): Vec2;
    getEventPositionWithOffset(event: PointerEvent): Vec2;
    zoomRectangle(rectangle: Rectangle): Rectangle;
    private getFirstElementsHandlersInEvent;
    private activateAffectedHandlers;
    deactivateAllActiveHandlers(): void;
    initialize(container: Element): void;
    draggable(options: DragHandlerOptions): Handler;
    resizable(options: ResizeHandlerOptions): Handler;
    private registerHandler;
    /**
     * Used by handlers when they unsubscribe
     */
    removeHandler(handler: Handler): void;
    unsubscribe(): void;
}
//# sourceMappingURL=grippy.d.ts.map