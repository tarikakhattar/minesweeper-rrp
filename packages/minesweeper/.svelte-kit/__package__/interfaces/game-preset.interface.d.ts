export interface GamePreset {
    width: number;
    height: number;
    mineCount: number;
}
export interface WinData {
    time: number;
    preset: GamePreset;
    cheated: boolean;
}
export declare enum PresetKeys {
    BEGINNER = "beginner",
    INTERMEDIATE = "intermediate",
    EXPERT = "expert"
}
export declare function isTheSamePreset(a: GamePreset | undefined, b: GamePreset | undefined): boolean;
//# sourceMappingURL=game-preset.interface.d.ts.map