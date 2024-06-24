export const initializeState = (keys) => {
    const obj = {};
    keys.forEach(key => {
    obj[key] = '';
    });
    return obj;
};
