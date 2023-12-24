export var TileMark;
(function (TileMark) {
    TileMark["EMTPY"] = "_";
    TileMark["FLAG"] = "!";
    TileMark["QUESTION"] = "?";
})(TileMark || (TileMark = {}));
export const isEmptyTileMark = (mark) => mark === TileMark.EMTPY;
export const isFlagTileMark = (mark) => mark === TileMark.FLAG;
export const isQuestionTileMark = (mark) => mark === TileMark.QUESTION;
export const getNextTileMark = (mark) => {
    if (mark && isEmptyTileMark(mark)) {
        return TileMark.FLAG;
    }
    else if (mark && isFlagTileMark(mark)) {
        return TileMark.QUESTION;
    }
    else {
        return TileMark.EMTPY;
    }
};
