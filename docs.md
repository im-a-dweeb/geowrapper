## Functions

<dl>
<dt><a href="#returnRegionInfo">returnRegionInfo(region)</a></dt>
<dd></dd>
<dt><a href="#returnSubRegionInfo">returnSubRegionInfo(subregion)</a></dt>  
<dd></dd>
<dt><a href="#searchByTranslation">searchByTranslation(translation)</a></dt>
<dd></dd>
<dt><a href="#searchByCurrency">searchByCurrency(currency)</a></dt>
<dd></dd>
<dt><a href="#searchByCapital">searchByCapital(capital)</a></dt>
<dd></dd>
<dt><a href="#returnAll">returnAll()</a></dt>
<dd></dd>
</dl>

<a name="returnRegionInfo"></a>

## returnRegionInfo(region)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| region | <code>string</code> | Region to search data for |

**Example**
```js
gw.returnRegionInfo("europe")
    .then((data) => {
        console.log(JSON.stringify(data, null, 4));
    })
    .catch(err => {
        console.log(err)
 {JSON}
```
<a name="returnSubRegionInfo"></a>

## returnSubRegionInfo(subregion)
**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| subregion | <code>string</code> | the Sub Region to look up |

**Example**
```js
gw.returnSubRegionInfo("Eastern Asia")
    .then((stuff) => {
        console.log(JSON.stringify(stuff, null, 4))
    })
    .catch(err => {
        console.log(err);
 {JSON}
```
<a name="searchByTranslation"></a>

## searchByTranslation(translation)
**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| translation | <code>string</code> | translation to search by, strange becuase if I put in "america" or any other country it works ?? |

**Example**
```js
gw.searchByTranslation("america")
    .then(x => {
        console.log(JSON.stringify(x, null, 4));
    })
    .catch(err => {
        console.log(err);
 {JSON}
```
<a name="searchByCurrency"></a>

## searchByCurrency(currency)
**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | currency to search  {JSON} gw.searchByCurrency("euro")     .then(x => {         console.log(JSON.stringify(x));    
 })     .catch(err => {         throw new Error(err)     }) s |

<a name="searchByCapital"></a>

## searchByCapital(capital)

| Param | Type | Description |
| --- | --- | --- |
| capital | <code>string</code> | Capital city to search |

**Example**
gw.searchByCapital("Bern")
    .then(x => {
        console.log(JSON.stringify(x));
    })
    .catch(err => {
        throw new Error(err)
 {JSON}
```
<a name="returnAll"></a>
## returnAll()
**Kind**: global function
**Example**
```js
gw.returnAll()
    .then((whatamidoingwithmylife) => {
        console.log(JSON.stringify(whatamidoingwithmylife, null, 4))
 {JSON}
```
