"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common = require("@alexaegis/common");
const deferPromise = (fn) => new Promise((resolve) => {
  setTimeout(() => {
    const result = fn();
    resolve(result);
  }, 0);
});
const defer = (fn) => {
  return () => {
    setTimeout(fn, 0);
  };
};
const makeMatrix = (x, y = 0, initial) => {
  const matrix = [];
  for (let i = 0; i < x; i++) {
    const row = Array.from({ length: y });
    if (initial) {
      for (let j = 0; j < y; j++) {
        row[j] = initial(i, j);
      }
    }
    matrix.push(row);
  }
  return matrix;
};
class Coordinate {
  x;
  y;
  constructor(x, y) {
    if (typeof x === "number") {
      this.x = x;
      this.y = y;
    } else {
      this.x = x.x;
      this.y = x.y;
    }
  }
  static keyOf(x, y) {
    return typeof x === "number" ? `${x},${y ?? 0}` : `${x.x},${x.y}`;
  }
  static random(xMin, xMax, yMin, yMax) {
    return new Coordinate(common.random(xMin, xMax), common.random(yMin, yMax));
  }
  static directions = {
    NORTH: new Coordinate(0, 1),
    NORTHEAST: new Coordinate(1, 1),
    EAST: new Coordinate(1, 0),
    SOUTHEAST: new Coordinate(1, -1),
    SOUTH: new Coordinate(0, -1),
    SOUTHWEST: new Coordinate(-1, -1),
    WEST: new Coordinate(-1, 0),
    NORTHWEST: new Coordinate(-1, 1)
  };
  toString() {
    return `${this.x},${this.y}`;
  }
  static toString(x, y) {
    return `${x},${y}`;
  }
  equal(x, y) {
    return typeof x === "number" ? this.x === x && this.y === y : this.x === x.x && this.y === x.y;
  }
  static equal(a, b) {
    return a.x === b.x && a.y === b.y;
  }
  static isNeighbouring(a, b) {
    return Math.abs(a.x - b.x) <= 1 && Math.abs(a.y - b.y) <= 1;
  }
}
exports.Coordinate = Coordinate;
exports.defer = defer;
exports.deferPromise = deferPromise;
exports.makeMatrix = makeMatrix;
