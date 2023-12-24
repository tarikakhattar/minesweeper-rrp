export interface W2kGlobal {
    w2kZoom: number;
}
export declare const readGlobal: <K extends "w2kZoom">(key: K) => W2kGlobal[K];
export declare const writeGlobal: <K extends "w2kZoom">(key: K, value: W2kGlobal[K]) => void;
//# sourceMappingURL=w2k-globals.d.ts.map