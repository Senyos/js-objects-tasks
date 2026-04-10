import _ from 'lodash';

// BEGIN
const normalize = (obj) => {
    let word = obj['name'].toLowerCase()
    obj['name'] = word.charAt(0).toUpperCase() + word.slice(1)
    obj['description'] = obj['description'].toLowerCase()
}

export default normalize
// END
