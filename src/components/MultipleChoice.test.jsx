import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import MultipleChoice from "./MultipleChoice";

const mockQuestions = [
  {
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    correctAnswerIndex: 0,
    attribution: "Author 1",
    attributionLink: "https://example1.com",
    furtherReading: "https://example1.com/further-reading",
  },
  {
    choices: ["Choice 5", "Choice 6", "Choice 7", "Choice 8"],
    correctAnswerIndex: 2,
    attribution: "Author 2",
    attributionLink: "https://example2.com",
    furtherReading: "https://example2.com/further-reading",
  },
];

const renderComponent = (quizOver = false, currentQuestion = 0, userChoices = []) => {
  const choices = mockQuestions[currentQuestion].choices;
  const correctAnswerIndex = mockQuestions[currentQuestion].correctAnswerIndex;
  const setCorrectAnswers = vi.fn();
  const setUserChoices = vi.fn();

  render(
    <MultipleChoice
      choices={choices}
      setCorrectAnswers={setCorrectAnswers}
      correctAnswerIndex={correctAnswerIndex}
      userChoices={userChoices}
      setUserChoices={setUserChoices}
      quizOver={quizOver}
      currentQuestion={currentQuestion}
      attribution={mockQuestions[currentQuestion].attribution}
      attributionLink={mockQuestions[currentQuestion].attributionLink}
      furtherReading={mockQuestions[currentQuestion].furtherReading}
    />
  );

  return { setCorrectAnswers, setUserChoices };
};

describe("MultipleChoice Component", () => {
  beforeEach(() => {
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  test("renders the choices", () => {
    mockQuestions[0].choices.forEach((choice) => {
      expect(screen.getByText(choice)).toBeInTheDocument();
    });
  });

  test("handles choice selection", () => {
    const { setUserChoices } = renderComponent(false, 0, []);
    const choiceButton = screen.getByText("Choice 1");
    fireEvent.click(choiceButton);

    expect(setUserChoices).toHaveBeenCalledWith(expect.any(Function));

    const callArgs = setUserChoices.mock.calls[0][0];
    const mockPrevChoices = [];
    expect(callArgs(mockPrevChoices)).toEqual([0]);
  });

  test("applies correct button background colors when quiz is over and answer was correct", () => {
    const userChoices = [2];

    renderComponent(true, 0, userChoices);

    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveClass("bg-neutral-800");
    expect(buttons[1]).toHaveClass("bg-neutral-800");
    expect(buttons[2]).toHaveClass("bg-accent-pink");
    expect(buttons[3]).toHaveClass("bg-neutral-800");
  });

  test("displays attribution and link", () => {
    renderComponent(false, 0, [null, null]);

    const attributionElement = screen.getByRole("link", { name: /Author 1/i });
    expect(attributionElement).toBeInTheDocument();
    expect(attributionElement).toHaveAttribute("href", "https://example1.com");
  });

  test("displays further reading link when quiz is over and user choice is incorrect", () => {
    renderComponent(true, 0, [1]);

    const furtherReadingElement = screen.getByRole("link", { name: /Strengthen for next battle/i });
    expect(furtherReadingElement).toBeInTheDocument();
    expect(furtherReadingElement).toHaveAttribute("href", "https://example1.com/further-reading");
  });
});