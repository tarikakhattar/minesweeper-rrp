import { SvelteComponentTyped } from "svelte";
import type { CoordinateLike } from '@w2k/common';
declare const __propDef: {
    props: {
        [x: string]: any;
        position?: (CoordinateLike & {
            height?: number;
            width?: number;
        }) | undefined;
        spawnElement?: HTMLElement | undefined;
        xAxisAnimated?: boolean;
        yAxisAnimated?: boolean;
    };
    events: {
        dismiss: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ContextMenuProps = typeof __propDef.props;
export type ContextMenuEvents = typeof __propDef.events;
export type ContextMenuSlots = typeof __propDef.slots;
export default class ContextMenu extends SvelteComponentTyped<ContextMenuProps, ContextMenuEvents, ContextMenuSlots> {
}
export {};
//# sourceMappingURL=context-menu.svelte.d.ts.map