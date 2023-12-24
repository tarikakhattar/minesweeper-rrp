import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: number | string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SevenSegmentDisplayProps = typeof __propDef.props;
export type SevenSegmentDisplayEvents = typeof __propDef.events;
export type SevenSegmentDisplaySlots = typeof __propDef.slots;
export default class SevenSegmentDisplay extends SvelteComponentTyped<SevenSegmentDisplayProps, SevenSegmentDisplayEvents, SevenSegmentDisplaySlots> {
}
export {};
//# sourceMappingURL=seven-segment-display.svelte.d.ts.map