import constants from "./input.js";

let sum = (input) => {
  return input.reduce((accumulator, current) => accumulator + current);
};

let separateIntoIndividualRucksacks = (input) => {
  return input
    .trim()
    .split("\n")
    .map((rucksacks) => {
      return rucksacks.split(" ").toString();
    });
};

let divideTheTwoCompartments = (input) => {
  let rucksacks = separateIntoIndividualRucksacks(input);
  let priorities = [];

  rucksacks.forEach((rucksack) => {
    const middleIndex = Math.ceil(rucksack.length / 2);
    const firstCompartment = rucksack.substring(0, middleIndex);
    const secondCompartment = rucksack.substring(middleIndex);

    priorities.push(
      findRepeatingCharactersWithPriorities(
        [...firstCompartment],
        [...secondCompartment]
      ) + 1
    );
  });

  return sum(priorities);
};

let findRepeatingCharactersWithPriorities = (one, two, three) => {
  let repeatedElement;

  if (!three) {
    repeatedElement = one.find((element) => two.includes(element));
  } else {
    let elements = [];

    one.find((element) => {
      if (
        two.includes(element) &&
        !elements.includes(element) &&
        three.includes(element) &&
        !elements.includes(element)
      )
        elements.push(element);
    });

    repeatedElement = elements;
  }

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return letters.findIndex((x) => x === repeatedElement.toString());
};

// part 2

let missingSecurityBadges = (input) => {
  let rucksacks = separateIntoIndividualRucksacks(input);
  let setsOfThrees = [];
  for (let i = 0; i <= rucksacks.length; i += 3) {
    if (i % 3 == 0 && rucksacks[i]) {
      setsOfThrees.push(rucksacks.slice(i, i + 3));
    }
    setsOfThrees;
  }
  let priorities = [];

  for (let group of setsOfThrees) {
    priorities.push(
      findRepeatingCharactersWithPriorities(
        [...group[0]],
        [...group[1]],
        [...group[2]]
      ) + 1
    );
  }

  return sum(priorities);
};

export default {
  divideTheTwoCompartments,
  missingSecurityBadges,
};
