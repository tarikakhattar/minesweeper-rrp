import { SvelteComponentTyped } from "svelte";
import type { ColorRgb } from './color-picker.interface';
declare const __propDef: {
    props: {
        color: ColorRgb;
    };
    events: {
        select: CustomEvent<ColorRgb>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ColorSelectButtonProps = typeof __propDef.props;
export type ColorSelectButtonEvents = typeof __propDef.events;
export type ColorSelectButtonSlots = typeof __propDef.slots;
export default class ColorSelectButton extends SvelteComponentTyped<ColorSelectButtonProps, ColorSelectButtonEvents, ColorSelectButtonSlots> {
}
export {};
//# sourceMappingURL=color-select-button.svelte.d.ts.map