/**
 * @description
 * This file is an example of a "type definition file".  It is technically a
 * TypeScript file that allows typing of JavaScript in a slightly cleaner way
 * than JSDocs.
 *
 * TypeScript can also generate these files for compiled JavaScirpt code as long
 * as the TypeScript compiler is used in the build process.
 */

/** Describes an interface for an animal. */
export interface Animal {
  /** The animal's name.*/
  name: string;
  /** How many legs the animal has. */
  legs: number;
  /** If the animal has a tail. */
  hasTail: boolean;
}

