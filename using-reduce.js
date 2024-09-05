const adder = (arr, value) =>
    arr.reduce((acc, item) => acc + item, value === undefined ? 0 : value);


const sumOrMul = (arr, value) =>
    arr.reduce(
        (acc, item) => item % 2 === 0 ? acc * item : acc + item,
        value === undefined ? 0 : value
    );

const funcExec = (arr, value) =>
    arr.reduce(
        (acc, item) => typeof item === "function" ? item(acc, value) : acc,
        value === undefined ? 0 : value
    );

// console.log(sumOrMul([1, 2, 3, 5, 8], 5))