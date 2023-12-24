import { Slice } from '@tinyslice/core';
import type { BaseWindowState, WindowState } from '@w2k/ui';
export declare const DISPLAY_PROPERTIES_TAG = "[display-properties]";
export type DisplayPropertiesApp = ReturnType<typeof createDesktopProperties>;
export declare const createDesktopProperties: (parentSlice: Slice<Record<string, WindowState>, BaseWindowState>, key: string) => {
    minesweeperActions: {
        cheating: import("@tinyslice/core").Action<boolean>;
    };
    game$: Slice<any, {
        cheating: boolean;
    }, number>;
    cheating$: Slice<{
        cheating: boolean;
    }, boolean, unknown>;
    programSlice: Slice<any, {
        cheating: boolean;
    }, number>;
};
//# sourceMappingURL=display-properties.store.d.ts.map