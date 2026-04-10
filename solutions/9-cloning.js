// BEGIN
const cloneShallow = (obj) => {
    let newObj = {}
    for (let key of Object.keys(obj)) {
        newObj[key] = obj[key]
    }
    return newObj
}

export default cloneShallow
// END
