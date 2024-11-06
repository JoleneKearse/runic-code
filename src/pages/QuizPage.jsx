
import QuestionContainer from "../components/QuestionContainer";

const QuizPage = ({ setCorrectAnswers }) => {
  return (
    <article className="w-full h-full">
      <QuestionContainer setCorrectAnswers={setCorrectAnswers}  />
    </article>
  )
}

export default QuizPage