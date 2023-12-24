import { Slice } from '@tinyslice/core';
import { type CoordinateLike } from '@w2k/common';
import { Observable } from 'rxjs';
import { type BaseWindowState, type WindowState } from '../components/window-state.interface.js';
import type { Rectangle } from '../components/rectangle.interface.js';
import { type DesktopColorScheme } from '../scheme/desktop-color-scheme.js';
export type ProcessId = string;
export type ProgramId = string;
export type ShortcutId = number;
export interface ProgramState {
    name: ProgramId;
    /**
     * Should be 48*48
     */
    icon?: string | undefined;
    /**
     * Should be 24*24
     */
    titleBarIcon?: string | undefined;
    initialWindowState: Partial<BaseWindowState>;
}
export interface ShortcutState {
    shortcutId: ShortcutId;
    name: string;
    icon?: string | undefined;
    program: ProgramId;
    position: CoordinateLike;
    selected: boolean;
    floating: boolean;
    renaming: boolean;
}
export interface DesktopScheme {
    kind: 'standard-scheme' | 'classic-scheme' | 'custom-scheme';
    data: DesktopColorScheme;
}
export interface DesktopState {
    windows: Record<ProcessId, WindowState>;
    programs: Record<ProgramId, ProgramState>;
    shortcuts: Record<string, ShortcutState>;
    activeProcessId: ProcessId | undefined;
    lastSpawned: ProcessId | undefined;
    nextProcessId: ProcessId;
    startMenuOpen: boolean;
    activeScheme: DesktopScheme;
    schemes: Record<string, {
        data: DesktopColorScheme;
        key: string;
        displayName: string;
        builtIn: boolean;
    }>;
    debug: boolean;
}
/**
 * The process identifier used for windows and their corresponding taskbar buttons
 */
export declare const formatPid: (processId: number | string, variant?: 'window' | 'taskbar' | undefined) => string;
export declare const isThereAWindowOriginatingFromPosition: (windows: WindowState[], position: CoordinateLike) => boolean;
export declare const getWorkspaceRectangle: () => DOMRect | undefined;
export declare const centerRectangleIntoRectancle: (toBeCentered: Pick<Rectangle, 'height' | 'width'>, centerOn: Rectangle) => CoordinateLike;
export declare const SHORTCUT_DISTANCE = 75;
export declare const TITLE_BAR_HEIGHT = 18;
export declare const getNextShortcutPosition: (shortcuts: ShortcutState[], start?: any) => CoordinateLike;
export declare const resizeWindow: (windowState: BaseWindowState, resizeData: Rectangle) => BaseWindowState;
export declare const snapShortcutPosition: (position: CoordinateLike) => CoordinateLike;
export declare const createDesktopSlice: <S, T extends Record<string, {
    attach: (parentSlice: Slice<Record<string, WindowState>, BaseWindowState>, key: string) => {
        programSlice: Slice<unknown, any>;
    };
    installEntry: ProgramState;
}>>(parentSlice: Slice<unknown, S, unknown>, programDefinitions: T) => {
    desktop$: Slice<S & Record<"desktop", DesktopState>, DesktopState, {
        actions: {
            spawnProgram: import("@tinyslice/core").Action<string>;
            activateProgram: import("@tinyslice/core").Action<string | undefined>;
        };
        debug$: Slice<DesktopState, boolean, unknown>;
    }>;
    activeScheme$: Slice<DesktopState, DesktopScheme, unknown>;
    toggleActiveSchemeKindAction: import("@tinyslice/core").Action<unknown>;
    activeSchemeKind$: Slice<DesktopScheme, NonNullable<"standard-scheme" | "classic-scheme" | "custom-scheme">, unknown>;
    activeSchemeData$: Slice<DesktopScheme, DesktopColorScheme, unknown>;
    dicedShortcuts: import("@tinyslice/core").DicedSlice<Record<string, ShortcutState>, ShortcutState, {
        shortcutsActions: {
            clearAllSelections: import("@tinyslice/core").Action<unknown>;
            setSelection: import("@tinyslice/core").Action<number[]>;
            spawnShortcut: import("@tinyslice/core").Action<ProgramState>;
            deleteSelected: import("@tinyslice/core").Action<number>;
            move: import("@tinyslice/core").Action<{
                shortcutId: ShortcutId;
                position: CoordinateLike;
            }>;
            moveTo: import("@tinyslice/core").Action<{
                shortcutId: ShortcutId;
                position: CoordinateLike;
            }>;
        };
    }, {
        position$: Slice<ShortcutState, any, unknown>;
        selected$: Slice<ShortcutState, boolean, unknown>;
    }, number>;
    schemes$: Slice<DesktopState, Record<string, {
        data: DesktopColorScheme;
        key: string;
        displayName: string;
        builtIn: boolean;
    }>, unknown>;
    dicedSchemes: import("@tinyslice/core").DicedSlice<Record<string, {
        data: DesktopColorScheme;
        key: string;
        displayName: string;
        builtIn: boolean;
    }>, {
        data: DesktopColorScheme;
        key: string;
        displayName: string;
    }, unknown, unknown, string>;
    shortcuts$: Slice<DesktopState, Record<string, ShortcutState>, {
        shortcutsActions: {
            clearAllSelections: import("@tinyslice/core").Action<unknown>;
            setSelection: import("@tinyslice/core").Action<number[]>;
            spawnShortcut: import("@tinyslice/core").Action<ProgramState>;
            deleteSelected: import("@tinyslice/core").Action<number>;
            move: import("@tinyslice/core").Action<{
                shortcutId: ShortcutId;
                position: CoordinateLike;
            }>;
            moveTo: import("@tinyslice/core").Action<{
                shortcutId: ShortcutId;
                position: CoordinateLike;
            }>;
        };
    }>;
    programs$: Slice<DesktopState, Record<string, ProgramState>, unknown>;
    startMenuOpen$: Slice<DesktopState, boolean, unknown>;
    dicedPrograms: import("@tinyslice/core").DicedSlice<Record<string, ProgramState>, ProgramState, unknown, unknown, string>;
    windows$: Slice<DesktopState, Record<string, BaseWindowState>, {
        activeWindowCount$: Observable<number>;
    }>;
    dicedWindows: import("@tinyslice/core").DicedSlice<Record<string, BaseWindowState>, BaseWindowState, {
        activeWindowCount$: Observable<number>;
    }, {
        windowActions: {
            maximize: import("@tinyslice/core").Action<unknown>;
            restore: import("@tinyslice/core").Action<unknown>;
            move: import("@tinyslice/core").Action<CoordinateLike>;
            resize: import("@tinyslice/core").Action<Rectangle>;
        };
        programLogic: unknown;
        position$: Slice<BaseWindowState, any, unknown>;
        maximized$: Slice<BaseWindowState, NonNullable<import("../components/window-state.interface.js").WindowMaximizationState>, unknown>;
        minimized$: Slice<BaseWindowState, NonNullable<import("../components/window-state.interface.js").WindowMinimizationState>, unknown>;
        active$: Slice<BaseWindowState, boolean, unknown>;
    }, string>;
    isProgramSpawned$: (program: ProgramId) => Observable<boolean>;
    isShortcutPresent$: (program: ProgramId) => Observable<boolean>;
    isMinesweeperSpawned$: Observable<boolean>;
};
export type DesktopSlice = ReturnType<typeof createDesktopSlice>;
export type DicedWindows = DesktopSlice['dicedWindows'];
export type DicedWindow = ReturnType<DicedWindows['get']>;
//# sourceMappingURL=desktop.store.d.ts.map