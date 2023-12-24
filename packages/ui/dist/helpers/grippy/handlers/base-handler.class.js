export const normalizeHandlerOptions = (options) => {
    return {
        target: options.target,
        handle: options.handle ?? options.target,
    };
};
export class Handler {
    container;
    _enabled = true;
    get enabled() {
        return this._enabled;
    }
    options;
    constructor(container, options) {
        this.container = container;
        this.options = options;
    }
    enable() {
        this._enabled = true;
    }
    disable() {
        this._enabled = false;
    }
    setEnabled(enabled) {
        this._enabled = enabled;
    }
    unsubscribe() {
        this.container.removeHandler(this);
    }
}
