import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Code from "./Code";
import MultipleChoice from "./MultipleChoice";
import Button from "./Button";

const QuestionContainer = ({
  quizOver,
  setQuizOver,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
  shuffledQuestions,
  error,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const setButtonText = () => {
    if (!quizOver) {
      if (currentQuestion === 9) {
        return "⚔ Claim My Plunder! ⚔";
      } else {
        return "Cast Answer";
      }
    }

    if (quizOver) {
      if (currentQuestion !== 9) {
        return "Onward!";
      } else {
        return "⚔ Return to the Battlefield ⚔";
      }
    }
  };

  const handleClick = () => {
    if (userChoices[currentQuestion] === null) {
      alert("The Jarl demands an answer!");
      return;
    };

    if (quizOver) {
      if (currentQuestion !== 9) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // reset quiz
        setQuizOver(false);
        setCurrentQuestion(0);
        setCorrectAnswers(0);
        setUserChoices([]);
        navigate("/quiz");
      }
    } else {
      if (currentQuestion !== 9) {
        // move to next question
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // quiz over & go to ResultsPage
        setQuizOver(true);
        navigate("/results");
      }
    };
  };

  return (
    <article className="flex flex-col gap-16 py-10">
      {error && <p className="text-red-500 font-bold">{error}</p>}
      <h2 className="text-2xl font-black -mb-10 md:text-3xl lg:text-5xl">{quizOver ? "Omen" : "Rune"} {currentQuestion + 1}</h2>
      {currentQuestion !== 10 &&
        <Code code={shuffledQuestions[currentQuestion].code} />
      }
      {currentQuestion !== 10 &&
        <MultipleChoice
          quizOver={quizOver}
          currentQuestion={currentQuestion}
          choices={shuffledQuestions[currentQuestion].choices}
          correctAnswerIndex={shuffledQuestions[currentQuestion].correctAnswerIndex}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
          attribution={shuffledQuestions[currentQuestion].attribution}
          attributionLink={shuffledQuestions[currentQuestion].attributionLink}
          furtherReading={shuffledQuestions[currentQuestion].furtherReading}
        />
      }
      <Button
        text={setButtonText()}
        onClick={handleClick}
      />
    </article>
  )
}

export default QuestionContainer;