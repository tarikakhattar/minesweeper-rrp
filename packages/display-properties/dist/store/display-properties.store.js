import { Slice } from '@tinyslice/core';
export const DISPLAY_PROPERTIES_TAG = '[display-properties]';
export const createDesktopProperties = (parentSlice, key) => {
    const game$ = parentSlice.addSlice(key, {
        cheating: false,
    }, {
        defineInternals: () => {
            return 1;
        },
    });
    const cheating$ = game$.slice('cheating');
    const minesweeperActions = {
        cheating: cheating$.setAction,
    };
    return {
        minesweeperActions,
        game$,
        cheating$,
        programSlice: game$,
    };
};
