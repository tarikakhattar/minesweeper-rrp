import { SvelteComponentTyped } from "svelte";
import { type ColorRgb } from './color-picker.interface';
declare const __propDef: {
    props: {
        customColor?: ColorRgb | undefined;
    };
    events: {
        select: CustomEvent<ColorRgb>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ColorQuickPaletteProps = typeof __propDef.props;
export type ColorQuickPaletteEvents = typeof __propDef.events;
export type ColorQuickPaletteSlots = typeof __propDef.slots;
export default class ColorQuickPalette extends SvelteComponentTyped<ColorQuickPaletteProps, ColorQuickPaletteEvents, ColorQuickPaletteSlots> {
}
export {};
//# sourceMappingURL=color-quick-palette.svelte.d.ts.map