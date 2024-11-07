
import QuestionContainer from "../components/QuestionContainer";

const QuizPage = ({ setQuizOver, setCorrectAnswers, userChoices, setUserChoices, quizOver }) => {
  return (
    <article className="w-full h-full">
      <QuestionContainer setQuizOver={setQuizOver} setCorrectAnswers={setCorrectAnswers} userChoices={userChoices} setUserChoices={setUserChoices} quizOver={quizOver} />
    </article>
  )
}

export default QuizPage;