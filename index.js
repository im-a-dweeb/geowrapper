const https = require('https')



function expandArraysAndObjects(data) {
    if (Array.isArray(data)) {
        return data.map(item => expandArraysAndObjects(item));
    } else if (typeof data === 'object' && data !== null) {
        const expandedData = {};
        for (const key in data) {
            expandedData[key] = expandArraysAndObjects(data[key]);
        }
        return expandedData;
    } else {
        return data;
    }
}

/**
 * 
 * @param {string} region Region to search data for
 * @example gw.returnRegionInfo("europe")
    .then((data) => {
        console.log(JSON.stringify(data, null, 4));
    })
    .catch(err => {
        console.log(err)
    }) 
 *  {JSON}
 */
async function returnRegionInfo(region) {
    let url = `https://restcountries.com/v3.1/region/${region}`
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data)
                    resolve(expandArraysAndObjects(jsonData))
                } catch (error) {
                    throw new Error(error)
                }
            })
        })


    })
}


/**
 * 
 * @param {string} subregion the Sub Region to look up
 * @example gw.returnSubRegionInfo("Eastern Asia")
    .then((stuff) => {
        console.log(JSON.stringify(stuff, null, 4))
    })
    .catch(err => {
        console.log(err);
    })
 *  {JSON}
 */
async function returnSubRegionInfo(subregion) {
    let url = `https://restcountries.com/v3.1/subregion/${subregion}`
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''

            res.on('data', (chunk) => {
                data += chunk;
            })
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data)
                    resolve(jsonData)
                } catch (error) {
                    console.log(error)
                }
            })
        })
    })
}
/**
 * 
 * @param {string} translation translation to search by, strange becuase if I put in "america" or any other country it works ??
 * @example gw.searchByTranslation("america")
    .then(x => {
        console.log(JSON.stringify(x, null, 4));
    })
    .catch(err => {
        console.log(err);
    })
 *  {JSON}
 */
async function searchByTranslation(translation) {
    let url = `https://restcountries.com/v3.1/translation/${translation}`

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (chunks) => {
                data += chunks;
            })
    
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data)
                    resolve(jsonData);
                } catch (error) {
                    console.log(error)
                }
            })
        })
    })
}

/**
 * 
 * @param {string} currency currency to search
 *  {JSON}
gw.searchByCurrency("euro")
    .then(x => {
        console.log(JSON.stringify(x));
    })
    .catch(err => {
        throw new Error(err)
    })
 * s 
 */
async function searchByCurrency(currency) {
    let url = `https://restcountries.com/v3.1/currency/${currency}`

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (chunks) => {
                data += chunks;
            })

            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (error) {
                    console.log(error);
                    
                }
            })
        })
    })
}

/**
 * 
 * @param {string} capital Capital city to search
 * @example gw.searchByCapital("Bern")
    .then(x => {
        console.log(JSON.stringify(x));
    })
    .catch(err => {
        throw new Error(err)
    })
 *  {JSON} 
 */
async function searchByCapital(capital) {
    let url = `https://restcountries.com/v3.1/capital/${capital}`

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (chunks) => {
                data += chunks;
            })

            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (error) {
                    console.log(error);
                }
            })
        })
    });
}

/**
 * @example gw.returnAll()
    .then((whatamidoingwithmylife) => {
        console.log(JSON.stringify(whatamidoingwithmylife, null, 4))
    })
 *  {JSON}
 */
async function returnAll() {
    let url = 'https://restcountries.com/v3.1/all'

    return new Promise((res, rej) => {
        https.get(url, (resp) => {
            let data = ''
            resp.on('data', (chunks) => {
                data += chunks;
            })
            resp.on('end', () => {
                try {
                    const jsonData = JSON.parse(data)
                    res(jsonData);
                } catch (error) {
                    console.log(error)
                }
            })
        })
    })
}
module.exports = {
    returnRegionInfo,
    returnSubRegionInfo,
    searchByTranslation,
    searchByCurrency,
    searchByCapital,
    returnAll
}