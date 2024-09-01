const sameAmount = (s, r1, r2) => {
    r1 = new RegExp(r1, 'g')
    r2 = new RegExp(r2, 'g')
    let s1 = s.match(r1);
    let s2 = s.match(r2);
    if (si !== null && s2 !== null && s1.length === s2.length) {
        return true
    }
    return false
}