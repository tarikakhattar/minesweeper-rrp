import { Slice } from '@tinyslice/core';
import { Observable } from 'rxjs';
import type { BaseWindowState, WindowState } from '@w2k/ui';
import { type GamePreset, type WinData } from '../interfaces/index.js';
import { SmileyState, type Game, type GameInstance, type HighscoreEntry, type TileState } from './minesweeper.interface.js';
export declare const MS_TAG = "[minesweeper]";
export declare const CLASSIC_GAME_PRESETS: {
    beginner: {
        width: number;
        height: number;
        mineCount: number;
    };
    intermediate: {
        width: number;
        height: number;
        mineCount: number;
    };
    expert: {
        width: number;
        height: number;
        mineCount: number;
    };
};
export declare const createMineSweeperGame: (parentSlice: Slice<Record<string, WindowState>, BaseWindowState>, key: string) => {
    dicedTiles: import("@tinyslice/core").DicedSlice<Record<CoordinateKey, TileState>, TileState, unknown, unknown, `${number},${number}`>;
    tilesSlice$: Slice<GameInstance, Record<CoordinateKey, TileState>, unknown>;
    minesweeperActions: {
        cheating: import("@tinyslice/core").Action<boolean>;
        resetGame: import("@tinyslice/core").Action<GamePreset | undefined>;
        startGame: import("@tinyslice/core").Action<{
            safeCoordinate: CoordinateLike;
            mineCount: number;
            cheating: boolean;
        }>;
        setPreset: import("@tinyslice/core").Action<{
            name: string;
            preset: GamePreset;
        }>;
        addGameToHistory: import("@tinyslice/core").Action<WinData>;
        incrementTimer: import("@tinyslice/core").Action<number>;
        tileActions: {
            revealTile: import("@tinyslice/core").Action<CoordinateLike>;
            depressTile: import("@tinyslice/core").Action<CoordinateLike>;
            markTile: import("@tinyslice/core").Action<CoordinateLike>;
        };
        clickActions: {
            cancelFire: import("@tinyslice/core").Action<CoordinateLike>;
            globalCancel: import("@tinyslice/core").Action<undefined>;
            startFire: import("@tinyslice/core").Action<CoordinateLike>;
            fire: import("@tinyslice/core").Action<CoordinateLike>;
            alternativeFire: import("@tinyslice/core").Action<CoordinateLike>;
        };
    };
    game$: Slice<any, Game, number>;
    cheating$: Slice<Game, boolean, unknown>;
    preferences$: Slice<Game, import("./minesweeper.interface.js").GamePreferences, unknown>;
    unlockedResize$: Slice<import("./minesweeper.interface.js").GamePreferences, boolean, unknown>;
    unlockedScheme$: Slice<import("./minesweeper.interface.js").GamePreferences, boolean, unknown>;
    smileyState$: Observable<SmileyState>;
    remainingMines$: Observable<number>;
    highscoreEntries$: Observable<HighscoreEntry[]>;
    winHistory$: Slice<Game, WinData[], unknown>;
    presets$: Slice<Game, Record<string, GamePreset>, unknown>;
    isGameSettingsAPreset$: (preset: GamePreset) => Observable<boolean>;
    gameWidthArray$: Observable<number[]>;
    isGameSettingsNotAPreset$: Observable<boolean>;
    gameHeightArray$: Observable<number[]>;
    gameSettings$: Slice<GameInstance, GamePreset, unknown>;
    elapsedSeconds$: Observable<number>;
    programSlice: Slice<any, Game, number>;
};
//# sourceMappingURL=minesweeper.store.d.ts.map