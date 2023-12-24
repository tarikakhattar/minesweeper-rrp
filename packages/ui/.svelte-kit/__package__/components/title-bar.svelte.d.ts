import { SvelteComponentTyped } from "svelte";
import type { TitleBarEvents } from './title-bar-events.interface';
import type { WindowState } from './window-state.interface';
declare const __propDef: {
    props: {
        [x: string]: any;
        windowState: WindowState;
        error?: boolean | undefined;
    };
    events: {
        contextmenu: MouseEvent;
        minimize: CustomEvent<undefined>;
        restore: CustomEvent<undefined>;
        maximize: CustomEvent<undefined>;
        help: CustomEvent<undefined>;
        close: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TitleBarProps = typeof __propDef.props;
type TitleBarEvents_ = typeof __propDef.events;
export { TitleBarEvents_ as TitleBarEvents };
export type TitleBarSlots = typeof __propDef.slots;
export default class TitleBar extends SvelteComponentTyped<TitleBarProps, TitleBarEvents, TitleBarSlots> {
}
//# sourceMappingURL=title-bar.svelte.d.ts.map