import { SvelteComponentTyped } from "svelte";
import type { Rectangle } from './rectangle.interface';
declare const __propDef: {
    props: {
        area: Rectangle | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AreaSelectionProps = typeof __propDef.props;
export type AreaSelectionEvents = typeof __propDef.events;
export type AreaSelectionSlots = typeof __propDef.slots;
export default class AreaSelection extends SvelteComponentTyped<AreaSelectionProps, AreaSelectionEvents, AreaSelectionSlots> {
}
export {};
//# sourceMappingURL=area-selection.svelte.d.ts.map