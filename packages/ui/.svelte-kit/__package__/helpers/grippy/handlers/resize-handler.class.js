import {} from '@alexaegis/common';
import { substractRectangles } from '../../../components/rectangle.interface.js';
import { checkStyleResult } from '../../movable-window.js';
import { Handler, normalizeHandlerOptions, } from './base-handler.class.js';
import { calculateCursorData, } from './drag-handler.class.js';
export const normalizeResizeHandlerOptions = (options) => {
    return {
        ...normalizeHandlerOptions(options),
        listeners: options.listeners,
        edgeInnerWidth: options.edgeInnerWidth ?? 0,
        enabledEdges: options.enabledEdges,
    };
};
const isAtTopEdge = (event, rectangle, options, container) => {
    const padding = (options.edgeInnerWidth + 1) * container.options.zoom;
    const horizontallyWithin = rectangle.x <= event.x && event.x <= rectangle.x + rectangle.width;
    const verticallyWithin = rectangle.y <= event.y && event.y <= rectangle.y + padding;
    return horizontallyWithin && verticallyWithin;
};
const isAtBottomEdge = (event, rectangle, options, container) => {
    const padding = (options.edgeInnerWidth + 1) * container.options.zoom;
    const horizontallyWithin = rectangle.x <= event.x && event.x <= rectangle.x + rectangle.width;
    const verticallyWithin = rectangle.y + rectangle.height - padding <= event.y &&
        event.y <= rectangle.y + rectangle.height;
    return horizontallyWithin && verticallyWithin;
};
const isAtLeftEdge = (event, rectangle, options, container) => {
    const padding = (options.edgeInnerWidth + 1) * container.options.zoom;
    const horizontallyWithin = rectangle.x <= event.x && event.x <= rectangle.x + padding;
    const verticallyWithin = rectangle.y <= event.y && event.y <= rectangle.y + rectangle.height;
    return horizontallyWithin && verticallyWithin;
};
const isAtRightEdge = (position, rectangle, options, container) => {
    const padding = (options.edgeInnerWidth + 1) * container.options.zoom;
    const horizontallyWithin = rectangle.x + rectangle.width - padding <= position.x &&
        position.x <= rectangle.x + rectangle.width;
    const verticallyWithin = rectangle.y <= position.y && position.y <= rectangle.y + rectangle.height;
    return horizontallyWithin && verticallyWithin;
};
const getEdgeSegment = (event, rectangle, options, container) => {
    const position = {
        x: event.x,
        y: event.y,
    };
    const w = isAtLeftEdge(position, rectangle, options, container);
    const e = isAtRightEdge(position, rectangle, options, container);
    const n = isAtTopEdge(position, rectangle, options, container);
    const s = isAtBottomEdge(position, rectangle, options, container);
    if (n && w && options.enabledEdges?.nw !== false) {
        return 'nw';
    }
    else if (n && e && options.enabledEdges?.ne !== false) {
        return 'ne';
    }
    else if (s && w && options.enabledEdges?.sw !== false) {
        return 'sw';
    }
    else if (s && e && options.enabledEdges?.se !== false) {
        return 'se';
    }
    else if (w && options.enabledEdges?.w !== false) {
        return 'w';
    }
    else if (e && options.enabledEdges?.e !== false) {
        return 'e';
    }
    else if (n && options.enabledEdges?.n !== false) {
        return 'n';
    }
    else if (s && options.enabledEdges?.s !== false) {
        return 's';
    }
    else {
        return undefined;
    }
};
const isWesternEdge = (edge) => {
    return edge.includes('w');
};
const isEasternEdge = (edge) => {
    return edge.includes('e');
};
const isNorthernEdge = (edge) => {
    return edge.includes('n');
};
const isSouthernEdge = (edge) => {
    return edge.includes('s');
};
const edgeMovesOnHorizontalAxis = (edge) => {
    return isEasternEdge(edge) || isWesternEdge(edge);
};
const edgeMovesOnVerticalAxis = (edge) => {
    return isNorthernEdge(edge) || isSouthernEdge(edge);
};
const cursorMap = {
    e: 'ew-resize',
    n: 'ns-resize',
    ne: 'nesw-resize',
    nw: 'nwse-resize',
    s: 'ns-resize',
    se: 'nwse-resize',
    sw: 'nesw-resize',
    w: 'ew-resize',
};
const dropLockedAxes = (vec, options) => {
    return {
        x: options.xAxisLocked ? 0 : vec.x,
        y: options.yAxisLocked ? 0 : vec.y,
    };
};
const axisLockCursorData = (cursorData, options) => {
    return {
        client: dropLockedAxes(cursorData.client, options),
        delta: dropLockedAxes(cursorData.delta, options),
        total: dropLockedAxes(cursorData.total, options),
        origin: cursorData.origin,
    };
};
const snap = (resize) => {
    if (resize.height !== undefined) {
        resize.height = Math.floor(resize.height);
    }
    if (resize.width !== undefined) {
        resize.width = Math.floor(resize.width);
    }
    if (resize.x !== undefined) {
        resize.x = Math.ceil(resize.x);
    }
    if (resize.y !== undefined) {
        resize.y = Math.ceil(resize.y);
    }
    return resize;
};
const calculateResizeData = (cursorData, context, options, container) => {
    snap(context.originalSize);
    let width = context.originalSize.width / container.options.zoom;
    let height = context.originalSize.height / container.options.zoom;
    let x = context.originalSize.x / container.options.zoom;
    let y = context.originalSize.y / container.options.zoom;
    if (context.eastern) {
        width += cursorData.total.x;
    }
    if (context.western) {
        x += cursorData.total.x;
        width -= cursorData.total.x;
    }
    if (context.southern) {
        height += cursorData.total.y;
    }
    if (context.northern) {
        y += cursorData.total.y;
        height -= cursorData.total.y;
    }
    const resize = {
        width,
        height,
        x,
        y,
    };
    snap(resize);
    // Verify
    const styleCheck = checkStyleResult(options.target, resize);
    const after = container.zoomRectangle(styleCheck.after);
    if (context.western && width <= after.width) {
        const originalRight = context.originalSize.x + context.originalSize.width;
        resize.width = after.width;
        resize.x = originalRight - after.width;
        resize.x /= container.options.zoom;
        resize.width /= container.options.zoom;
    }
    if (context.northern && height <= after.height) {
        const originalBottom = context.originalSize.y + context.originalSize.height;
        resize.height = after.height;
        resize.y = originalBottom - after.height;
        resize.y /= container.options.zoom;
        resize.height /= container.options.zoom;
    }
    snap(resize);
    return resize;
};
export class ResizeHandler extends Handler {
    actionContext;
    debugElement;
    preferredCursor(event) {
        if (this.actionContext) {
            return cursorMap[this.actionContext.initialEdge];
        }
        else {
            const rectangle = this.container.zoomRectangle(this.options.handle.getBoundingClientRect());
            const edgeSegment = getEdgeSegment(this.container.offsetWithContainer(event), rectangle, this.options, this.container);
            return edgeSegment ? cursorMap[edgeSegment] : undefined;
        }
    }
    initialize() {
        if (this.container.options.debug) {
            this.debugElement = this.createDebugElement();
        }
    }
    everyMove(_pointerEvent) {
        if (this.debugElement) {
            this.updateDebugElementPosition(this.debugElement);
        }
    }
    createDebugElement() {
        const body = document.querySelector('body');
        const existingDebugElement = document.querySelector('#debugElement');
        if (existingDebugElement) {
            existingDebugElement.remove();
        }
        if (body) {
            const containerRect = this.container.getContainerRect();
            const debugElement = document.createElement('canvas');
            debugElement.id = 'debugElement';
            debugElement.style.pointerEvents = 'none';
            debugElement.style.opacity = '0.5';
            debugElement.style.backgroundColor = 'red';
            debugElement.style.display = 'block';
            debugElement.style.position = 'fixed';
            debugElement.style.zIndex = '999999';
            debugElement.style.left = containerRect.x + 'px';
            debugElement.style.top = containerRect.y + 'px';
            debugElement.style.width = body.offsetWidth.toString() + 'px';
            debugElement.style.height = body.offsetHeight.toString() + 'px';
            debugElement.width = body.offsetWidth;
            debugElement.height = body.offsetHeight;
            this.updateDebugElementPosition(debugElement);
            body.append(debugElement);
            return debugElement;
        }
        else {
            throw new Error('nobody is here');
        }
    }
    updateDebugElementPosition(element) {
        const context = element.getContext('2d');
        const rectangle = this.container.zoomRectangle(this.options.handle.getBoundingClientRect());
        if (context) {
            context.clearRect(0, 0, element.width, element.height);
            context.fillStyle = 'rgb(10, 10, 250)';
            context.fillRect(10, 10, 20, 20);
            const resolution = 2;
            for (let x = rectangle.x; x < rectangle.x + rectangle.width; x += resolution) {
                for (let y = rectangle.y; y < rectangle.y + rectangle.height; y += resolution) {
                    const vec = {
                        x,
                        y,
                    };
                    const edge = getEdgeSegment(vec, rectangle, { edgeInnerWidth: 5 }, this.container);
                    if (edge) {
                        context.fillStyle = 'rgb(40, 220, 40)';
                        context.fillRect(x, y, resolution, resolution);
                    }
                }
            }
        }
    }
    begin(event) {
        const handleRect = this.container.zoomRectangle(this.options.handle.getBoundingClientRect());
        const targetRect = this.container.zoomRectangle(this.options.target.getBoundingClientRect());
        const edge = getEdgeSegment(this.container.offsetWithContainer(event), handleRect, this.options, this.container);
        if (edge) {
            this.actionContext = {
                pointerOrigin: this.container.getEventPositionWithOffset(event),
                lastPointerPositon: this.container.getEventPositionWithOffset(event),
                originalSize: { ...targetRect },
                initialEvent: event,
                initialEdge: edge,
                xAxisLocked: !edgeMovesOnHorizontalAxis(edge),
                yAxisLocked: !edgeMovesOnVerticalAxis(edge),
                eastern: isEasternEdge(edge),
                northern: isNorthernEdge(edge),
                southern: isSouthernEdge(edge),
                western: isWesternEdge(edge),
                lastSize: { ...targetRect },
            };
            snap(this.actionContext.originalSize);
            snap(this.actionContext.lastSize);
            const cursor = calculateCursorData(event, this.actionContext, this.container);
            const axisLockedCursorData = axisLockCursorData(cursor, this.actionContext);
            const resize = calculateResizeData(cursor, this.actionContext, this.options, this.container);
            this.options.listeners?.resizeBegin?.({
                handle: this.options.handle,
                target: this.options.target,
                event,
                cursor,
                axisLockedCursorData,
                resize,
                resizeDelta: substractRectangles(this.actionContext.lastSize, resize),
                resizeTotalDelta: substractRectangles(this.actionContext.originalSize, resize),
            });
        }
    }
    handle(event) {
        if (this.actionContext) {
            const cursor = calculateCursorData(event, this.actionContext, this.container);
            const axisLockedCursorData = axisLockCursorData(cursor, this.actionContext);
            const resize = calculateResizeData(cursor, this.actionContext, this.options, this.container);
            this.options.listeners?.resize?.({
                handle: this.options.handle,
                target: this.options.target,
                event,
                cursor,
                axisLockedCursorData,
                resize,
                resizeDelta: substractRectangles(this.actionContext.lastSize, resize),
                resizeTotalDelta: substractRectangles(this.actionContext.originalSize, resize),
            });
            this.actionContext.lastPointerPositon = cursor.client;
            this.actionContext.lastSize = resize;
        }
    }
    end(event) {
        if (this.actionContext) {
            const cursor = calculateCursorData(event, this.actionContext, this.container);
            const axisLockedCursorData = axisLockCursorData(cursor, this.actionContext);
            const resize = calculateResizeData(cursor, this.actionContext, this.options, this.container);
            this.options.listeners?.resizeEnd?.({
                handle: this.options.handle,
                target: this.options.target,
                event,
                cursor,
                axisLockedCursorData,
                resize,
                resizeDelta: substractRectangles(this.actionContext.lastSize, resize),
                resizeTotalDelta: substractRectangles(this.actionContext.originalSize, resize),
            });
            this.actionContext.lastPointerPositon = cursor.client;
            this.actionContext.lastSize = resize;
        }
        this.actionContext = undefined;
    }
}
