const QuizOver = ({ state }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-16 pt-20">
      <p className="text-2xl font-bold text-neutral-900 text-balance text-center">
        You battled mightily, warrior! Odin's ravens, Huginn and Muninn, are ready to deliver your results.
      </p>
      <img src="/viking-ship.webp" alt="Viking ship." className="w-40 animate-bounce" />
        
    </article>
  )
}

export default QuizOver