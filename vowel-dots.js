const vowelDots = (s) => {
    let n = s.replace(/(a|e|i|o|u)/gi, "$&.")
    return n
}
let vowels = /(a|e|i|o|u)/;


// let text = "The cat is on the mat. It took a lot of time. Why try?";
// console.log(vowelDots(text))