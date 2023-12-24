import type { CoordinateLike } from '@w2k/common';
export interface Rectangle extends CoordinateLike {
    height: number;
    width: number;
}
export declare const areRectanglesOverlapping: (a: Rectangle, b: Rectangle) => boolean;
export declare const substractRectangles: (a: Rectangle, b: Rectangle) => Rectangle;
//# sourceMappingURL=rectangle.interface.d.ts.map