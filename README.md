![AppVeyor tests](https://img.shields.io/appveyor/tests/pbxx/spreadprom?)
![npm version](https://img.shields.io/npm/v/spreadprom)


# sprom
A tiny library for making promises *spreadable*...

# Installation
```bash
npm install spreadprom
```

# Usage
```js
import sprom from "spreadprom"
```

Use spreadprom to gracefully catch promise errors without try-catch blocks: 

```js
var [err, result] = await sprom( myPromise() )
if (err) { throw err }

// or

var results = [ ...await sprom( myPromise() ) ]
if (results[0]) { throw results[0] }
```

