import { SvelteComponentTyped } from "svelte";
import { type GrippyContainer, type Vec2 } from '../helpers';
import type { ShortcutState } from '../store';
declare const __propDef: {
    props: {
        shortcutState: ShortcutState;
        grippy: GrippyContainer;
        shortcutIconElement?: HTMLElement | undefined;
    };
    events: {
        dblclick: MouseEvent;
        move: CustomEvent<Vec2>;
        drop: CustomEvent<Vec2>;
        select: CustomEvent<number>;
        spawn: CustomEvent<string>;
        delete: CustomEvent<number>;
        beginRename: CustomEvent<number>;
        rename: CustomEvent<Pick<ShortcutState, "shortcutId" | "name">>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ShortcutProps = typeof __propDef.props;
export type ShortcutEvents = typeof __propDef.events;
export type ShortcutSlots = typeof __propDef.slots;
export default class Shortcut extends SvelteComponentTyped<ShortcutProps, ShortcutEvents, ShortcutSlots> {
}
export {};
//# sourceMappingURL=shortcut.svelte.d.ts.map