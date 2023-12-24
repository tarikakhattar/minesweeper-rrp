export const readGlobal = (key) => {
    return globalThis[key];
};
export const writeGlobal = (key, value) => {
    globalThis[key] = value;
};
