export declare const enum GameState {
    READY_TO_START = "ready",
    ONGOING = "ongoing",
    WON = "won",
    LOST = "lost"
}
export declare const isGameReadyToStart: (mark: GameState) => mark is GameState.READY_TO_START;
export declare const isGameOngoing: (mark: GameState) => mark is GameState.ONGOING;
export declare const isGameWon: (mark: GameState) => mark is GameState.WON;
export declare const isGameLost: (mark: GameState) => mark is GameState.LOST;
//# sourceMappingURL=game-state.enum.d.ts.map