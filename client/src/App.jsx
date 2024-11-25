import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { shuffleArray } from "./utils/utils";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const [quizOver, setQuizOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userChoices, setUserChoices] = useState(Array.from({ length: 10 }).fill(null));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          process.env.NODE_ENV === "production"
            ? "https://runic-code-server.onrender.com/api/questions"
            : "http://localhost:5000/api/questions"
        );
        const questions = response.data;
        setShuffledQuestions(shuffleArray(questions).slice(0, 10));
      } catch (error) {
        setError("Error fetching questions: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuestions();
  }, []);

return (
  <main className="min-h-screen mx-auto md:w-5/6 lg:w-4/5 md:mx-auto xl:mx-auto mx-4 flex flex-col justify-center items-center">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={
        <QuizPage
          quizOver={quizOver}
          setQuizOver={setQuizOver}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
          isLoading={isLoading}
          shuffledQuestions={shuffledQuestions}
          error={error}
        />} />
      <Route path="/results" element={
        <ResultsPage
          quizOver={quizOver}
          setQuizOver={setQuizOver}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
          shuffledQuestions={shuffledQuestions}
          error={error}
        />} />
    </Routes>
  </main>
)
}

export default App;
