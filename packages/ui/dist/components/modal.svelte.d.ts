import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        backdropCanClose?: boolean;
        isOpen?: boolean;
        darkBackdrop?: boolean;
        open?: () => void;
        close?: (_event?: CustomEvent<undefined>) => void;
    };
    events: {
        keypress: KeyboardEvent;
        error: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
    get open(): () => void;
    get close(): (_event?: CustomEvent<undefined> | undefined) => void;
}
export {};
//# sourceMappingURL=modal.svelte.d.ts.map