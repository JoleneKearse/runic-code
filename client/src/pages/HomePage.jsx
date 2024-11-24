import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import Button from '../components/Button'

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/quiz');
  };
  return (
    <article className="text-center">
      <Title text="Runic Code" />
      <p className="max-w-prose py-10 text-lg font-semibold text-balance md:text-2xl lg:text-3xl">Where the art of coding meets the ancient practice of divining mysteries through runes. Uncover hidden logic and predict the outcomes of code like a true Viking seer.</p>
      <p className="max-w-prose mb-12 py-6 rounded-lg bg-neutral-alpha-900 text-neutral-200 text-balance md:text-2xl lg:text-3xl">Read a code snippet & pick the multiple choice question that best explains it's purpose.</p>
      <Button text="Commence" onClick={handleClick} />
      <p className="fixed bottom-2 w-full">All code snippets taken from <a href="http://" target="_blank" rel="noopener noreferrer">Codewars</a></p>
    </article>
  )
}

export default HomePage;