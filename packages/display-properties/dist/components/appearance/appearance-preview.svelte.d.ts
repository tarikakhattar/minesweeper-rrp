import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        desktopColorScheme: DesktopColorScheme;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AppearancePreviewProps = typeof __propDef.props;
export type AppearancePreviewEvents = typeof __propDef.events;
export type AppearancePreviewSlots = typeof __propDef.slots;
export default class AppearancePreview extends SvelteComponentTyped<AppearancePreviewProps, AppearancePreviewEvents, AppearancePreviewSlots> {
}
export {};
//# sourceMappingURL=appearance-preview.svelte.d.ts.map