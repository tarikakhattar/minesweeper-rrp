export const nudgeAreaIntoArea = (areaToNudge, fitWithin) => {
    return {
        x: Math.max(Math.min(areaToNudge.x, fitWithin.x + fitWithin.width - areaToNudge.width), fitWithin.x),
        y: Math.max(Math.min(areaToNudge.y, fitWithin.y + fitWithin.height - areaToNudge.height), fitWithin.y),
    };
};
