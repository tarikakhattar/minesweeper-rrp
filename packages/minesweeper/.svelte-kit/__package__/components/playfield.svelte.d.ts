import { SvelteComponentTyped } from "svelte";
import type { Slice } from '@tinyslice/core';
import type { GameInstance, TileState } from '../store';
declare const __propDef: {
    props: {
        [x: string]: any;
        cheating: boolean;
        tileSlice: Slice<GameInstance, Record<`${number},${number}`, TileState>>;
    };
    events: {
        startFire: CustomEvent<CoordinateLike>;
        fire: CustomEvent<CoordinateLike>;
        alternativeFire: CustomEvent<CoordinateLike>;
        cancelFire: CustomEvent<CoordinateLike>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlayfieldProps = typeof __propDef.props;
export type PlayfieldEvents = typeof __propDef.events;
export type PlayfieldSlots = typeof __propDef.slots;
export default class Playfield extends SvelteComponentTyped<PlayfieldProps, PlayfieldEvents, PlayfieldSlots> {
}
export {};
//# sourceMappingURL=playfield.svelte.d.ts.map