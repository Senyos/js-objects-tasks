import _ from 'lodash';

// BEGIN
const countWords = (text) => {
    let newText = text.toLowerCase()
    let newObj = {}

    newText = newText.split(' ')

    for (let key of newText) {
        if (key.length === 0) continue
        if (newObj[key] === undefined) {
            newObj[key] = 1
            continue
        }
        newObj[key] += 1
    }
    return newObj
}

export default countWords
// END
