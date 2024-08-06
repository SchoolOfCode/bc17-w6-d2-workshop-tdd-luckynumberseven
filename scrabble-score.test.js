import { expect, test } from "vitest";
import { calculateScrabbleScore } from "./scrabble-score";

// Ticket 2
// Write a new test that checks whether calculateScrabbleScore correctly calculates the score for the word A

test("Calculate the score for the word A", function () {
  expect(calculateScrabbleScore("A")).toBe(1);
  expect(calculateScrabbleScore("B")).toBe(3);
  expect(calculateScrabbleScore("C")).toBe(3);
  expect(calculateScrabbleScore("D")).toBe(2);
});
