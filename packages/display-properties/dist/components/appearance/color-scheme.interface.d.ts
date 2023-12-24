import { type DesktopColorScheme } from '@w2k/ui';
export interface DesktopSchemeItem {
    displayName: string;
    name: string;
    colorCount: 0 | 1 | 2;
}
export declare const desktopColorSchemeItems: Record<keyof DesktopColorScheme, DesktopSchemeItem>;
export declare const desktopColorSchemeSelectOptions: {
    [k: string]: string;
};
export declare const defaultDesktopColorScheme: DesktopColorScheme;
//# sourceMappingURL=color-scheme.interface.d.ts.map