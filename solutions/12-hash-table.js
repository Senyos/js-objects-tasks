import crc32 from 'crc-32';

// BEGIN
const make = () => {
    return []
}

const set = (map, key, value) => {

    let CRC32 = require('crc-32')
    let newKey = CRC32.str(key);
    for (let pair of map) {
        if (CRC32.str(pair[0]) === newKey && pair[0] !== key) return false
        if (pair[0] === key) {
            pair[1] = value
            return true
        }
    }
    map.push([key, value])
    return true
}

const get = (map, key, defaultValue = null) => {
    for (let pair of map) {
        if (pair[0] === key) return pair[1]
        return defaultValue
    }
    return defaultValue
}

export { make, set, get }
// END
