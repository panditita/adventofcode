import constants from "./input.js";

// part 1
const rock = {
  elf: "A",
  me: "X",
  points: 1,
};

const paper = {
  elf: "B",
  me: "Y",
  points: 2,
};

const scissors = {
  elf: "C",
  me: "Z",
  points: 3,
};

const roundOutcome = {
  lose: 0,
  draw: 3,
  win: 6,
};

// Y draw
// X lose
// Z wins

// AY - 4
// BX - 1
// AZ -7

const roundEndings = {
  lose: "X",
  draw: "Y",
  win: "Z",
};

let convertToRoundInputToArray = (input) => input.trim().split("\n");

let calculateGameScore = (input) => {
  let roundTotal = [];
  let totalScore = 0;

  convertToRoundInputToArray(input).forEach((round) => {
    const iPlayedPaper = round.includes(paper.me);
    const iPlayedScissors = round.includes(scissors.me);
    const iPlayedRock = round.includes(rock.me);
    const elfPlayedPaper = round.includes(paper.elf);
    const elfPlayedScissors = round.includes(scissors.elf);
    const elfPlayedRock = round.includes(rock.elf);

    const paperWins = elfPlayedRock && iPlayedPaper;
    const scissorsWins = elfPlayedPaper && iPlayedScissors;
    const rockWins = elfPlayedScissors && iPlayedRock;
    const paperDraw = elfPlayedPaper && iPlayedPaper;
    const scissorsDraw = elfPlayedScissors && iPlayedScissors;
    const rockDraw = elfPlayedRock && iPlayedRock;

    if (paperWins || scissorsWins || rockWins) {
      if (iPlayedPaper) roundTotal.push(paper.points + roundOutcome.win);
      if (iPlayedScissors) roundTotal.push(scissors.points + roundOutcome.win);
      if (iPlayedRock) roundTotal.push(rock.points + roundOutcome.win);
    } else if (paperDraw || scissorsDraw || rockDraw) {
      if (iPlayedPaper) roundTotal.push(paper.points + roundOutcome.draw);
      if (iPlayedScissors) roundTotal.push(scissors.points + roundOutcome.draw);
      if (iPlayedRock) roundTotal.push(rock.points + roundOutcome.draw);
    } else {
      if (iPlayedPaper) roundTotal.push(paper.points + roundOutcome.lose);
      if (iPlayedScissors) roundTotal.push(scissors.points + roundOutcome.lose);
      if (iPlayedRock) roundTotal.push(rock.points + roundOutcome.lose);
    }
  });

  totalScore = total(roundTotal);
  return totalScore;
};

let calculateDecodedScore = (input) => {
  let roundTotal = [];
  let totalScore = 0;

  convertToRoundInputToArray(input).forEach((round) => {
    const elfPlayedPaper = round.includes(paper.elf);
    const elfPlayedScissors = round.includes(scissors.elf);
    const elfPlayedRock = round.includes(rock.elf);
    round = round.replace(/\s+/g, ""); //remove white spaces inside the string

    if (round[1] === roundEndings.draw) {
      if (elfPlayedPaper) roundTotal.push(paper.points + roundOutcome.draw);
      if (elfPlayedScissors)
        roundTotal.push(scissors.points + roundOutcome.draw);
      if (elfPlayedRock) roundTotal.push(rock.points + roundOutcome.draw);
    } else if (round[1] === roundEndings.lose) {
      if (elfPlayedPaper) roundTotal.push(rock.points + roundOutcome.lose);
      if (elfPlayedScissors) roundTotal.push(paper.points + roundOutcome.lose);
      if (elfPlayedRock) roundTotal.push(scissors.points + roundOutcome.lose);
    } else if (round[1] === roundEndings.win) {
      if (elfPlayedPaper) roundTotal.push(scissors.points + roundOutcome.win);
      if (elfPlayedScissors) roundTotal.push(rock.points + roundOutcome.win);
      if (elfPlayedRock) roundTotal.push(paper.points + roundOutcome.win);
    }
  });
  totalScore = total(roundTotal);
  return totalScore;
};

let total = (roundTotal) => {
  return roundTotal.reduce((accumulator, current) => accumulator + current);
};

export default {
  convertToRoundInputToArray,
  calculateGameScore,
  calculateDecodedScore,
};


