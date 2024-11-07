const MultipleChoice = ({ choices, setCorrectAnswers, correctAnswerIndex, userChoices, setUserChoices, quizOver, currentQuestion }) => {
  const handleQuestionClick = (index) => {
    if (index === correctAnswerIndex) {
      setCorrectAnswers((prev) => prev + 1);
    };
    setUserChoices((prev) => [...prev, index]);
  };
  const determineCorrectChoice = (index) => {
    if (!quizOver) return "bg-neutral-800";
    if (index === correctAnswerIndex) return "bg-accent-pink";
    if (userChoices[currentQuestion] === index && index !== correctAnswerIndex) return "bg-accent-red";
    return "bg-neutral-800";
  }
  return (
    <ol className="flex flex-col gap-6 text-left">
      {choices.map((choice, index) => (
        <li key={index}>
          <button
            className={`bg-neutral-800 text-neutral-100 py-2 px-4 rounded-lg ${determineCorrectChoice(index)}`}
            onClick={() => handleQuestionClick(index)}
          >
            {choice}
          </button>
        </li>
      ))}
    </ol>
  )
}

export default MultipleChoice