import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  console.log(correctAnswers);

  return (
    <main className="min-h-screen md:w-5/6 lg:w-3/5 xl:ms-52 mx-auto flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage setCorrectAnswers={setCorrectAnswers} />} />
        <Route path="/results" element={<ResultsPage correctAnswers={correctAnswers} />} />
      </Routes>
    </main>
  )
}

export default App;
