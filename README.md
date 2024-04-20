[![Build status](https://ci.appveyor.com/api/projects/status/ojgkwe64oc154to6/branch/main?svg=true)](https://ci.appveyor.com/project/pbxx/spreadprom/branch/main)
[![npm version](https://img.shields.io/npm/v/spreadprom)](https://www.npmjs.com/package/spreadprom)


# spreadprom
A tiny library for making promises *spreadable*...

# Installation
```bash
npm install spreadprom
```

# Usage

```js
const sprom = require("spreadprom")
```
Or
```js
import sprom from "spreadprom"
```

Use `sprom` to gracefully catch promise errors without try-catch blocks:

```js
var [err, result] = await sprom( myPromise() )
if ( err ) { throw err }

// or

var myItem = [ ...await sprom( myPromise() ) ]
//  => [err, result]
if ( myItem[0] ) { throw myItem[0] }
```

Use included function `osprom` (short for object-sprom) to resolve into an object instead:
```js
import { osprom } from "spreadprom"
// or
const { sprom, osprom } = require("spreadprom")
```

```js
const myItem = await osprom( myPromise() )
// => {err, result}
if ( myItem.err ) { throw myItem.err }
```

