import constants from "./input.js";

// part 1
let sortCalories = constants.INPUT.split("\n\n")
  .map((elf) => {
    return elf
      .split("\n") //create array for each elfs
      .map((cal) => Number(cal)) //convert calories into integers
      .reduce((accumulator, current) => accumulator + current); //add calories to get total
  })
  .sort((calA, calB) => calB - calA) //order calories from highest to lowest
  // part 2
  .slice(0, 3) //slice the array by the first 3 values
  .reduce((accumulator, current) => accumulator + current); //add the three highest calories to get total

console.log(sortCalories);
