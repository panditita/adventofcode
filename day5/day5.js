import constants from "./input.js";

// ""  [D]  ""
// [N] [C]  ""
// [Z] [M] [P]

const input = constants.EXAMPLE_INPUT;

let [stacks, instructions] = input.split("\n\n");

const cranesInput = (stacksInput) => {
  stacks = stacksInput
    .split("\n")
    .slice(0, -1)
    .filter((stack) => stack.length > 0)
    .reverse();

  let stacksLength = stacks.length;
  let individualStack = [];

  stacks.forEach((stack, i) => {
    let startLine = i;
    let endLine = i + stacksLength;
    let counter = 0;
    const stackLine = stack
      .substring(startLine, endLine)
      .trim()
      .replace("&nbsp;");
      
    while (counter < stacksLength) {
        console.log(endLine <= stackLine.length)
      if (endLine <= stackLine.length) {
        const stackValue = stackLine.substring(startLine, endLine).trim();
        if (stackValue) individualStack.push(stackValue);
        startLine += endLine;
      }
      counter++;
    }
  });
  return individualStack;
};

console.log("cranesInput", cranesInput(stacks));
