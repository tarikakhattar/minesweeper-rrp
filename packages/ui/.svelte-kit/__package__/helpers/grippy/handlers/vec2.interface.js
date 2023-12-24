export const isWithinRectangle = (rectangle, event) => {
    return (rectangle.x <= event.clientX &&
        rectangle.x + rectangle.width >= event.clientX &&
        rectangle.y <= event.clientY &&
        rectangle.y + rectangle.height >= event.clientY);
};
export const addVec = (a, b) => {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    };
};
export const subVec = (a, b) => {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
    };
};
export const vecComparator = (a, b) => {
    return a.y === b.y ? a.x - b.x : a.y - b.y;
};
