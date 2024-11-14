import QuestionContainer from "../components/QuestionContainer";
import QuestionContainerSkelton from "../components/QuestionContainerSkelton";

const QuizPage = ({
  quizOver,
  setQuizOver,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
  isLoading,
  setIsLoading,
  shuffledQuestions,
  error,
}) => {

  return (
    <article className="w-full h-full">
      {isLoading ? (
        <QuestionContainerSkelton />
      ) : (
        <QuestionContainer
          quizOver={quizOver}
          setQuizOver={setQuizOver}
          setCorrectAnswers={setCorrectAnswers}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          shuffledQuestions={shuffledQuestions}
          error={error}
        />
      )}
    </article>
  )
}

export default QuizPage;