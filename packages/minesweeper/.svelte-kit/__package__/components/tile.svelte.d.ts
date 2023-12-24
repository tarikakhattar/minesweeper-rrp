import { SvelteComponentTyped } from "svelte";
import type { TileState } from '../store';
declare const __propDef: {
    props: {
        tile: TileState;
        cheating?: boolean;
    };
    events: {
        startFire: CustomEvent<CoordinateLike>;
        cancelFire: CustomEvent<CoordinateLike>;
        fire: CustomEvent<CoordinateLike>;
        alternativeFire: CustomEvent<CoordinateLike>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TileProps = typeof __propDef.props;
export type TileEvents = typeof __propDef.events;
export type TileSlots = typeof __propDef.slots;
export default class Tile extends SvelteComponentTyped<TileProps, TileEvents, TileSlots> {
}
export {};
//# sourceMappingURL=tile.svelte.d.ts.map