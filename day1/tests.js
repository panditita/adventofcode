// const calories = require("../../day1/day1");

import calories from "./day1.js";
import constants from "./input.js";

function assert(outcome, description) {
  var passFail = outcome ? "pass" : "fail";
  console.log(passFail, ": ", description);
  return outcome;
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

calories.allElvesCalories = calories.sortAllCalories(constants.EXAMPLE_INPUT);
const day1Part1 = calories.allElvesCalories;
const day1Part2 = calories.threeHighestCalories();

assert(
  arrayEquals(day1Part1, [57975, 27283, 24004]),
  "sortAllCalories should return [ 57975, 27283, 24004 ]"
);

assert(
  day1Part2 === 200044,
  "sortAllCalories should return 200044 using the example input"
);
