import { SvelteComponentTyped } from "svelte";
import type { GrippyContainer } from '../helpers/grippy';
import { type DesktopSlice } from '../store';
import { type Rectangle } from './rectangle.interface';
declare const __propDef: {
    props: {
        grippy: GrippyContainer;
        desktopSlice: DesktopSlice;
        selectArea?: Rectangle | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DesktopShortcutsProps = typeof __propDef.props;
export type DesktopShortcutsEvents = typeof __propDef.events;
export type DesktopShortcutsSlots = typeof __propDef.slots;
export default class DesktopShortcuts extends SvelteComponentTyped<DesktopShortcutsProps, DesktopShortcutsEvents, DesktopShortcutsSlots> {
}
export {};
//# sourceMappingURL=desktop-shortcuts.svelte.d.ts.map