import React from 'react'
import Quiz from '../components/Quiz'
import logo from '../assets/logo.png'

const QuizPage = () => {
  return (
    <>
    <div className='bg-quiz fixed w-full h-full'>
    <img src={logo} alt='' className=' w-40 mx-auto'/>
      <Quiz />
    </div>
    
    </>
  )
}

export default QuizPage