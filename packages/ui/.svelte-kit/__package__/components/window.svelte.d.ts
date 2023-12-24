import { SvelteComponentTyped } from "svelte";
import { Subject } from 'rxjs';
import type { GrippyContainer } from '../helpers/grippy/grippy';
import type { Rectangle } from './rectangle.interface';
import { type BaseWindowState } from './window-state.interface';
declare const __propDef: {
    props: {
        [x: string]: any;
        windowElement?: HTMLElement | undefined;
        grippy?: GrippyContainer | undefined;
        windowState?: Partial<BaseWindowState> | undefined;
        transient?: boolean;
        canDeactivate?: boolean;
        id?: string | undefined;
        errorNotification?: Subject<void>;
        errorFlash$?: import("rxjs").Observable<boolean | undefined>;
    };
    events: {
        activate: CustomEvent<undefined>;
        resize: CustomEvent<Rectangle>;
        move: CustomEvent<CoordinateLike>;
        minimize: CustomEvent<undefined>;
        restore: CustomEvent<undefined>;
        maximize: CustomEvent<undefined>;
        help: CustomEvent<undefined>;
        close: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'title-bar-context-menu': {};
        menu: {};
        default: {};
        statusBar: {};
    };
};
export type WindowProps = typeof __propDef.props;
export type WindowEvents = typeof __propDef.events;
export type WindowSlots = typeof __propDef.slots;
export default class Window extends SvelteComponentTyped<WindowProps, WindowEvents, WindowSlots> {
    get errorNotification(): Subject<void>;
    get errorFlash$(): import("rxjs").Observable<boolean | undefined>;
}
export {};
//# sourceMappingURL=window.svelte.d.ts.map