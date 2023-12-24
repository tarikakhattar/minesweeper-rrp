import { SvelteComponentTyped } from "svelte";
import type { WindowState } from './window-state.interface';
import type { DesktopSlice } from '../store/desktop.store';
declare const __propDef: {
    props: {
        windowState: WindowState;
        windowSlice: import("@tinyslice/core").Slice<Record<string, import("./window-state.interface").BaseWindowState>, import("./window-state.interface").BaseWindowState, {
            windowActions: {
                maximize: import("@tinyslice/core").Action<unknown>;
                restore: import("@tinyslice/core").Action<unknown>;
                move: import("@tinyslice/core").Action<CoordinateLike>;
                resize: import("@tinyslice/core").Action<import("./rectangle.interface").Rectangle>;
            };
            programLogic: unknown;
            position$: import("@tinyslice/core").Slice<import("./window-state.interface").BaseWindowState, any, unknown>;
            maximized$: import("@tinyslice/core").Slice<import("./window-state.interface").BaseWindowState, NonNullable<import("./window-state.interface").WindowMaximizationState>, unknown>;
            minimized$: import("@tinyslice/core").Slice<import("./window-state.interface").BaseWindowState, NonNullable<import("./window-state.interface").WindowMinimizationState>, unknown>;
            active$: import("@tinyslice/core").Slice<import("./window-state.interface").BaseWindowState, boolean, unknown>;
        }>;
        desktopSlice: DesktopSlice;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WindowContextItemsProps = typeof __propDef.props;
export type WindowContextItemsEvents = typeof __propDef.events;
export type WindowContextItemsSlots = typeof __propDef.slots;
export default class WindowContextItems extends SvelteComponentTyped<WindowContextItemsProps, WindowContextItemsEvents, WindowContextItemsSlots> {
}
export {};
//# sourceMappingURL=window-context-items.svelte.d.ts.map