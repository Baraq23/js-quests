const repeat = (s,n) => {
    let count = 0;
    let ns = ""
    while (count < n) {
        ns += s
        count++
    }
    return ns
}
