const debounce = (func, wait) => {
    let timer = null
    return function(...args){
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}

const opDebounce = (func, wait, { leading = false } = {}) => {
    let timer = null;
    let first = true;

    return function(...args) {
        let context = this
        if (first && leading) {
            func.apply(context, args);
            first = false
        }
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}