const ionOut = (s) => {
    let reg = /[a-z]*t(ion)/gi
    let n = s.match(reg)
    let m = []
    if (n) {
        m = n.map(item => item.replace('ion', ''))
    }
    return m
}

// const input = "The transition of the nation into a new constitution was a significant notion.";
// console.log(ionOut(input))