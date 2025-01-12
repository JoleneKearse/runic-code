import { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import fetchQuestions from "./services/fetchQuestions";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

const initialState = {
  quizOver: false,
  correctAnswers: 0,
  userChoices: Array.from({ length: 10 }).fill(null),
  isLoading: true,
  error: null,
  currentQuestion: 0,
  shuffledQuestions: [
    {
      code: "",
      choices: [],
      correctAnswerIndex: 0,
      attribution: "",
      attributionLink: "",
      furtherReading: "",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUIZ_OVER":
      return {
        ...state, quizOver: action.payload,
      };
    case "SET_CORRECT_ANSWERS":
      return {
        ...state, correctAnswers: action.payload,
      };
    case "SET_USER_CHOICES":
      return {
        ...state, userChoices: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state, isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state, error: action.payload,
      };
    case "SET_SHUFFLED_QUESTIONS":
      return {
        ...state, shuffledQuestions: action.payload,
      };
    case "SET_CURRENT_QUESTION":
      return {
        ...state, currentQuestion: action.payload,
      };
    default:
      return state;
  };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchAndDispatchQuestions = async () => {
      try {
        const questions = await fetchQuestions();
        dispatch({ type: "SET_SHUFFLED_QUESTIONS", payload: questions });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "Error fetching questions: " + error.message });
      } finally {
        dispatch({ type: "SET_IS_LOADING", payload: false });
      }
    };
    fetchAndDispatchQuestions();
  }, []);

  useEffect(() => {
    localStorage.setItem("correctAnswers", JSON.stringify(state.correctAnswers));
  }, [state.correctAnswers]);

  return (
    <main className="min-h-screen mx-auto md:w-5/6 lg:w-4/5 md:mx-auto xl:mx-auto mx-4 flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={
          <QuizPage
            state={state}
            dispatch={dispatch}
          />} />
        <Route
          path="/results"
          element={<ResultsPage state={state} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  )
}

export default App;
