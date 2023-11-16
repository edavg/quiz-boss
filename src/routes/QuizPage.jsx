import React from 'react'
import Quiz from '../components/Quiz'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const QuizPage = () => {
  return (
    <>
    <div className='bg-quiz fixed w-full h-full'>
    <Link to='/'><img src={logo} alt='' className='mt-4 mb-2 md:my-6 w-28 md:w-40 mx-auto'/></Link>
      <Quiz />
    </div>
    
    </>
  )
}

export default QuizPage