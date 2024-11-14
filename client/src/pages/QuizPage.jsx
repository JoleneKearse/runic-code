import { useEffect, useState } from "react";
import QuestionContainer from "../components/QuestionContainer";
import QuestionContainerSkelton from "../components/QuestionContainerSkelton";

const QuizPage = ({
  quizOver,
  setQuizOver,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("fetching questions...");
  },[isLoading]);

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
        />
      )}
    </article>
  )
}

export default QuizPage;