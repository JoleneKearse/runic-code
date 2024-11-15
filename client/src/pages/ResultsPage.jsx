import QuestionContainer from "../components/QuestionContainer";

const ResultsPage = ({
  correctAnswers,
  setCorrectAnswers,
  userChoices,
  setUserChoices,
  quizOver,
  setQuizOver,
  shuffledQuestions,
  error,
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
    <>
      {!quizOver ? (
        <div className="font-black text-xl lg:text-2xl flex flex-col gap-6 text-center items-center">
          <p>Scoundrel! You shirk at divining the runes?</p>
          <p>You must complete them before entering Vallhalla!</p>
          <img src="/viking-ship.png" alt="viking ship" className="w-32" />
          <a href="/quiz" className="text-accent-red text-4xl">Go to challenge</a>
        </div>
      ) : (
        <article className="h-screen min-w-[319px] w-9/12 w-[500px] max-w-[720px] mx-auto px-2">
          <div className="mt-6 py-2 px-4 bg-accent-pink rounded-lg">
            <p className="text-neutral-900 text-3xl font-black md:text-4xl lg:text-5xl">
              You slayed {correctAnswers + 1} answer{correctAnswers !== 1 ? "s" : ""}!
            </p>
            <p className="mt-4 text-neutral-100 text-xl font-black text-balance md:text-2xl lg:text-3xl">
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
            shuffledQuestions={shuffledQuestions}
            error={error}
          />
        </article>
      )}
    </>
  )
}

export default ResultsPage;