import { SvelteComponentTyped } from "svelte";
import type { SmileyState } from '../store';
declare const __propDef: {
    props: {
        smileyState: SmileyState;
    };
    events: {
        click: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SmileyProps = typeof __propDef.props;
export type SmileyEvents = typeof __propDef.events;
export type SmileySlots = typeof __propDef.slots;
export default class Smiley extends SvelteComponentTyped<SmileyProps, SmileyEvents, SmileySlots> {
}
export {};
//# sourceMappingURL=smiley.svelte.d.ts.map