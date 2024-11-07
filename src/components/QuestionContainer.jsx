import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/data";
import Code from "./Code";
import MultipleChoice from "./MultipleChoice";
import Button from "./Button";

const QuestionContainer = ({ setCorrectAnswers, userChoices, setUserChoices, setQuizOver, quizOver }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const getButtonText = () => {
    if (currentQuestion !== 9 && !quizOver) {
      return "Submit";
    } else if (!quizOver) {
      return "Get my score!";
    } else if (currentQuestion !== 9 && quizOver) {
      return "Go again?"
    } else {
      return "Next!";
    }
  };

  const handleClick = () => {
    if (quizOver && currentQuestion === 9) {
      setQuizOver(false);
      setCurrentQuestion(0);
      setCorrectAnswers(0);
      setUserChoices([]);
      navigate("/quiz");
    }
    if (currentQuestion !== 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizOver(true);
      navigate("/results");
    }
  };

  return (
    <article className="flex flex-col gap-16 py-10">
      <h2 className="text-2xl font-black md:text-3xl lg:text-5xl">{quizOver ? "Answer" : "Question"} {currentQuestion + 1}</h2>
      {currentQuestion !== 10 &&
        <Code code={questions[currentQuestion].code} />
      }
      {currentQuestion !== 10 &&
        <MultipleChoice
          choices={questions[currentQuestion].choices}
          correctAnswerIndex={questions[currentQuestion].correctAnswerIndex}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
          quizOver={quizOver}
          currentQuestion={currentQuestion}
        />
      }
      <Button text={getButtonText()} onClick={handleClick} />
    </article>
  )
}

export default QuestionContainer;