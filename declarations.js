// Variables

// Special characters string
const escapeStr = "\`\\\/\"\'";

// Array
const arr = [4, '2'];

// Objects
const obj = {
    str: 'string',
    num: 12,
    bool: true,
    undef: undefined
};

// nested object
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'nested obj',
        num: 15,
        bool: false
    },
};

// freezing objects: freezing an object makes the object immutable
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);

// console.log(escapeStr);
// console.log(arr);
// console.log(obj);
// console.log(nested);
