// BEGIN
const get = (data, keys) => {
    let obj = data
    for (let key of keys) {
        if (typeof obj === 'object') {
            if (Object.hasOwn(obj, key) === true) {
                obj = obj[key]
            } else {
                return null
            }
        } else {
            return null
        }
    }
    return obj
}

export default get
// END
