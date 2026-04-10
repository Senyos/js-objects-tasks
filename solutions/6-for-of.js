// BEGIN
const pick = (data, keys) => {
    let newObj = {}
    for (let key of keys) {
        if (Object.hasOwn(data, key) === false) continue
        newObj[key] = data[key]
    }
    return newObj
}

export default pick
// END
