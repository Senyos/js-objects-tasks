import _ from 'lodash';

// BEGIN
const fill = (obj, keys, data) => {
    if (keys.length === 0) {
        for (let key of Object.keys(data)) {
            obj[key] = data[key]
        }
    }
    for (let key of keys) {
        //if (Object.hasOwn(obj,u key) === false) continue
        obj[key] = data[key]
    }
}

export default fill
// END
