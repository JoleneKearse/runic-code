import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className="mb-10 py-4 px-8 bg-accent-blue rounded-xl text-neutral-300 text-2xl md:text-4xl font-bold hover:bg-accent-navy" onClick={onClick}>{text}</button>
  )
}

export default Button