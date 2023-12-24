import type { CoordinateLike } from '@w2k/common';
import type { ComponentType } from 'svelte';
import type { ProcessId, ProgramId } from '../store/desktop.store.js';
export interface WindowComponents {
    menu?: ComponentType;
    /**
     * TODO: maybe rename this to body or windowContent
     */
    content: ComponentType;
}
export type WindowMinimizationState = boolean | 'start-minimizing' | 'minimizing' | 'start-unminimizing' | 'unminimizing';
export type WindowMaximizationState = boolean | 'start-maximizing' | 'maximizing' | 'start-restoring' | 'restoring';
export interface CommonProgramWindowPreferences {
    maximized: WindowMaximizationState;
    minimized: WindowMinimizationState;
    resizable: boolean;
    showMinimize: boolean;
    minimizeEnabled: boolean;
    showMaximize: boolean;
    maximizeEnabled: boolean;
    showClose: boolean;
    closeEnabled: boolean;
    showHelp: boolean;
    helpEnabled: boolean;
}
export interface BaseWindowState extends CommonProgramWindowPreferences {
    processId: ProcessId;
    program?: ProgramId;
    titleBarIcon: string | undefined;
    active: boolean;
    title: string;
    /**
     * Its initial value will act as the minimum height of the window as
     * resizable is using scollHeight as the minimum size
     */
    height: number;
    width: number;
    position: CoordinateLike;
    minWidth: number;
    minHeight: number;
    fitContent: boolean;
    invisible: boolean;
    zIndex: number;
}
export interface ProgramWindowState<ProgramData> extends BaseWindowState {
    programData: ProgramData;
}
export type WindowState = BaseWindowState;
export declare const defaultCommonProgramWindowPreferences: CommonProgramWindowPreferences;
export declare const initialWindowState: BaseWindowState;
//# sourceMappingURL=window-state.interface.d.ts.map