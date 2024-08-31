const sameAmount = (s, r1, r2) => {
    let s1 = s.match(r1);
    let s2 = s.match(r2);
    if (s1.length === s2.length) {
        return true
    }
    return false
}