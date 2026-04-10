// BEGIN
const make = (name, obj) => {
    let newObj = {'state': 'moderating', 'createdAt': Date.now()}
    newObj['name'] = name
    if (typeof obj === 'object') {
        for (let key of Object.keys(obj)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

export default make
// END
