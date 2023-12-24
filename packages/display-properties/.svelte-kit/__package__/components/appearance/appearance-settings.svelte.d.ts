import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        desktopSlice: DesktopSlice;
        temporaryScheme?: any;
    };
    events: {
        change: CustomEvent<DesktopColorScheme>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AppearanceSettingsProps = typeof __propDef.props;
export type AppearanceSettingsEvents = typeof __propDef.events;
export type AppearanceSettingsSlots = typeof __propDef.slots;
export default class AppearanceSettings extends SvelteComponentTyped<AppearanceSettingsProps, AppearanceSettingsEvents, AppearanceSettingsSlots> {
}
export {};
//# sourceMappingURL=appearance-settings.svelte.d.ts.map