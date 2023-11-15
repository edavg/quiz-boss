import React, { useState } from 'react';
import { PreguntasData } from '../data/PreguntasData';
import verdadero from '../assets/verdadero.png';
import verdaderook from '../assets/verdadero-ok.png';
import falso from '../assets/falso.png';
import falsook from '../assets/falso-ok.png';
import ConfettiExplosion from 'react-confetti-explosion';
import audio from '../assets/crowd.mp3'
import siguiente from '../assets/siguiente.png'
import yay from '../assets/yay.mp3'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { questions } = PreguntasData;

  const handleAnswer = (answer) => {
    const isCorrectAnswer = answer === questions[currentQuestion].respuestaCorrecta;
    setIsCorrect(isCorrectAnswer);

    if (isCorrectAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setShowConfetti(true);
    }
  };

  const handleRestartQuiz = () => {
    window.location.reload()
  };
 

  return (
    <>
    {!showConfetti && <div className={`relative w-[80%] lg:w-[35%] top-0 h-64 text-white font-bold rounded-3xl mx-auto text-center ${!showResult ? 'border-2' : ''}`}>
      {!showResult && (<>
      <p className='text-2xl md:text-3xl mt-8 md:mt-4 p-4'>{questions[currentQuestion].pregunta}</p>
      <div className=' absolute left-[5%] flex -bottom-20'>
        <button onClick={() => handleAnswer('Falso')} className='hover:scale-105 duration-300'><img src={falso} alt=''/></button>
        <button onClick={() => handleAnswer('Verdadero')} className='hover:scale-105 duration-300'><img src={verdadero} alt=''/></button>
      </div>
      </>)}
      
      {showResult &&
        <div className=' text-center text-xl md:text-2xl mx-auto w-[100%] mt-6'>
            {isCorrect ?  <div className=' w-full mx-auto'><ConfettiExplosion width={2000} /><audio src={yay} autoPlay /><img src={verdaderook} alt="" className='w-72 mx-auto' /></div> : <div><audio src={audio} autoPlay /><img src={falsook} alt="" className='w-72 mx-auto'/></div>}
          <p>{isCorrect ? questions[currentQuestion].correcta : questions[currentQuestion].incorrecta}</p>
          
          <button 
          className=' mt-10  w-52 md:w-72 hover:scale-105 duration-300 '
          onClick={handleNextQuestion}><img src={siguiente} alt='' /></button>
        </div>
        }
    </div>}
    {showConfetti && (
        <div className=' w-full text-white font-bold mx-auto text-center text-2xl'>
          <div className='w-[30%] lg:w-[10%] mx-auto'>
          <ConfettiExplosion 
          force={8} 
          duration={3000} 
          particleSize={12}
          particleCount={250}
          width={2000}
          />
          </div>
          <p>¡Gracias por participar del juego!</p>
          <p className=''>Tu total de puntos fue: {score}</p>
          <p className='py-5'>¡Por un tránsito más seguro para todos!</p>
          <p>Seguinos para más recomendaciones: </p>
          <a href='https://www.facebook.com/seguridadseguros'><FaFacebook size={40} className='mx-auto inline-block' /></a> <a href="https://www.instagram.com/seguridadsegurospy/"><FaInstagram size={40} className='mx-auto inline-block' /> </a> <a href="https://www.linkedin.com/company/seguridad-seguros/"><FaLinkedin size={40} className='mx-auto inline-block' /></a>
          <p className='pb-5 pt-2'>@seguridadsegurospy </p>
          <p className=' mx-auto text-center w-full'><FaWhatsapp size={30} className='inline-block mx-auto' /> +595 21 249 1000 </p>
          <p>www.seguridadsegurospy.com.py</p>
          
          <button onClick={handleRestartQuiz} className='  bg-sky-600 rounded-xl p-2 mt-10 hover:bg-sky-500'>Reiniciar</button>
        </div>
      )}
      <div className='absolute bottom-5 right-5 md:right-1/4 text-white font-bold'>
        <h1 className='text-2xl lg:text-3xl'>{currentQuestion+1} / 12 </h1>
      </div>
      <div className='absolute bottom-5 md:bottom-0 md:top-5 left-5 lg:right-1/4 text-white font-bold'>
      <p className='text-2xl'>{!showConfetti && `Puntaje: ${score}`}</p>
      </div>
    </>
  );
};

export default Quiz;