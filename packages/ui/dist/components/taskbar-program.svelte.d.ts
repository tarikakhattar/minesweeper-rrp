import { SvelteComponentTyped } from "svelte";
import { type DesktopSlice } from '../store/desktop.store';
import type { WindowState } from './window-state.interface';
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
        next: WindowState;
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TaskbarProgramProps = typeof __propDef.props;
export type TaskbarProgramEvents = typeof __propDef.events;
export type TaskbarProgramSlots = typeof __propDef.slots;
export default class TaskbarProgram extends SvelteComponentTyped<TaskbarProgramProps, TaskbarProgramEvents, TaskbarProgramSlots> {
}
export {};
//# sourceMappingURL=taskbar-program.svelte.d.ts.map