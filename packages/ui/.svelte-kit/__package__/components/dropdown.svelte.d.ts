import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        hotkeyLetter?: string | undefined;
        active: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
export default class Dropdown extends SvelteComponentTyped<DropdownProps, DropdownEvents, DropdownSlots> {
}
export {};
//# sourceMappingURL=dropdown.svelte.d.ts.map