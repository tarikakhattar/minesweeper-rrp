export var GameState;
(function (GameState) {
    GameState["READY_TO_START"] = "ready";
    GameState["ONGOING"] = "ongoing";
    GameState["WON"] = "won";
    GameState["LOST"] = "lost";
})(GameState || (GameState = {}));
export const isGameReadyToStart = (mark) => mark === GameState.READY_TO_START;
export const isGameOngoing = (mark) => mark === GameState.ONGOING;
export const isGameWon = (mark) => mark === GameState.WON;
export const isGameLost = (mark) => mark === GameState.LOST;
