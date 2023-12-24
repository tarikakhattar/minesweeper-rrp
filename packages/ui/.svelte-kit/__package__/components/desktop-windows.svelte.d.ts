import { SvelteComponentTyped } from "svelte";
import type { GrippyContainer } from '../helpers/grippy/grippy';
import { type DesktopSlice, type ProgramId } from '../store';
import type { WindowComponents } from './window-state.interface';
declare const __propDef: {
    props: {
        grippy: GrippyContainer;
        desktopSlice: DesktopSlice;
        windowComponents: Record<ProgramId, WindowComponents>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DesktopWindowsProps = typeof __propDef.props;
export type DesktopWindowsEvents = typeof __propDef.events;
export type DesktopWindowsSlots = typeof __propDef.slots;
export default class DesktopWindows extends SvelteComponentTyped<DesktopWindowsProps, DesktopWindowsEvents, DesktopWindowsSlots> {
}
export {};
//# sourceMappingURL=desktop-windows.svelte.d.ts.map