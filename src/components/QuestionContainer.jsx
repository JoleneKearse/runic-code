import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/data";
import Code from "./Code";
import MultipleChoice from "./MultipleChoice";
import Button from "./Button";

const QuestionContainer = ({ setCorrectAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    if (currentQuestion !== 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/results");
    }
  }

  return (
    <article className="flex flex-col gap-16 py-10">
      <h2 className="text-2xl font-black md:text-3xl lg:text-5xl">Question {currentQuestion + 1}</h2>
      {currentQuestion !== 10 && <Code code={questions[currentQuestion].code} />}
      {currentQuestion !== 10 && <MultipleChoice choices={questions[currentQuestion].choices} correctAnswerIndex={questions[currentQuestion].correctAnswerIndex} setCorrectAnswers={setCorrectAnswers} />}
      <Button text={currentQuestion !== 9 ? "Submit" : "Get my score!"} onClick={handleClick} />
    </article>
  )
}

export default QuestionContainer