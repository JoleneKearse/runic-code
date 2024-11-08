import { useState } from "react";

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
    if (index === correctAnswerIndex) return "bg-accent-pink";
    if (userChoices[currentQuestion] === index && index !== correctAnswerIndex) return "bg-accent-red";
  };

  return (
    <ol className="flex flex-col gap-6 text-left">
      {choices.map((choice, index) => (
        <li key={index}>
          <button
            className={`bg-neutral-800 text-neutral-100 py-2 px-4 rounded-lg ${determineButtonBgColorBasedOnState(index)}`}
            onClick={() => handleQuestionClick(index)}
          >
            {choice}
          </button>
        </li>
      ))}
    </ol>
  )
}

export default MultipleChoice;