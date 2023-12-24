import { SvelteComponentTyped } from "svelte";
import type { DesktopSlice, ProgramId } from '../store';
import type { WindowComponents } from './window-state.interface';
declare const __propDef: {
    props: {
        windowComponents: Record<ProgramId, WindowComponents>;
        desktopSlice: DesktopSlice;
        zoom?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DesktopProps = typeof __propDef.props;
export type DesktopEvents = typeof __propDef.events;
export type DesktopSlots = typeof __propDef.slots;
export default class Desktop extends SvelteComponentTyped<DesktopProps, DesktopEvents, DesktopSlots> {
}
export {};
//# sourceMappingURL=desktop.svelte.d.ts.map