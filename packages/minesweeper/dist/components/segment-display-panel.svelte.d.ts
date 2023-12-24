import { SvelteComponentTyped } from "svelte";
import './segment-display.scss';
declare const __propDef: {
    props: {
        value: number | undefined;
        paddedLength?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SegmentDisplayPanelProps = typeof __propDef.props;
export type SegmentDisplayPanelEvents = typeof __propDef.events;
export type SegmentDisplayPanelSlots = typeof __propDef.slots;
export default class SegmentDisplayPanel extends SvelteComponentTyped<SegmentDisplayPanelProps, SegmentDisplayPanelEvents, SegmentDisplayPanelSlots> {
}
export {};
//# sourceMappingURL=segment-display-panel.svelte.d.ts.map