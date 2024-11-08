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
  const congratulationsMessages = [
    "You know way more JavaScript than us Vikings ever dreamed of!",
    "Your skills are as sharp as a Viking’s axe — keep honing them!",
    "You’ve conquered this quiz like a true warrior of code!",
    "Your mastery of JavaScript rivals the wisdom of the Allfather himself!",
    "You're building a saga of knowledge—future coders will sing of your triumphs!",
    "Your code is battle-tested and worthy of Valhalla!",
    "You’ve earned your place at the round table of coding legends. Polish that résumé!",
    "The gods of tech smile upon you — your next adventure awaits!",
    "You're a fearless coder! Ready your ship for new challenges.",
    "FAANG companies are calling you right now—answer the horn and claim your glory!",
  ];

  return (
    <article>
      <div className="mt-6 py-2 px-4 bg-accent-pink">
        <p className="text-neutral-900 text-3xl font-black md:text-4xl lg:text-5xl">
          You slayed {correctAnswers} answer{correctAnswers !== 1 ? "s" : ""}!
        </p>
        <p className="text-neutral-100 text-xl font-black md:text-2xl lg:text-3xl">
          {congratulationsMessages[correctAnswers]}
        </p>
      </div>
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