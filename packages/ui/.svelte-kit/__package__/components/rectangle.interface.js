export const areRectanglesOverlapping = (a, b) => {
    const axl = a.x;
    const axh = a.x + a.width;
    const bxl = b.x;
    const bxh = b.x + b.width;
    const ayl = a.y;
    const ayh = a.y + a.height;
    const byl = b.y;
    const byh = b.y + b.height;
    const noHorizontalOverlap = axh < bxl || axl > bxh;
    const noVerticalOverlap = ayh < byl || ayl > byh;
    return !noHorizontalOverlap && !noVerticalOverlap;
};
export const substractRectangles = (a, b) => {
    return {
        x: b.x - a.x,
        y: b.y - a.y,
        height: b.height - a.height,
        width: b.width - a.width,
    };
};
