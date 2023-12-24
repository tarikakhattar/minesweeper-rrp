/** @typedef {typeof __propDef.props}  W2kGlobalProps */
/** @typedef {typeof __propDef.events}  W2kGlobalEvents */
/** @typedef {typeof __propDef.slots}  W2kGlobalSlots */
export default class W2kGlobal extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type W2kGlobalProps = typeof __propDef.props;
export type W2kGlobalEvents = typeof __propDef.events;
export type W2kGlobalSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=w2k-global.svelte.d.ts.map