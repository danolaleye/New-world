/*
 * This function takes a number, add the individual digits
 * and sort according to their weight
 *
 * To run this file, from the terminal/CLI and run node getWeightBySum.js to run.
 * This is assuming you have already compiled the typescript file to javascript
 */

import { it, assert } from "./test.js";

const addDigits = (num: any, sum: number = 0): number => {
  if (Math.sign(num) === 1) {
    return addDigits(Math.floor(num / 10), sum + (num % 10));
  }
  return sum;
};
const sortByDigitSum = (stringOfNumbers: string = ""): string => {
  const arrayOfNumbers = stringOfNumbers.split(" ");
  arrayOfNumbers.sort((a, b) => {
    return addDigits(a) - addDigits(b);
  });
  return arrayOfNumbers.join(" ");
};

it("should get weight by sum", function () {
  const stringOfNumbers = "56 65 74 100 99 68 86 180 90";
  const sortedString = sortByDigitSum(stringOfNumbers);
  console.log({ sortedString });

  assert(sortedString === "100 180 90 56 65 74 68 86 99");
});

it("should fail any negative number included", function () {
  const stringOfNumbers = "56 65 74 -100 99 68 86 180 90";
  const sortedString = sortByDigitSum(stringOfNumbers);
  console.log({ sortedString });

  assert(sortedString !== "100 180 90 56 65 74 68 86 99");
});

export {};
