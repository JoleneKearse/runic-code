import QuestionContainer from "../components/QuestionContainer";
import QuestionContainerSkeleton from "../components/QuestionContainerSkeleton";

const QuizPage = ({
  state,
  dispatch,
}) => {
  return (
    <article className="h-screen min-w-[319px] w-9/12 max-w-[720px] mx-auto px-2">
      {state.isLoading ? (
        <QuestionContainerSkeleton />
      ) : (
        <QuestionContainer
          state={state}
          dispatch={dispatch}
        />
      )}
    </article>
  )
}

export default QuizPage;