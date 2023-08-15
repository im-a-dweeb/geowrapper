# GeoWrapper

## What is GeoWrapper ❔
GeoWrapper is a wrapper that allows easy access to the [Rest-Countries API](https://restcountries.com/)

## Installation 📩
* Open the terminal in your project directory.
* then run --> `npm install @lufthor/geowrapper` in the terminal

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
* Once you've ran the command from [here](https://github.com/im-a-dweeb/geowrapper/blob/main/README.md#installation-)
* Create a new JS file.
* at the top write `const gw = require('@lufthor/geowrapper')` OR `const gw = require('geowrapper')`

## Documentation
The documentation can be found [HERE](https://github.com/im-a-dweeb/geowrapper/blob/main/docs.md#functions)
