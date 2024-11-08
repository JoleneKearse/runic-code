
import QuestionContainer from "../components/QuestionContainer";

const QuizPage = ({
  quizOver,
  setQuizOver,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
}) => {
  return (
    <article className="w-full h-full">
      <QuestionContainer
        quizOver={quizOver}
        setQuizOver={setQuizOver}
        setCorrectAnswers={setCorrectAnswers}
        userChoices={userChoices}
        setUserChoices={setUserChoices}
      />
    </article>
  )
}

export default QuizPage;