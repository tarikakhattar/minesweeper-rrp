import { SvelteComponentTyped } from "svelte";
import { type MinesweeperGame } from '../store';
declare const __propDef: {
    props: {
        windowState: BaseWindowState;
        internals: MinesweeperGame;
    };
    events: {
        close: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MinesweeperMenuProps = typeof __propDef.props;
export type MinesweeperMenuEvents = typeof __propDef.events;
export type MinesweeperMenuSlots = typeof __propDef.slots;
export default class MinesweeperMenu extends SvelteComponentTyped<MinesweeperMenuProps, MinesweeperMenuEvents, MinesweeperMenuSlots> {
}
export {};
//# sourceMappingURL=minesweeper-menu.svelte.d.ts.map