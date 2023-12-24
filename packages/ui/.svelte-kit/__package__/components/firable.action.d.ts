/// <reference types="svelte" />
import type { ActionReturn } from 'svelte/action';
export interface FirableEvents {
    'on:fire'?: (event: CustomEvent<PointerEvent>) => void;
    'on:alternativefire'?: (event: CustomEvent<PointerEvent>) => void;
    'on:cancelfire'?: (event: CustomEvent<PointerEvent>) => void;
    'on:startfire'?: (event: CustomEvent<PointerEvent>) => void;
    'on:doublefire'?: (event: CustomEvent<PointerEvent>) => void;
}
export interface FirableOptions {
    disable?: boolean;
    /**
     * TODO: cancel immediately on move, don't wait until leave
     */
    draggable?: boolean;
}
/**
 * TODO: cleanup
 * TODO: add doublelong
 */
export declare function firable(node: HTMLElement, options?: FirableOptions): ActionReturn<FirableOptions, FirableEvents>;
//# sourceMappingURL=firable.action.d.ts.map