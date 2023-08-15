# GeoWrapper

## What is GeoWrapper ❔
GeoWrapper is a wrapper that allows easy access to the [Rest-Countries API](https://restcountries.com/)

## Installation 📩
* Open the terminal in your project directory.
`npm install @lufthor/geowrapper`

## Internals (Nerdy Stuff)
* This package uses the `https` module found in `Node.JS` and uses modules
* Here is sample code of one of the functions
```js
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
```

## Contributing
I'm open to contributions so go ahead, I don't mind as long as the code is clean and is tested before-hand.

## Starting
Once you've ran the command from [here]()
