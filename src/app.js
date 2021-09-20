// @ts-check

/**
 * @typedef {import('./types').Foo} Foo
 */

/**
 * @typedef {import('./interfaces').Animal} Animal
 */

/** @type {Foo} */
const foo = {
  bar: 'baz',
  // The next property doesn't exist on type Foo.  When a build is run, the
  // typechecker will find the error and cause the build to fail, with an
  // explanation as to why.
  //
  // Uncomment the next line, save the file, and run
  // `$ npm run build` to see it in action.

  // fruit: 'apple'
};

// This type comes from the interfaces.d.ts file.  It's functionally the same
// as the @typedef form the types.js file.  Try editing its properties to see
// how it behaves if used incorrectly.

/** @type {Animal} */
const giraffe = {
  name: 'Giraffe',
  legs: 4,
  hasTail: true,
}

// Run a build and inspect the output.  (Building for production will be much
// more readable than building for development.)  You'll see that the "giraffe"
// constant doesn't appear in the compiled code.  Webpack removes it because
// it's never referenced.
console.log(foo);

