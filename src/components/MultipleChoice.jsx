const MultipleChoice = ({ choices, setCorrectAnswers, correctAnswerIndex }) => {
  const handleQuestionClick = (index) => {
    if (index === correctAnswerIndex) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };
  return (
    <ol className="flex flex-col gap-6 text-left">
      {choices.map((choice, index) => (
        <li key={index}>
          <button 
            className="bg-neutral-800 text-neutral-100 py-2 px-4 rounded-lg"
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