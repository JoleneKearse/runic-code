import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("../data/data", () => ({
  questions: [
    {
      code: "const a = 1;",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      correctAnswerIndex: 0,
      attribution: "Author 1",
      attributionLink: "https://example1.com",
      furtherReading: "https://example1.com/further-reading",
    },
    {
      code: "const b = 2;",
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
    code: "const a = 1;",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    correctAnswerIndex: 0,
    attribution: "Author 1",
    attributionLink: "https://example1.com",
    furtherReading: "https://example1.com/further-reading",
  },
  {
    code: "const b = 2;",
    choices: ["Choice 5", "Choice 6", "Choice 7", "Choice 8"],
    correctAnswerIndex: 2,
    attribution: "Author 2",
    attributionLink: "https://example2.com",
    furtherReading: "https://example2.com/further-reading",
  },
];

describe("QuestionContainer", () => {
  const setQuizOver = vi.fn();
  const setCorrectAnswers = vi.fn();
  const setUserChoices = vi.fn();

  const renderComponent = (quizOver = false, userChoices = []) => {
    render(
      <Router>
        <QuestionContainer
          quizOver={quizOver}
          setQuizOver={setQuizOver}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
        />
      </Router>
    );
  };

  beforeEach(() => {
    renderComponent();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders the question number", () => {
    expect(screen.getByText("Rune 1")).toBeInTheDocument();
  });

  test("renders the answer number when quiz is over", () => {
    renderComponent(true);
    expect(screen.getByText("Omen 1")).toBeInTheDocument();
  });

  // test("renders the code component", () => {
  //   expect(screen.getByText("const a = 1;")).toBeInTheDocument();
  // });

  test("renders the MultipleChoice component", () => {
    mockQuestions[0].choices.forEach((choice) => {
      expect(screen.getByText(choice)).toBeInTheDocument();
    });
  });

  test("handles button click to move to next question", () => {
    const button = screen.getByText("Cast Answer");
    fireEvent.click(button);
    expect(setQuizOver).not.toHaveBeenCalled();
    expect(screen.getByText("Rune 2")).toBeInTheDocument();
  });

  // test("handles button click to end quiz and navigate to results", () => {
  //   renderComponent(false, Array(9).fill(null));
  //   const button = screen.getByText("Cast Answer");
  //   fireEvent.click(button);
  //   expect(setQuizOver).toHaveBeenCalledWith(true);
  // });

  // test("handles button click to reset quiz", () => {
  //   renderComponent(true, Array(10).fill(null));
  //   const button = screen.getByText("⚔ Return to the Battlefield ⚔");
  //   fireEvent.click(button);
  //   expect(setQuizOver).toHaveBeenCalledWith(false);
  //   expect(setCorrectAnswers).toHaveBeenCalledWith(0);
  //   expect(setUserChoices).toHaveBeenCalledWith([]);
  // });
});