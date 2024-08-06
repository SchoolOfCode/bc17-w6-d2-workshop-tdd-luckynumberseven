import { expect, test } from "vitest";
import {
  calculateScrabbleScore,
  calculateMultipleScore,
} from "./scrabble-score";

// Ticket 2
// Write a new test that checks whether calculateScrabbleScore correctly calculates the score for the word A

// test("Calculate the score for the word A", function () {
//   expect(calculateScrabbleScore("A")).toBe(1);
//   expect(calculateScrabbleScore("B")).toBe(3);
//   expect(calculateScrabbleScore("C")).toBe(3);
//   expect(calculateScrabbleScore("D")).toBe(2);
// });

// test.each([
//   ["A", 1],
//   ["B", 3],
//   ["C", 3],
//   ["D", 2],
// ])('calculateScrabbleScore(%s) -> %s', (letter, value) => {
//   expect (calculateScrabbleScore(letter)).toBe(value)
// })

// TIKET 3 calculate multiple score
test("calculateMultipleScore(word)", () => {
  expect(calculateMultipleScore(letters)).toBe(value);
});
