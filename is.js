    
is.num = (n) => typeof n === "number";
is.nan = (n) => Number.isNaN(n);
is.str = (n) => typeof n === "string";
is.bool = (n) => typeof n === "boolean";
is.undef = (n) => typeof n === "undefined";
is.def = (n) => !is.undef(n);
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";
is.truthy = (n) => Boolean(n);
is.falsy = (n) => !is.truthy(n)
