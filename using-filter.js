
const filterShortStateName = (arr) => {
    const res = arr.filter((x) => x.length < 7)
    return res
}

const filterStartVowel = (arr) => {
    const reg = /^(a|e|i|o|u)/i;
    const res = arr.filter((x) => x.match(reg))
    return res
}

const filter5Vowels = (arr) => {
    const reg = /(?:[aeiou].*?){5,}/i
    const res = arr.filter((x) => x.match(reg))
    return res
}

const filter1DistinctVowel = (arr) => {
    return arr.filter(str => {
        const vowels = str.match(/[aeiou]/i);

        if (!vowels) return false;
        const distinctVowels = new Set(vowels.map(v => v.toLowerCase()))
        return distinctVowels.size === 1
    })
}
//  reg: /^[^aeiou]*([aeiou])[^aeiou]*\1*[^aeiou]*$/i;

// 1. Start with zero or more non-vowel characters.
// 2. Contain exactly one vowel (which is captured).
// 3. May have zero or more non-vowel characters following that vowel.
// 4. May have zero or more occurrences of the same vowel that was captured.
// 5. End with zero or more non-vowel characters.

const multiFilter = (obj) => {
    let cap = (x) => x.length > 7
    let name = (x) => {
        const reg = /^[^aeiou]/i;
        return x.match(reg)
    }
    let tag = (x) => {
        const reg = /[aeiou]/i;
        return x.match(reg)
    }
    let region = (x) => {
        const reg = /[^(South)]/i;
        return x.match(reg)
    }

    const res = obj.filter((x) => {
        if (cap(x.capital) && name(x.name) && tag(x.tag) && region(x.region)) {
            return x
        }
    })
    return res
}


// console.log(filterShortStateName(['ewatytfhj', 'rty', 'ricky', 'saskatuan']))
// console.log(filter1DistinctVowel(['allay', 'gasket', 'tables', 'our life']))
// console.log(filterStartVowel(['alloy', 'gasket', 'tables', 'our life']))
// console.log(filter5Vowels(['alloy', 'gasket', 'tables turn into tops', 'our life in']))

// const objj = [
//     {
//         capital: 'eight character',
//         name: 'tom',
//         tag: 'Dan',
//         region: 'west',
//     },
//     {
//         capital: 'eight character',
//         name: 'tom',
//         tag: 'Dan',
//         region: 'south',
//     }
// ]

// console.log(filter1DistinctVowel([
//     'Alabama',
//     'Alaska',
//     'Arkansas',
//     'Kansas',
//     'Maryland',
//     'Mississippi',
//     'New Jersey',
//     'Tennessee',
//   ]))