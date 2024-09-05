const citiesOnly = (arr) => {
    const map = arr.map((x) => x.city)
    return map
}


const upperCasingStates = (arr) => {
    const map = arr.map((x) => {
        let item = x.split(' ')
        let nArr = []
        for (let i = 0; i < item.length; i++) {
            let ns = ''
        ns = item[i].charAt(0).toUpperCase() + item[i].slice(1)
        nArr.push(ns)
        }
        let nItem = nArr.join(' ')
        return nItem
        
    })
    return map
}

const fToC = (n) => {
    let t = Number(n.slice(0,-2))
    let temp = Math.floor((t-32)/1.8)
    return temp
}

const fahrenheitToCelsius = (arr) => {
    const map = arr.map((x) => {
        let num = Number(x.slice(0,-2))
        let newStr = String(Math.floor((num-32)/1.8)) + '°C'
       return newStr

    })
    return map
}

const trimTemp = (obj) => {
    let map = obj.map((x) => {
        x.temperature = x.temperature.split(' ').join('')        
        return x
    })
    return map
}




const toCap = (s) => {
    let sl = s.split(' ')
    let ns = []
    for (let i = 0; i < sl.length; i++) {
        let str = sl[i].charAt(0).toUpperCase() + sl[i].slice(1)
        ns.push(str)
    }
    return ns.join(' ')
}

const tempForecasts = (obj) => {
    const map = obj.map((x) => {
        let tmp = x.temperature.split(' ').join('')
        let temp = fToC(tmp)
        let st = toCap(x.state)
        let str = temp +'°Celsius in '+ x.city + ', ' + st
        return str

    })
    return map
}


// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//     {
//     city: 'Kisumu',
//     temperature: ' 161 °F',
//     state: 'Kenya',
//     region: 'Nyanza',
//     }
//   ]))
// console.log(fToC('101ff'))




  


