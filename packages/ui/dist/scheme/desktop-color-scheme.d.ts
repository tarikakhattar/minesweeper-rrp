import type { SomeDefined } from '@alexaegis/common';
import { type ColorRgb } from '../components/color-picker';
export interface DesktopColorSchemeItem {
    color1?: ColorRgb | undefined;
    color2?: ColorRgb | undefined;
}
export interface DesktopColorScheme {
    /**
     * Used as background color
     */
    desktop: SomeDefined<DesktopColorSchemeItem, 'color1'>;
    objects3D: SomeDefined<DesktopColorSchemeItem, 'color1'>;
    activeTitleBar: SomeDefined<DesktopColorSchemeItem, 'color1' | 'color2'>;
}
export declare const cloneColorRgb: (scheme: ColorRgb) => ColorRgb;
export declare const cloneDesktopColorScheme: (scheme: DesktopColorScheme) => DesktopColorScheme;
export declare const w2kStandardColorScheme: DesktopColorScheme;
/**
 * TODO: Adjust,
 * put it in a record with other schemes
 */
export declare const w2kClassicColorScheme: DesktopColorScheme;
export declare const isColorRgbEqual: (color1: ColorRgb | undefined, color2: ColorRgb | undefined) => boolean;
export declare const areDesktopColorSchemesEqual: (a: DesktopColorScheme | undefined, b: DesktopColorScheme | undefined) => boolean;
export declare const desktopColorSchemeToCssVariables: (scheme: DesktopColorScheme) => Record<string, string>;
export declare const joinStyleMap: (styleMap: Record<string, string>) => string;
//# sourceMappingURL=desktop-color-scheme.d.ts.map