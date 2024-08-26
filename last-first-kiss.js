// last first elements

const first = (r) => r[0];
const last = (r) => r[r.length-1];
const kiss = (arr) => [first(arr), last(arr)];
