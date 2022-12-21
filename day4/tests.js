import assignments from "./day4.js";
import constants from "./input.js";

function assert(outcome, description) {
  var passFail = outcome ? "pass" : "fail";
  console.log(passFail, ": ", description);
  return outcome;
}

assignments.calculatePairsContainingOtherPairs = assignments.calculatePairsContainingOtherPairs(
  constants.INPUT
);
const day4Part1 = assignments.calculatePairsContainingOtherPairs;

assignments.calculatePairsOverlapping = assignments.calculatePairsOverlapping(
  constants.INPUT
);
const day4Part2 = assignments.calculatePairsOverlapping;

assert(day4Part1 === 453, "calculatePairsContainingOtherPairs should return 453");

assert(
  day4Part2 === 919,
  "missingSecurityBadges should return 919 using the example input"
);
