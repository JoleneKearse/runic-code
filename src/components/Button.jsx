import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="py-4 px-8 bg-accent-blue rounded-xl text-neutral-300 text-2xl md:text-4xl font-bold hover:bg-accent-navy">{text}</button>
  )
}

export default Button