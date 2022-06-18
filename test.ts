export function it(desc: string, func) {
  try {
    func();
    // If the test case passes then log the test case description in the browser console with a checkmark
    console.log("\x1b[32m%s\x1b[0m", "\u2714 " + desc);
  } catch (error) {
    // log the error on the console with an 'x'
    console.log("\n");
    console.log("\x1b[31m%s\x1b[0m", "\u2718 " + desc);
    console.error(error);
    console.log("\n");
  }
}

export function assert(isTrue: boolean) {
  if (!isTrue) {
    throw new Error();
  }
}

it("should pass", function () {
  assert(1 === 1);
});
