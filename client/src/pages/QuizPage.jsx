import QuestionContainer from "../components/QuestionContainer";
import QuestionContainerSkeleton from "../components/QuestionContainerSkeleton";

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
    <article className="h-screen min-w-[319px] mx-auto px-2">
      {isLoading ? (
        <QuestionContainerSkeleton />
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