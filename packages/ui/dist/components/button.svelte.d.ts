import { SvelteComponentTyped } from "svelte";
import { ButtonLook } from './button-look.enum';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        appearDisabled?: boolean;
        pressed?: boolean;
        longpressTime?: number;
        type?: 'button' | 'submit' | 'reset';
        look?: ButtonLook | undefined;
        icon?: string | undefined;
        label?: string | undefined;
        title?: string | undefined;
        bold?: boolean;
        id?: string | undefined;
        selfPress?: boolean | undefined;
        hotkeyLetter?: string | undefined;
        active?: boolean | undefined;
        button?: HTMLElement | undefined;
    };
    events: {
        click: MouseEvent;
        mouseup: MouseEvent;
        mousedown: MouseEvent;
        mouseenter: MouseEvent;
        dblclick: MouseEvent;
        contextmenu: MouseEvent;
        pointercancel: PointerEvent;
        pointerenter: PointerEvent;
        startFire: CustomEvent<undefined>;
        fire: CustomEvent<undefined>;
        alternativeFire: CustomEvent<undefined>;
        cancelFire: CustomEvent<undefined>;
        pointerdown: CustomEvent<PointerEvent>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
//# sourceMappingURL=button.svelte.d.ts.map