/** @typedef {typeof __propDef.props}  PanelProps */
/** @typedef {typeof __propDef.events}  PanelEvents */
/** @typedef {typeof __propDef.slots}  PanelSlots */
export default class Panel extends SvelteComponentTyped<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PanelProps = typeof __propDef.props;
export type PanelEvents = typeof __propDef.events;
export type PanelSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=panel.svelte.d.ts.map