import type { Rectangle } from '../../../components/rectangle.interface';
export interface Vec2 {
    x: number;
    y: number;
}
export declare const isWithinRectangle: (rectangle: Rectangle, event: PointerEvent) => boolean;
export declare const addVec: (a: Vec2, b: Vec2) => Vec2;
export declare const subVec: (a: Vec2, b: Vec2) => Vec2;
export declare const vecComparator: (a: Vec2, b: Vec2) => number;
//# sourceMappingURL=vec2.interface.d.ts.map