
const isValid = (a) => {
    if (isNaN(a)) {
        return false
    }

    if ((typeof a === 'number')) {
        a = new Date(a)
        return true
    }
    return a instanceof Date && !isNaN(a);
}

const isAfter = (a,b) => {
    var tA = new Date(a).getTime()
    var tB = new Date(b).getTime()
    return tA > tB
}

const isBefore = (a,b) => {
    var tA = new Date(a).getTime()
    var tB = new Date(b).getTime()
    return tA < tB
}

const isFuture = (a) => {
    if (isValid(a)) {
        var tA = new Date(a).getTime()
        var today = new Date().getTime()
        return today < tA
    }
    return false
}

const isPast = (a) => {
    if (isValid(a)) {
        var tA = new Date(a).getTime()
        var today = new Date().getTime()
        return today > tA
    }
    return false
}

// var d =  '2013-01-01'
// console.log(isValid(d))
// console.log(isValid(NaN))
// console.log(d.getTime())
// console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')))



// console.log(isValid("0010 1 07"))
// console.log(isFuture("2025 01 01"))
// console.log(isValid("tuesday"))

// console.log(isValid("0001-02-03"))
// console.log(new Date('today'))
// console.log(isBefore("0001-01-09" , "0001-01-02"))

