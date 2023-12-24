import { colord } from 'colord';
import { toCssRgb } from '../components/color-picker';
export const cloneColorRgb = (scheme) => {
    return {
        ...scheme,
    };
};
export const cloneDesktopColorScheme = (scheme) => {
    return {
        activeTitleBar: {
            color1: cloneColorRgb(scheme.activeTitleBar.color1),
            color2: cloneColorRgb(scheme.activeTitleBar.color2),
        },
        desktop: {
            color1: cloneColorRgb(scheme.desktop.color1),
        },
        objects3D: {
            color1: cloneColorRgb(scheme.objects3D.color1),
        },
    };
};
export const w2kStandardColorScheme = {
    desktop: { color1: { r: 58, g: 110, b: 165 } },
    objects3D: { color1: { r: 212, g: 208, b: 200 } },
    activeTitleBar: {
        color1: { r: 10, g: 36, b: 106 },
        color2: { r: 166, g: 202, b: 240 },
    },
};
/**
 * TODO: Adjust,
 * put it in a record with other schemes
 */
export const w2kClassicColorScheme = {
    desktop: { color1: { r: 58, g: 110, b: 165 } },
    objects3D: { color1: { r: 212, g: 208, b: 200 } },
    activeTitleBar: {
        color1: { r: 10, g: 36, b: 106 },
        color2: { r: 166, g: 202, b: 240 },
    },
};
export const isColorRgbEqual = (color1, color2) => {
    if (color1 === undefined || color2 === undefined) {
        return false;
    }
    return (color1 === color2 ||
        (color1.r === color2.r && color1.g === color2.g && color1.b === color2.b));
};
export const areDesktopColorSchemesEqual = (a, b) => {
    if (a === undefined || b === undefined) {
        return false;
    }
    return (a === b ||
        (isColorRgbEqual(a.activeTitleBar.color1, b.activeTitleBar.color1) &&
            isColorRgbEqual(a.activeTitleBar.color2, b.activeTitleBar.color2) &&
            isColorRgbEqual(a.desktop.color1, b.desktop.color1) &&
            isColorRgbEqual(a.objects3D.color1, b.objects3D.color1)));
};
export const desktopColorSchemeToCssVariables = (scheme) => {
    const objectColor = colord(scheme.objects3D.color1).toHsl();
    return {
        '--win-3d-objects-color-h': `${objectColor.h}`,
        '--win-3d-objects-color-s': `${objectColor.s}%`,
        '--win-3d-objects-color-l': `${objectColor.l}%`,
        '--win-desktop-color': `${toCssRgb(scheme.desktop.color1)}`,
        '--win-active-title-bar-color': `${toCssRgb(scheme.activeTitleBar.color1)}`,
        '--win-active-title-bar-color-2': `${toCssRgb(scheme.activeTitleBar.color2)}`,
    };
};
export const joinStyleMap = (styleMap) => {
    return Object.entries(styleMap)
        .map(([style, value]) => `${style}: ${value}; `)
        .join('');
};
