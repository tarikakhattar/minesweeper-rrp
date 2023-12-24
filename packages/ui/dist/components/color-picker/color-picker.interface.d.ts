export interface ColorRgb {
    r: number;
    g: number;
    b: number;
}
export interface ColorHsl {
    h: number;
    s: number;
    l: number;
}
export declare const toCssRgb: (color: ColorRgb | undefined) => string;
export declare const COMMON_COLORS: {
    readonly white: ColorRgb;
    readonly black: ColorRgb;
    readonly lightGray: ColorRgb;
    readonly darkGray: ColorRgb;
    readonly red: ColorRgb;
    readonly darkRed: ColorRgb;
    readonly yellow: ColorRgb;
    readonly darkYellow: ColorRgb;
    readonly green: ColorRgb;
    readonly darkGreen: ColorRgb;
    readonly cyan: ColorRgb;
    readonly darkCyan: ColorRgb;
    readonly blue: ColorRgb;
    readonly darkBlue: ColorRgb;
    readonly purple: ColorRgb;
    readonly darkPurple: ColorRgb;
};
//# sourceMappingURL=color-picker.interface.d.ts.map