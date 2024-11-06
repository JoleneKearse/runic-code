import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

const HomePage = () => {
  return (
    <main className="text-center mx-auto md:w-5/6 lg-3/5 xl:ms-52">
      <Title text="Runic Code" />
      <p className="max-w-prose py-10 text-lg font-semibold text-balance md:text-2xl lg:text-3xl">Where the art of coding meets the ancient practice of divining mysteries through runes. Uncover hidden logic and predict the outcomes of code like a true Viking seer.</p>
      <Button text="Begin" />
    </main>
  )
}

export default HomePage