import { DragHandler, normalizeDragHandlerOptions, } from './handlers/drag-handler.class';
import { ResizeHandler, normalizeResizeHandlerOptions, } from './handlers/index.js';
export const normalizeGrippyContainerOptions = (options) => {
    return {
        rootElement: options?.rootElement ?? document.querySelector('body'),
        zoom: options?.zoom ?? 1,
        debug: options?.debug ?? false,
    };
};
export class GrippyContainer {
    options;
    allHandlers = new Set();
    handlersByHandleElement = new Map();
    activeHandlers = [];
    container;
    lastMoveTimestamp = performance.now();
    documentListeners = {
        pointerdown: (event) => {
            this.activateAffectedHandlers(event);
            for (const activeHandler of this.activeHandlers) {
                activeHandler.begin(event);
            }
        },
        pointermove: (event) => {
            const now = performance.now();
            for (const activeHandler of this.activeHandlers) {
                activeHandler.handle(event);
            }
            let cursor = undefined;
            const handlersUnder = this.getFirstElementsHandlersInEvent(event);
            if (handlersUnder) {
                for (const handler of handlersUnder) {
                    cursor ??= handler.preferredCursor?.(event);
                }
            }
            if (now - this.lastMoveTimestamp >= 50) {
                for (const handler of this.allHandlers) {
                    handler.everyMove?.(event);
                }
            }
            this.lastMoveTimestamp = now;
            this.options.rootElement.style.cursor = cursor ?? '';
        },
        pointerup: (event) => {
            for (const activeHandler of this.activeHandlers) {
                activeHandler.end(event);
            }
            this.deactivateAllActiveHandlers();
        },
    };
    constructor(rawOptions) {
        this.options = normalizeGrippyContainerOptions(rawOptions);
    }
    getContainerRect() {
        const rectangle = this.container.getBoundingClientRect();
        return {
            height: rectangle.height * this.options.zoom,
            width: rectangle.width * this.options.zoom,
            x: rectangle.x * this.options.zoom,
            y: rectangle.y * this.options.zoom,
        };
    }
    offsetWithContainer(vec) {
        const offset = this.getContainerRect();
        return {
            x: vec.x - offset.x,
            y: vec.y - offset.y,
        };
    }
    getEventPositionWithOffset(event) {
        const offset = this.getContainerRect();
        return {
            x: (event.x - offset.x) / this.options.zoom,
            y: (event.y - offset.y) / this.options.zoom,
        };
    }
    zoomRectangle(rectangle) {
        const containerRectangle = this.container.getBoundingClientRect();
        return {
            height: rectangle.height * this.options.zoom,
            width: rectangle.width * this.options.zoom,
            x: (rectangle.x - containerRectangle.x) * this.options.zoom,
            y: (rectangle.y - containerRectangle.y) * this.options.zoom,
        };
    }
    getFirstElementsHandlersInEvent(event) {
        let target = event.target;
        while (target) {
            const handlers = this.handlersByHandleElement.get(target);
            if (handlers) {
                return handlers.filter((handler) => handler.enabled);
            }
            target = target.parentElement;
        }
        return undefined;
    }
    activateAffectedHandlers(event) {
        const handlers = this.getFirstElementsHandlersInEvent(event);
        if (handlers) {
            for (const handler of handlers) {
                this.activeHandlers.push(handler);
            }
        }
    }
    deactivateAllActiveHandlers() {
        this.activeHandlers.length = 0;
    }
    initialize(container) {
        this.container = container;
        if (this.options.zoom) {
            this.options.rootElement.style.zoom =
                this.options.zoom * 100 + '%';
        }
        for (const [type, listener] of Object.entries(this.documentListeners)) {
            document.addEventListener(type, listener);
        }
    }
    draggable(options) {
        return this.registerHandler(DragHandler, normalizeDragHandlerOptions(options));
    }
    resizable(options) {
        return this.registerHandler(ResizeHandler, normalizeResizeHandlerOptions(options));
    }
    registerHandler(handlerType, options) {
        let handlerInstance;
        const handlers = this.handlersByHandleElement.get(options.target) ?? [];
        const existingHandler = handlers.find((handler) => handler instanceof handlerType);
        if (existingHandler) {
            return existingHandler;
        }
        else {
            handlerInstance = new handlerType(this, options);
            handlers.push(handlerInstance);
            this.handlersByHandleElement.set(options.handle, handlers);
            this.allHandlers.add(handlerInstance);
            handlerInstance.initialize?.();
            return handlerInstance;
        }
    }
    /**
     * Used by handlers when they unsubscribe
     */
    removeHandler(handler) {
        const elementsHandlers = this.handlersByHandleElement.get(handler.options.target);
        if (elementsHandlers) {
            elementsHandlers.splice(elementsHandlers.indexOf(handler), 1);
            if (elementsHandlers.length === 0) {
                this.handlersByHandleElement.delete(handler.options.target);
                this.allHandlers.delete(handler);
                handler.destroy?.();
            }
        }
    }
    unsubscribe() {
        for (const [type, listener] of Object.entries(this.documentListeners)) {
            document.removeEventListener(type, listener);
        }
    }
}
