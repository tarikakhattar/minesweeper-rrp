import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ClockProps = typeof __propDef.props;
export type ClockEvents = typeof __propDef.events;
export type ClockSlots = typeof __propDef.slots;
export default class Clock extends SvelteComponentTyped<ClockProps, ClockEvents, ClockSlots> {
}
export {};
//# sourceMappingURL=clock.svelte.d.ts.map