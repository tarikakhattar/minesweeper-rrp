import { Handler, normalizeHandlerOptions, } from './base-handler.class.js';
import {} from './vec2.interface.js';
export const normalizeDragHandlerOptions = (options) => {
    return {
        ...normalizeHandlerOptions(options),
        listeners: options.listeners,
        handleCursor: options.handleCursor,
    };
};
export const calculateCursorData = (event, context, container) => {
    const client = container.getEventPositionWithOffset(event);
    const delta = {
        x: client.x - context.lastPointerPositon.x,
        y: client.y - context.lastPointerPositon.y,
    };
    const total = {
        x: client.x - context.pointerOrigin.x,
        y: client.y - context.pointerOrigin.y,
    };
    return {
        client,
        delta,
        total,
        origin: { ...context.pointerOrigin },
    };
};
export class DragHandler extends Handler {
    actionContext;
    originalCursorStyle = '';
    initialize() {
        if (this.options.handleCursor) {
            this.originalCursorStyle = this.options.handle.style.cursor;
            this.options.handle.style.cursor = this.options.handleCursor;
        }
    }
    destroy() {
        if (this.options.handleCursor) {
            this.options.handle.style.cursor = this.originalCursorStyle;
        }
    }
    begin(event) {
        this.actionContext = {
            pointerOrigin: this.container.getEventPositionWithOffset(event),
            lastPointerPositon: this.container.getEventPositionWithOffset(event),
            originalSize: this.container.zoomRectangle(this.options.target.getBoundingClientRect()),
            initialEvent: event,
        };
        this.options.listeners?.moveBegin?.({
            handle: this.options.handle,
            target: this.options.target,
            event,
            cursor: calculateCursorData(event, this.actionContext, this.container),
        });
    }
    handle(event) {
        if (this.actionContext) {
            const cursor = calculateCursorData(event, this.actionContext, this.container);
            this.options.listeners?.move?.({
                handle: this.options.handle,
                target: this.options.target,
                event,
                cursor,
            });
            this.actionContext.lastPointerPositon = cursor.client;
        }
    }
    end(event) {
        if (this.actionContext) {
            this.options.listeners?.moveEnd?.({
                handle: this.options.handle,
                target: this.options.target,
                event,
                cursor: calculateCursorData(event, this.actionContext, this.container),
            });
        }
        this.actionContext = undefined;
    }
}
