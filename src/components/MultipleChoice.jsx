import { useState, useEffect } from "react";
import { questions } from "../data/data";

const MultipleChoice = ({
  choices,
  setCorrectAnswers,
  correctAnswerIndex,
  userChoices,
  setUserChoices,
  quizOver,
  currentQuestion
}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    setSelectedChoice(null);
  }, [currentQuestion]);

  const handleQuestionClick = (index) => {
    setSelectedChoice(index);

    if (index === correctAnswerIndex) {
      setCorrectAnswers((prev) => prev + 1);
    };

    setUserChoices((prev) => {
      const newChoice = [...prev];
      newChoice[currentQuestion] = index;
      return newChoice;
    });
  };

  const determineButtonBgColorBasedOnState = (index) => {
    if (!quizOver) {
      return selectedChoice === index ? "bg-neutral-900" : "bg-neutral-800";
    }

    if (quizOver) {
      if (index === correctAnswerIndex) {
        return "bg-accent-pink";
      } else if (userChoices[currentQuestion] === index && index !== correctAnswerIndex) {
        return "bg-accent-red";
      } else {
        return "bg-neutral-800";
      }
    }
  };

  return (
    <ol className="flex flex-col gap-6 text-left">
      {choices.map((choice, index) => (
        <li key={index}>
          <button
            className={` text-neutral-100 py-2 px-4 rounded-lg ${determineButtonBgColorBasedOnState(index)}`}
            onClick={() => handleQuestionClick(index)}
            disabled={quizOver}
          >
            {choice}
          </button>
          {!quizOver && (
            <p className="fixed bottom-2 w-full text-neutral-700">
              Kata created by{" "}
              <a 
                href={questions[currentQuestion].attributionLink} 
                target="_blank" rel="noopener noreferrer"
                className="text-neutral-800"
              >
                {questions[currentQuestion].attribution}
              </a>
            </p>
          )}
          {quizOver && userChoices[currentQuestion] !== correctAnswerIndex && (
            <p className="fixed bottom-2 w-full">
              <a 
                href={questions[currentQuestion].furtherReading} 
                target="_blank" rel="noopener noreferrer"
                className="text-accent-red motion-safe:animate-ping duration-75"
              >
                Strengthen for next battle
              </a>
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}

export default MultipleChoice;