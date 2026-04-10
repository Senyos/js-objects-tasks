// BEGIN
const getDomainInfo = (domain) => {
    let name = domain
    let scheme = 'http'

    if (name.startsWith('https')) {
        scheme = 'https'
    }

    name = name.replace(scheme + '://', '')
    
    return {
        'scheme': scheme,
        'name': name,
    }
}

export default getDomainInfo
// END
