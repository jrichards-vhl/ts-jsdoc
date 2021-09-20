# TypeScript / JSDoc Demo

## Overview

Demonstrates how TypeScript can be used to audit JavaScript files.  The project
includes a simple Webpack bundler that, when run, will also audit the code in
the background with TypeScript.

The audit is done by running the type checker before the build script actually
runs.  See the following line in the `package.json` file:
```
"build": "npx tsc && npx webpack --config<...>"
```

At the time of this commit, the build will succeed.  See `./src/app.js` for an
example of how to make the build fail.

## Storing type definitions in a standalone file.

See `./src/types.js`.  The purpose of this file is only to store type
definitions.  There is one caveat however, in order to keep tooling happy, it
needs to export something to be read as a module.  (In the example's case, it
simply has a default export of `null`).

There may be a better solution than this.

There is also an `interfaces.d.ts` file.  This is a TypeScript file that can be
written to describe a JS file.  Many libraries generate these so that anyone
using typechecking can ensure that they're using the library correctly.

