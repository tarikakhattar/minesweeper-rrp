import { SvelteComponentTyped } from "svelte";
import type { MinesweeperGame } from '../store';
import '../../static/minesweeper.scss';
declare const __propDef: {
    props: {
        internals: MinesweeperGame;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MinesweeperProps = typeof __propDef.props;
export type MinesweeperEvents = typeof __propDef.events;
export type MinesweeperSlots = typeof __propDef.slots;
export default class Minesweeper extends SvelteComponentTyped<MinesweeperProps, MinesweeperEvents, MinesweeperSlots> {
}
export {};
//# sourceMappingURL=minesweeper.svelte.d.ts.map