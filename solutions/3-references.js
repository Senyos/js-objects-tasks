// BEGIN
const is = (obj1, obj2) => {
    for (let key of Object.keys(obj1)) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true
}

export default is
// END
