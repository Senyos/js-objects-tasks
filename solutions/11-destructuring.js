// BEGIN
const getSortedNames = (users) => {
    let names = []
    for (let user of users) {
        names.push(user['name'])
    }
    return names.sort()
}

export default getSortedNames
// END
