const QuestionContainerSkeleton = () => {
  return (
    <article className="flex flex-col gap-16 py-10 animate-pulse">
      <div className="h-4 bg-neutral-800 rounded-lg w-1/4 mt-2"></div>
      <div className="h-10 bg-neutral-800 rounded-lg w-full mt-2"></div>
      <div className="h-20 bg-neutral-800 rounded-lg w-full mt-2"></div>
      <div className="h-40 bg-neutral-800 rounded-lg w-full mt-2"></div>
      <div className="h-10 bg-neutral-800 rounded-lg w-1/4 mt-2"></div>
    </article>
  )
}

export default QuestionContainerSkeleton