import rucksacks from "./day3.js";
import constants from "./input.js";

function assert(outcome, description) {
  var passFail = outcome ? "pass" : "fail";
  console.log(passFail, ": ", description);
  return outcome;
}

rucksacks.divideTheTwoCompartments = rucksacks.divideTheTwoCompartments(
  constants.INPUT
);
const day3Part1 = rucksacks.divideTheTwoCompartments;

rucksacks.missingSecurityBadges = rucksacks.missingSecurityBadges(
  constants.INPUT
);
const day3Part2 = rucksacks.missingSecurityBadges;

assert(day3Part1 === 7889, "divideTheTwoCompartments should return 7889");

assert(
  day3Part2 === 2825,
  "missingSecurityBadges should return 2825 using the example input"
);
