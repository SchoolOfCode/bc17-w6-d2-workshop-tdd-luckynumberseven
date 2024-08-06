export function calculateScrabbleScore(word) {

  // TICKET 2
  const letterScores = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
  };
  // Green stage in TDD cycle
  /*
  if (word === "A") {
    return 1;
  }
  */

  // Refactor stage in TDD cycle
  /*
  return word === "A" ? 1 : 0;
  return word === "B" ? 3 : 0;
  */

  // Final solution
  // Return the matching score for the provided word from our letterScores object
  return letterScores[word];
}
