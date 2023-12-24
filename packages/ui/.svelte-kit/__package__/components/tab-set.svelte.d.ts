import { SvelteComponentTyped } from "svelte";
import type { TabSetTabs } from './tab-set.interface';
declare const __propDef: {
    props: {
        tabs?: TabSetTabs;
        selected?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        content: {
            tab: string | undefined;
        };
    };
};
export type TabSetProps = typeof __propDef.props;
export type TabSetEvents = typeof __propDef.events;
export type TabSetSlots = typeof __propDef.slots;
export default class TabSet extends SvelteComponentTyped<TabSetProps, TabSetEvents, TabSetSlots> {
}
export {};
//# sourceMappingURL=tab-set.svelte.d.ts.map