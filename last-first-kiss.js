// last first elements

const first = (r) => typeof r === "string"? r.charAt(0) : r[0];
const last = (r) => typeof r === "string"? r.charAt(r.length-1) : r[r.length-1];

const kiss = (arr) => [last(arr), first(arr)];
