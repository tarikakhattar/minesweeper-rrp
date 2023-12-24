import { SvelteComponentTyped } from "svelte";
import { type BaseWindowState } from './window-state.interface';
declare const __propDef: {
    props: {
        windowState: Partial<BaseWindowState>;
        isOpen?: boolean;
        open?: (centeringElement?: Element | undefined | null) => void;
        close?: (_event?: CustomEvent<undefined>) => void;
        backdropClick?: (event: MouseEvent) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalDialogWindowProps = typeof __propDef.props;
export type ModalDialogWindowEvents = typeof __propDef.events;
export type ModalDialogWindowSlots = typeof __propDef.slots;
export default class ModalDialogWindow extends SvelteComponentTyped<ModalDialogWindowProps, ModalDialogWindowEvents, ModalDialogWindowSlots> {
    get open(): (centeringElement?: Element | null | undefined) => void;
    get close(): (_event?: CustomEvent<undefined> | undefined) => void;
    get backdropClick(): (event: MouseEvent) => void;
}
export {};
//# sourceMappingURL=modal-dialog-window.svelte.d.ts.map