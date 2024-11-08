import { useState, useEffect } from "react";

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
        </li>
      ))}
    </ol>
  )
}

export default MultipleChoice;