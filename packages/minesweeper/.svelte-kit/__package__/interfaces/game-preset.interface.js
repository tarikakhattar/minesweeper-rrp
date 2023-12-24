export var PresetKeys;
(function (PresetKeys) {
    PresetKeys["BEGINNER"] = "beginner";
    PresetKeys["INTERMEDIATE"] = "intermediate";
    PresetKeys["EXPERT"] = "expert";
})(PresetKeys || (PresetKeys = {}));
export function isTheSamePreset(a, b) {
    return (!!a && !!b && a.height === b.height && a.width === b.width && a.mineCount === b.mineCount);
}
