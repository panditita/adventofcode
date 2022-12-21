import input from "./input.js";
import constants from "./input.js";

let separateIntoPairs = (input) => {
  return input
    .trim()
    .split("\n")
    .map((pair) => {
      return pair.split(/\D/).map(Number);
    });
};

// part 1
let calculatePairsContainingOtherPairs = (input) => {
  const pairs = separateIntoPairs(input);

  return pairs
    .map((pair) => pair)
    .filter(
      ([pair1Start, pair1End, pair2Start, pair2End]) => 
        (pair2Start >= pair1Start && pair2End <= pair1End) || (pair2Start <= pair1Start && pair2End >= pair1End) //filter by comparing one element at the beginning with one at the end
    ).length; //number of elements that are returned from the filter
};


// part 2

let calculatePairsOverlapping = (input) => {
    const pairs = separateIntoPairs(input);
    return pairs
    .map((pair) => pair)
    .filter(
      ([pair1Start, pair1End, pair2Start, pair2End]) => 
        (pair1End >= pair2Start && pair1Start <= pair2End) //filter by comparing one element at the beginning with one at the end
    ).length; //number of elements that are returned from the filter
}  



export default {
    calculatePairsContainingOtherPairs,
    calculatePairsOverlapping,
  };
  