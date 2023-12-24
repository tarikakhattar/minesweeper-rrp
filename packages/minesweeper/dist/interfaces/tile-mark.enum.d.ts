export declare enum TileMark {
    EMTPY = "_",
    FLAG = "!",
    QUESTION = "?"
}
export declare const isEmptyTileMark: (mark?: TileMark) => mark is TileMark.EMTPY;
export declare const isFlagTileMark: (mark?: TileMark) => mark is TileMark.FLAG;
export declare const isQuestionTileMark: (mark?: TileMark) => mark is TileMark.QUESTION;
export declare const getNextTileMark: (mark?: TileMark) => TileMark;
//# sourceMappingURL=tile-mark.enum.d.ts.map