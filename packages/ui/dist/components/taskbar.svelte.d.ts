import { SvelteComponentTyped } from "svelte";
import type { DesktopSlice } from '../store/desktop.store';
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        taskbar: {};
        default: {};
        quickbar: {};
    };
};
export type TaskbarProps = typeof __propDef.props;
export type TaskbarEvents = typeof __propDef.events;
export type TaskbarSlots = typeof __propDef.slots;
export default class Taskbar extends SvelteComponentTyped<TaskbarProps, TaskbarEvents, TaskbarSlots> {
}
export {};
//# sourceMappingURL=taskbar.svelte.d.ts.map