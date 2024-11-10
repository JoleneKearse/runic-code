import React from "react";
import MultipleChoice from "./MultipleChoice";
// import { questions as mockQuestions } from "../data/data";
import { render, screen, fireEvent, within, cleanup } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("../data/data", () => ({
  questions: [
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
  ],
}));

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

describe("MultipleChoice", () => {
  const setCorrectAnswers = vi.fn();
  const setUserChoices = vi.fn();

  const renderComponent = (quizOver = false, currentQuestion = 0, userChoices = []) => {
    render(
      <MultipleChoice
        choices={mockQuestions[currentQuestion].choices}
        setCorrectAnswers={setCorrectAnswers}
        correctAnswerIndex={mockQuestions[currentQuestion].correctAnswerIndex}
        userChoices={userChoices}
        setUserChoices={setUserChoices}
        quizOver={quizOver}
        currentQuestion={currentQuestion}
      />
    );
  };

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
    const choiceButton = screen.getByText("Choice 1");
    fireEvent.click(choiceButton);

    expect(setUserChoices).toBeCalledWith(expect.any(Function));

    const callArgs = setUserChoices.mock.calls[0][0];
    const mockPrevChoices = [];
    expect(callArgs(mockPrevChoices)).toEqual([0]);
  });

  test("displays attribution and link", () => {
    // renderComponent();
    const attributionElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'a' && content.includes("Author 1");
    });
    expect(attributionElement).toBeInTheDocument();
    expect(attributionElement).toHaveAttribute("href", "https://example1.com");
  });
});
