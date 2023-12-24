import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
        windowState: WindowState;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DisplayPropertiesProps = typeof __propDef.props;
export type DisplayPropertiesEvents = typeof __propDef.events;
export type DisplayPropertiesSlots = typeof __propDef.slots;
export default class DisplayProperties extends SvelteComponentTyped<DisplayPropertiesProps, DisplayPropertiesEvents, DisplayPropertiesSlots> {
}
export {};
//# sourceMappingURL=display-properties.svelte.d.ts.map