import React from 'react'
import QuestionContainer from '../components/QuestionContainer'

const ResultsPage = ({
  correctAnswers,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
  quizOver,
  setQuizOver
}) => {
  return (
    <article>
      <p className="text-3xl font-black md:text-4xl lg:text-5xl">
        You got {correctAnswers} answer{correctAnswers !== 1 ? "s" : ""} correct!
      </p>
      <QuestionContainer
        quizOver={quizOver}
        setQuizOver={setQuizOver}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
        userChoices={userChoices}
        setUserChoices={setUserChoices}
      />
    </article>
  )
}

export default ResultsPage;