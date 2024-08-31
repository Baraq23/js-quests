const vowelDots = (s) => {
    let vowels = /(a|e|i|o|u)/;
    let n = s.replace(/(a|e|i|o|u)/g, "$&.")
    return n
}

// let text = "The cat is on the mat. It took a lot of time. Why try?";
// console.log(vowelDots(text))