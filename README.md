# sprom
A tiny library for making promises *spreadable*...

# Installation
```bash
npm install sprom
```

# Usage
```js
import sprom from "sprom"
```

Use sprom to gracefully catch promise errors without try-catch blocks:

```js
var [err, result] = await sprom( myPromise() )
if (err) { throw err }

// or

var results = [ ...await sprom( myPromise() ) ]
if (results[0]) { throw results[0] }
```

