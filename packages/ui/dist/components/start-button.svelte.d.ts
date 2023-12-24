import { SvelteComponentTyped } from "svelte";
import type { DesktopSlice } from '../store/desktop.store';
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
        startButton: HTMLElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StartButtonProps = typeof __propDef.props;
export type StartButtonEvents = typeof __propDef.events;
export type StartButtonSlots = typeof __propDef.slots;
export default class StartButton extends SvelteComponentTyped<StartButtonProps, StartButtonEvents, StartButtonSlots> {
}
export {};
//# sourceMappingURL=start-button.svelte.d.ts.map