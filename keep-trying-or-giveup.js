const retry = (count = 3, callback = async () => {}) => {
    return async function(...args) {
        try {
            const res = await callback(...args);
            return res
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    }
}

const timeout = (delay = 0, callback = async () => {}) => {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), delay)
        );

        const functionPromise = Promise.resolve(callback(...args));
        try {
            const result = await Promise.race([timeoutPromise, functionPromise]);
            return result;
        } catch (error) {
            if (error.message === 'timeout') {
                throw error;
            } else {
                throw error;
            }
        }
    };
};