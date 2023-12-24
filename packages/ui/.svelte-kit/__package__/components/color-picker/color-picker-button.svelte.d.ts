import { SvelteComponentTyped } from "svelte";
import { type ColorRgb } from './color-picker.interface';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        color?: ColorRgb | undefined;
        open?: boolean;
    };
    events: {
        change: CustomEvent<ColorRgb>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ColorPickerButtonProps = typeof __propDef.props;
export type ColorPickerButtonEvents = typeof __propDef.events;
export type ColorPickerButtonSlots = typeof __propDef.slots;
export default class ColorPickerButton extends SvelteComponentTyped<ColorPickerButtonProps, ColorPickerButtonEvents, ColorPickerButtonSlots> {
}
export {};
//# sourceMappingURL=color-picker-button.svelte.d.ts.map