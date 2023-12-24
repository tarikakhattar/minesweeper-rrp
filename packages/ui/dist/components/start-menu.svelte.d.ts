import { SvelteComponentTyped } from "svelte";
import type { DesktopSlice } from '../store';
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
        startButton: HTMLElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type StartMenuProps = typeof __propDef.props;
export type StartMenuEvents = typeof __propDef.events;
export type StartMenuSlots = typeof __propDef.slots;
export default class StartMenu extends SvelteComponentTyped<StartMenuProps, StartMenuEvents, StartMenuSlots> {
}
export {};
//# sourceMappingURL=start-menu.svelte.d.ts.map