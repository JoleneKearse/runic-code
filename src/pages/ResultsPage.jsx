import React from 'react'
import QuestionContainer from '../components/QuestionContainer'

const ResultsPage = ({ correctAnswers, userChoices, quizOver}) => {
  return (
    <article>
      <p className="text-3xl font-black md:text-4xl lg:text-5xl">You got {correctAnswers} answer{correctAnswers !== 1 ? "s" : ""} correct!</p>
      <QuestionContainer correctAnswers={correctAnswers} userChoices={userChoices} quizOver={quizOver} />
    </article>
  )
}

export default ResultsPage