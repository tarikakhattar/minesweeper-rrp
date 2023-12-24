import { SvelteComponentTyped } from "svelte";
import type { Observable } from 'rxjs';
import type { HighscoreEntry } from '../store';
declare const __propDef: {
    props: {
        highscoreEntries$: Observable<HighscoreEntry[]>;
        isClearingEnabled?: boolean;
    };
    events: {
        clear: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HighscoreProps = typeof __propDef.props;
export type HighscoreEvents = typeof __propDef.events;
export type HighscoreSlots = typeof __propDef.slots;
export default class Highscore extends SvelteComponentTyped<HighscoreProps, HighscoreEvents, HighscoreSlots> {
}
export {};
//# sourceMappingURL=highscore.svelte.d.ts.map