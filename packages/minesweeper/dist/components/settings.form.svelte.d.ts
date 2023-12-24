import { SvelteComponentTyped } from "svelte";
import type { Observable } from 'rxjs';
import type { GamePreset } from '../interfaces';
declare const __propDef: {
    props: {
        presets$: Observable<Record<string, GamePreset>>;
        preset: GamePreset;
    };
    events: {
        submit: CustomEvent<any>;
        cancel: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SettingsProps = typeof __propDef.props;
export type SettingsEvents = typeof __propDef.events;
export type SettingsSlots = typeof __propDef.slots;
export default class Settings extends SvelteComponentTyped<SettingsProps, SettingsEvents, SettingsSlots> {
}
export {};
//# sourceMappingURL=settings.form.svelte.d.ts.map