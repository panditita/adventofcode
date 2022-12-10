// const calories = require("../../day1/day1");

import score from "./day2.js";
import constants from "./input.js";

function assert(outcome, description) {
  var passFail = outcome ? "pass" : "fail";
  console.log(passFail, ": ", description);
  return outcome;
}

const day1Part1 = score.calculateGameScore(constants.INPUT);
const day1Part2 = score.calculateDecodedScore(constants.INPUT);

assert(
  day1Part1 === 10941,
  "calculateScore should return 10941"
);

assert(
  day1Part2 === 13071,
  "calculateScore should return 13071"
);
