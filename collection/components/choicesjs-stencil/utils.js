export function filterObject(obj, fn) {
    return Object.keys(obj).reduce((accum, next) => {
        const value = obj[next];
        if (fn(value, next, obj)) {
            accum[next] = value;
        }
        return accum;
    }, {});
}
export function isDefined(value) {
    return typeof value !== 'undefined';
}
