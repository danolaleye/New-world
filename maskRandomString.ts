/*
 * This function takes a random string
 * and masks the last 4 numbers in the string
 *
 * To run this file, from the terminal/CLI and run node maskRandomString.js to run.
 * This is assuming you have already compiled the typescript file to javascript
 */

import { it, assert } from "./test.js";

const maskRandomString = (randomString: string, num: number = 4): string => {
  if (!randomString) {
    throw new Error("Error: No input provided");
  }

  randomString = reverseString(randomString);
  let newStr = randomString;
  let count = 0;
  for (const char of randomString) {
    if (parseInt(char)) {
      newStr = newStr.replace(char, "*");
      count++;
    }
    if (count === num) {
      newStr = reverseString(newStr);
      break;
    }
  }
  return newStr;
};

const reverseString = (randomString: string): string => {
  return randomString.split("").reverse().join("");
};

it("should mask last four numbers", function () {
  const randomString = "F3f213h82r3";
  const maskedRandomString = maskRandomString(randomString);
  console.log({ maskedRandomString });

  assert(maskedRandomString === "F3f21*h**r*");
});

export {};

// console.log(maskRandomString(randomString));
