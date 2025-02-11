import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Code from "./Code";
import MultipleChoice from "./MultipleChoice";
import Button from "./Button";
import QuizOver from "./QuizOver";
import fetchQuestions from "../services/fetchQuestions";

const QuestionContainer = ({
  state,
  dispatch,
}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedChoice(null);
  }, [state.currentQuestion]);

  const setButtonText = () => {
    if (!state.quizOver) {
      if (state.currentQuestion === 10) {
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
    // on QuizPage
    if (selectedChoice === null && !state.quizOver && state.currentQuestion !== 10) {
      alert("Jarl demands an answer!");
      return;
    };

    // on ResultsPage
    if (state.quizOver) {
      if (state.currentQuestion !== 9) {
        dispatch({ type: "SET_CURRENT_QUESTION", payload: state.currentQuestion + 1 });
      } else {
        // reset quiz
        fetchQuestions().then(questions => {
          dispatch({ type: "SET_SHUFFLED_QUESTIONS", payload: questions });
        });
        dispatch({ type: "SET_QUIZ_OVER", payload: false });
        dispatch({ type: "SET_CORRECT_ANSWERS", payload: 0 });
        dispatch({ type: "SET_USER_CHOICES", payload: Array.from({ length: 10 }).fill(null) });
        dispatch({ type: "SET_CURRENT_QUESTION", payload: 0 });
        navigate("/quiz");
      }
    }

    // on QuizPage
    if (!state.quizOver) {
      if (state.currentQuestion < 10) {
        dispatch({ type: "SET_CURRENT_QUESTION", payload: state.currentQuestion + 1 });

        dispatch({
          type: "SET_USER_CHOICES",
          payload: state.userChoices.map((choice, idx) =>
            idx === state.currentQuestion ? selectedChoice : choice
          ),
        });

        if (selectedChoice === state.shuffledQuestions[state.currentQuestion].correctAnswerIndex && state.currentQuestion !== 10) {
          dispatch({ type: "SET_CORRECT_ANSWERS", payload: state.correctAnswers + 1 });
        };
      }

      // move to ResultsPage
      if (state.currentQuestion === 10) {
        dispatch({ type: "SET_QUIZ_OVER", payload: true });
        dispatch({ type: "SET_CURRENT_QUESTION", payload: 0 });
        navigate("/results");
      }
    }
  };

  return (
    <article className="flex flex-col gap-16 py-10">
      {state.error && <p className="text-red-500 font-bold my-10">{state.error}</p>}

      {/* Display titles on Quiz & Results Pages but not for last */}
      {state.currentQuestion < 10 && <h2 className="text-2xl font-black -mb-10 md:text-3xl lg:text-5xl">{state.quizOver ? "Omen" : "Rune"} {state.currentQuestion + 1}</h2>}

      {state.currentQuestion !== 10 &&
        <Code code={state.shuffledQuestions[state.currentQuestion].code} />
      }
      {state.currentQuestion !== 10 &&
        <MultipleChoice
          state={state}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
        />
      }
      {state.currentQuestion === 10 && <QuizOver state={state} />}
      <Button
        text={setButtonText()}
        onClick={handleClick}
      />
    </article>
  )
}

export default QuestionContainer;