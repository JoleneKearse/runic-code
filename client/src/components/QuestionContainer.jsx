import React from "react";
import { useNavigate } from "react-router-dom";
import Code from "./Code";
import MultipleChoice from "./MultipleChoice";
import Button from "./Button";

const QuestionContainer = ({
  state,
  dispatch,
}) => {
  const navigate = useNavigate();

  const setButtonText = () => {
    if (!state.quizOver) {
      if (state.currentQuestion === 9) {
        return "⚔ Claim My Plunder! ⚔";
      } else {
        return "Cast Answer";
      }
    }

    if (state.quizOver) {
      if (state.currentQuestion !== 9) {
        return "Onward!";
      } else {
        return "⚔ Return to the Battlefield ⚔";
      }
    }
  };

  const handleClick = () => {
    // prevent user from moving to next question without answering
    if (state.userChoices[state.currentQuestion] === null) {
      alert("The Jarl demands an answer!");
      return;
    };

    // on QuizPage
    if (!state.quizOver) {
      if (state.currentQuestion !== 9) {
        dispatch({ type: "SET_CURRENT_QUESTION", payload: state.currentQuestion + 1 });
      } else {
        // move to ResultsPage
        dispatch({ type: "SET_QUIZ_OVER", payload: true });
        dispatch({ type: "SET_CURRENT_QUESTION", payload: 0 });
        navigate("/results");
      }
    }

    // on ResultsPage
    if (state.quizOver) {
      if (state.currentQuestion !== 9) {
        dispatch({ type: "SET_CURRENT_QUESTION", payload: state.currentQuestion + 1 });
      } else {
        // reset quiz
        dispatch({ type: "SET_QUIZ_OVER", payload: false });
        dispatch({ type: "SET_CORRECT_ANSWERS", payload: 0 });
        dispatch({ type: "SET_USER_CHOICES", payload: [] });
        dispatch({ type: "SET_CURRENT_QUESTION", payload: 0 });
        navigate("/quiz");
      }
    }
  };

  return (
    <article className="flex flex-col gap-16 py-10">
      {state.error && <p className="text-red-500 font-bold">{state.error}</p>}
      <h2 className="text-2xl font-black -mb-10 md:text-3xl lg:text-5xl">{state.quizOver ? "Omen" : "Rune"} {state.currentQuestion + 1}</h2>
      {state.currentQuestion !== 10 &&
        <Code code={state.shuffledQuestions[state.currentQuestion].code} />
      }
      {state.currentQuestion !== 10 &&
        <MultipleChoice
          dispatch={dispatch}
          state={state}
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