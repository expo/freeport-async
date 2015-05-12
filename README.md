# freeport
Uses mikeal's code to find an open port in a given range,
and presents a Promise-based interface


Usage:
```js
    var freeportAsync = require('freeport-async');

    var portICanUse = await freeportAsync();

    var portIn9000Range = await freeportAsync(9000);

```

See https://gist.github.com/mikeal/1840641

