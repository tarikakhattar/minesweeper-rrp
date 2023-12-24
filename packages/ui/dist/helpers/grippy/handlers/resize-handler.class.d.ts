import { type Defined } from '@alexaegis/common';
import { type Rectangle } from '../../../components/rectangle.interface.js';
import { Handler, type HandlerOptions, type NormalizedHandlerOptions } from './base-handler.class.js';
import { type CursorData, type DragHandlerData } from './drag-handler.class.js';
export interface ResizeHandlerData extends DragHandlerData {
    resize: Rectangle;
    resizeDelta: Rectangle;
    resizeTotalDelta: Rectangle;
    axisLockedCursorData: CursorData;
}
export interface ResizeHandlerOptions extends HandlerOptions {
    listeners?: {
        resizeBegin?: (data: ResizeHandlerData) => void;
        resize?: (data: ResizeHandlerData) => void;
        resizeEnd?: (data: ResizeHandlerData) => void;
    } | undefined;
    /**
     * In pixels, how much deep the interactive edge should go inside the handle element
     *
     * @default 0
     */
    edgeInnerWidth?: number | undefined;
    /**
     * What edge segments will be enabled, by default it's all of them.
     */
    enabledEdges?: Record<EdgeSegment, boolean> | undefined;
}
export type NormalizedResizeHandlerOptions = Defined<Pick<ResizeHandlerOptions, 'edgeInnerWidth'>> & Omit<ResizeHandlerOptions, 'edgeInnerWidth'> & NormalizedHandlerOptions;
export declare const normalizeResizeHandlerOptions: (options: ResizeHandlerOptions) => NormalizedResizeHandlerOptions;
export type EdgeSegment = 'n' | 'e' | 's' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
export interface AxisLockContext {
    xAxisLocked: boolean;
    yAxisLocked: boolean;
}
export declare class ResizeHandler extends Handler<NormalizedResizeHandlerOptions> {
    private actionContext;
    private debugElement;
    preferredCursor(event: PointerEvent): string | undefined;
    initialize(): void;
    everyMove(_pointerEvent: PointerEvent): void;
    private createDebugElement;
    private updateDebugElementPosition;
    begin(event: PointerEvent): void;
    handle(event: PointerEvent): void;
    end(event: PointerEvent): void;
}
//# sourceMappingURL=resize-handler.class.d.ts.map