import React from "react";

const MultipleChoice = ({
  state,
  selectedChoice,
  setSelectedChoice,
}) => {
  const handleQuestionClick = (index) => {
    setSelectedChoice(index);
  };

  const determineButtonBgColorBasedOnState = (index) => {
    if (!state.quizOver) {
      // color current user choice
      return selectedChoice === index ? "bg-neutral-900" : "bg-neutral-800";
    }

    // ResultsPage
    if (state.quizOver) {
      if (index === state.shuffledQuestions[state.currentQuestion].correctAnswerIndex) {
        return "bg-accent-pink";
      } else if (index !== state.shuffledQuestions[state.currentQuestion].correctAnswerIndex && index === state.userChoices[state.currentQuestion]) {
        return "bg-accent-red";
      } else {
        return "bg-neutral-800";
      }
    }
  };

  console.log("quizOver:", state.quizOver);
  console.log("userChoice:", state.userChoices[state.currentQuestion]);
  console.log("correctAnswerIndex:", state.shuffledQuestions[state.currentQuestion].correctAnswerIndex);

  return (
    <>
      {!state.quizOver && (
        <p className="-mt-16 -mb-8 w-full text-neutral-700">
          Kata created by{" "}
          <a
            href={state.shuffledQuestions[state.currentQuestion].attributionLink}
            target="_blank" rel="noopener noreferrer"
            className="text-neutral-800"
          >
            {state.shuffledQuestions[state.currentQuestion].attribution}
          </a>
        </p>
      )}

      {state.quizOver && state.userChoices[state.currentQuestion] !== state.shuffledQuestions[state.currentQuestion].correctAnswerIndex && (
        <a
          href={state.shuffledQuestions[state.currentQuestion].furtherReading}
          target="_blank" rel="noopener noreferrer"
          className="-mt-[75px] ml-[70px] md:-mt-[80px] md:ml-[250px] lg:ml-[200px] text-neutral-100 py-2 px-4 rounded-full bg-accent-navy"
        >
          Strengthen for next battle
        </a>
      )}
      <ol className="flex flex-col gap-6 text-left relative">
        {state.shuffledQuestions[state.currentQuestion].choices.map((choice, index) => (
          <li key={index}>
            <button
              className={`text-neutral-100 py-2 px-4 rounded-lg ${determineButtonBgColorBasedOnState(index)}`}
              onClick={() => handleQuestionClick(index)}
              disabled={state.quizOver}
            >
              {choice}
            </button>
          </li>
        ))}
      </ol>
    </>
  )
}

export default MultipleChoice;