import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/data";
import Code from "./Code";
import MultipleChoice from "./MultipleChoice";
import Button from "./Button";

const QuestionContainer = ({
  quizOver,
  setQuizOver,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const setButtonText = () => {
    if (userChoices.length >= 10 && !quizOver) {
      return "⚔ Claim My Plunder! ⚔";
    }
  
    if (!quizOver) {
      return "Cast Answer";
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
      <h2 className="text-2xl font-black md:text-3xl lg:text-5xl">{quizOver ? "Answer" : "Question"} {currentQuestion + 1}</h2>
      {currentQuestion !== 10 &&
        <Code code={questions[currentQuestion].code} />
      }
      {currentQuestion !== 10 &&
        <MultipleChoice
          quizOver={quizOver}
          currentQuestion={currentQuestion}
          choices={questions[currentQuestion].choices}
          correctAnswerIndex={questions[currentQuestion].correctAnswerIndex}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
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