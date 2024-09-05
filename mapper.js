const map = (arr, action) => arr.map((item, i) => action(item, i, arr));

const flatMap = (arr, action) => 
  arr.reduce((acc, val, i) => acc.concat(action(val, i, arr)), []);
