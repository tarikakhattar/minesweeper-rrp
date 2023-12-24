import type { GrippyContainer } from '../grippy.js';
import { Handler, type HandlerOptions, type NormalizedHandlerOptions, type PointerEventActionContext } from './base-handler.class.js';
import { type Vec2 } from './vec2.interface.js';
export interface BaseGrippyEventData {
    target: Element;
    handle: Element;
    event: PointerEvent;
}
export interface CursorData {
    /**
     * From the previous event
     */
    delta: Vec2;
    /**
     * From the first event
     */
    total: Vec2;
    /**
     * Where is the cursor now
     */
    client: Vec2;
    /**
     * Where was the first event
     */
    origin: Vec2;
}
export type DragHandlerData = BaseGrippyEventData & {
    cursor: CursorData;
};
export interface DragHandlerOptions extends HandlerOptions {
    listeners?: {
        moveBegin?: (data: DragHandlerData) => void;
        move?: (data: DragHandlerData) => void;
        moveEnd?: (data: DragHandlerData) => void;
    } | undefined;
    handleCursor?: string | undefined;
}
export type NormalizeDragHandlerOptions = DragHandlerOptions & NormalizedHandlerOptions;
export declare const normalizeDragHandlerOptions: (options: DragHandlerOptions) => NormalizeDragHandlerOptions;
export declare const calculateCursorData: (event: PointerEvent, context: PointerEventActionContext, container: GrippyContainer) => CursorData;
export declare class DragHandler extends Handler<NormalizeDragHandlerOptions> {
    private actionContext;
    private originalCursorStyle;
    initialize(): void;
    destroy(): void;
    begin(event: PointerEvent): void;
    handle(event: PointerEvent): void;
    end(event: PointerEvent): void;
}
//# sourceMappingURL=drag-handler.class.d.ts.map