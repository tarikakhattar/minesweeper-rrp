import type { Rectangle } from '../components/rectangle.interface';
export declare const cloneRectangle: (element: Element, round?: boolean) => Rectangle;
/**
 * This method temporarily applies a style to an element, then returns
 * the client bounding rectangles before and after the temporary change.
 * The style properties are changed back to what they were before originally.
 */
export declare const checkStyleResult: (element: HTMLElement, temporaryChanges: {
    width: number;
    height: number;
    x: number;
    y: number;
}) => {
    before: Rectangle;
    after: Rectangle;
};
export declare const checkIfCouldBeSmaller: (element: HTMLElement) => {
    widthCanBeSmaller: boolean;
    heightCanBeSmaller: boolean;
};
//# sourceMappingURL=movable-window.d.ts.map