/*
 * This function takes a number
 * and converts it to roman numeral
 *
 * To run this file, from the terminal/CLI and run node getRomanNumeral.js to run.
 * This is assuming you have already compiled the typescript file to javascript
 */

import { it, assert } from "./test.js";

const getRomanNumeral = (num: number): string => {
  if (num < 1 || num > 3999) {
    throw new Error("Error: Number has to be between 1 and 3,999");
  }

  const numeralsKey = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // 1-9
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // 10-90
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // 100-900
    ["M", "MM", "MMM"], // 1000-3000
  ];

  // Converts floats to integer
  const digits = Math.round(num).toString().split("");
  let position = digits.length - 1;

  return digits.reduce((roman, digit) => {
    if (digit !== "0") {
      roman += numeralsKey[position][parseInt(digit) - 1];
    }

    position -= 1;

    return roman;
  }, "");
};

it("should get roman numerals for 1000", function () {
  const num = 1000;
  const romanNumeral = getRomanNumeral(num);
  console.log({ romanNumeral });

  assert(romanNumeral === "M");
});

export {};
