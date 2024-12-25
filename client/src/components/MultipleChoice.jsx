import React, { useState, useEffect } from "react";

const MultipleChoice = ({
  state,
  dispatch,
}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    setSelectedChoice(null);
  }, [state.currentQuestion]);

  const handleQuestionClick = (index) => {
    setSelectedChoice(index);

    if (!state.quizOver && index === state.shuffledQuestions[state.currentQuestion].correctAnswerIndex) {
      dispatch({ type: "SET_CORRECT_ANSWERS", payload: state.correctAnswers + 1 });
    };

    dispatch({
      type: "SET_USER_CHOICES",
      payload: state.userChoices.map((choice, idx) =>
        idx === state.currentQuestion ? index : choice
      ),
    });
  };

  const determineButtonBgColorBasedOnState = (index) => {
    if (!state.quizOver) {
      return selectedChoice === index ? "bg-neutral-900" : "bg-neutral-800";
    }

    if (state.quizOver) {
      if (index === state.shuffledQuestions[state.currentQuestion].correctAnswerIndex) {
        return "bg-accent-pink";
      } else if (state.userChoices[state.currentQuestion] === index && index !== state.shuffledQuestions[state.currentQuestion].correctAnswerIndex) {
        return "bg-accent-red";
      } else {
        return "bg-neutral-800";
      }
    }
  };

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