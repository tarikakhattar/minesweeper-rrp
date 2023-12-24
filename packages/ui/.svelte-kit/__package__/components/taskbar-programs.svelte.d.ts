import { SvelteComponentTyped } from "svelte";
import type { DesktopSlice } from '../store/desktop.store';
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TaskbarProgramsProps = typeof __propDef.props;
export type TaskbarProgramsEvents = typeof __propDef.events;
export type TaskbarProgramsSlots = typeof __propDef.slots;
export default class TaskbarPrograms extends SvelteComponentTyped<TaskbarProgramsProps, TaskbarProgramsEvents, TaskbarProgramsSlots> {
}
export {};
//# sourceMappingURL=taskbar-programs.svelte.d.ts.map