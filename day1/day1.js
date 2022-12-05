import constants from "./input.js";

// part1
let sortCalories = constants.INPUT.split("\n\n")
  .map((elf) => {
    return elf
      .split("\n") //create array for each elfs
      .map((cal) => Number(cal)) //convert calories into integers
      .reduce((previous, current) => previous + current); //add calories to get total
  })
  .sort((calA, calB) => calB - calA); //order calories from highest to lowest

console.log(sortCalories);
