# TypeScript: Handling undefined in string | null

This example demonstrates a common issue in TypeScript where passing `undefined` to a function expecting `string | null` results in a type error.  The code includes a solution to handle both `null` and `undefined` gracefully.

## Bug

The `printName` function is designed to handle `null` values, but it throws an error when passed `undefined`. This happens because TypeScript's type system distinguishes between `null` and `undefined`, even though they both represent the absence of a value.

## Solution

The solution modifies the function's type signature to accept `string | null | undefined`. This allows the function to handle all three cases without type errors.