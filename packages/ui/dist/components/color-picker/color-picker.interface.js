export const toCssRgb = (color) => color ? `rgb(${color.r} ${color.g} ${color.b});` : 'transparent';
export const COMMON_COLORS = {
    white: { r: 255, g: 255, b: 255 },
    black: { r: 0, g: 0, b: 0 },
    lightGray: { r: 192, g: 192, b: 192 },
    darkGray: { r: 128, g: 128, b: 128 },
    red: { r: 255, g: 0, b: 0 },
    darkRed: { r: 128, g: 0, b: 0 },
    yellow: { r: 255, g: 255, b: 0 },
    darkYellow: { r: 128, g: 128, b: 0 },
    green: { r: 0, g: 255, b: 0 },
    darkGreen: { r: 0, g: 128, b: 0 },
    cyan: { r: 0, g: 255, b: 255 },
    darkCyan: { r: 0, g: 128, b: 128 },
    blue: { r: 0, g: 0, b: 255 },
    darkBlue: { r: 0, g: 0, b: 128 },
    purple: { r: 255, g: 0, b: 255 },
    darkPurple: { r: 128, g: 0, b: 128 },
};
