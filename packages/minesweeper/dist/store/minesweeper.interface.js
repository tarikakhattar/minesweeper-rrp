export var FieldState;
(function (FieldState) {
    FieldState[FieldState["SAFE"] = 0] = "SAFE";
    FieldState[FieldState["MINE"] = 1] = "MINE";
})(FieldState || (FieldState = {}));
export var SmileyState;
(function (SmileyState) {
    /**
     * Normally
     */
    SmileyState["SMILING"] = "ongoing";
    /**
     * While mousedown
     */
    SmileyState["SURPRISED"] = "click";
    /**
     * If won
     */
    SmileyState["COOL"] = "won";
    /**
     * If lost...
     */
    SmileyState["DEAD"] = "lost";
})(SmileyState || (SmileyState = {}));
