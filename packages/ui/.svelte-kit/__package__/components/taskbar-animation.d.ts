import type { BaseWindowState } from './window-state.interface';
export interface TaskBarAnimationFrame {
    x: number;
    y: number;
    width: number;
}
export declare const formatAnimationVariables: (from: TaskBarAnimationFrame, to: TaskBarAnimationFrame) => string;
export declare const getMinimizeAnimation: (process: BaseWindowState, stage: 'minimizing' | 'unminimizing') => string | undefined;
//# sourceMappingURL=taskbar-animation.d.ts.map