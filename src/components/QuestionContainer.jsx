import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { shuffleArray } from "../utils/utils";
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
  const [shuffledQuestions, setShuffledQuestions] = useState([
    {
      code: "",
      choices: [],
      correctAnswerIndex: 0,
      attribution: "",
      attributionLink: "",
      furtherReading: "",
    },
  ]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/questions");
        const questions = response.data;
        setShuffledQuestions(shuffleArray(questions).slice(0, 10));
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Error fetching questions.");
      }
    };
    fetchQuestions();
  }, []);

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
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-2xl font-black md:text-3xl lg:text-5xl">{quizOver ? "Omen" : "Rune"} {currentQuestion + 1}</h2>
      {currentQuestion !== 10 &&
        <Code code={shuffledQuestions[currentQuestion].code} />
      }
      {currentQuestion !== 10 &&
        <MultipleChoice
          quizOver={quizOver}
          currentQuestion={currentQuestion}
          choices={shuffledQuestions[currentQuestion].choices}
          correctAnswerIndex={shuffledQuestions[currentQuestion].correctAnswerIndex}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
          attribution={shuffledQuestions[currentQuestion].attribution}
          attributionLink={shuffledQuestions[currentQuestion].attributionLink}
          furtherReading={shuffledQuestions[currentQuestion].furtherReading}
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