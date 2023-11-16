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
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { TbWorldSearch } from "react-icons/tb";
import totalpuntos from '../assets/toralpuntos.png'
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";


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
      <p className='text-xl sm:text-2xl md:text-3xl mt-6 md:mt-0 p-4'>{questions[currentQuestion].pregunta}</p>
      <div className=' absolute left-3 flex -bottom-10 sm:-bottom-20'>
        <button onClick={() => handleAnswer('Falso')} className='hover:scale-105 duration-300'><img src={falso} alt=''/></button>
        <button onClick={() => handleAnswer('Verdadero')} className='hover:scale-105 duration-300'><img src={verdadero} alt=''/></button>
      </div>
      </>)}
      
      {showResult &&
        <div className=' text-center text-lg md:text-2xl mx-auto w-[100%] mt-2'>
            {isCorrect ?  <div className=' w-full mx-auto'><ConfettiExplosion width={2000} /><audio src={yay} autoPlay /><img src={verdaderook} alt="" className=' w-56 md:w-72 mx-auto' /></div> : <div><audio src={audio} autoPlay /><img src={falsook} alt="" className='w-56 md:w-72 mx-auto'/></div>}
          <p>{isCorrect ? questions[currentQuestion].correcta : questions[currentQuestion].incorrecta}</p>
          
          <button 
          className='mt-4 md:mt-10 w-52 md:w-72 hover:scale-105 duration-300 '
          onClick={handleNextQuestion}><img src={siguiente} alt='' /></button>
        </div>
        }
    </div>}
    {showConfetti && (
        <div className=' w-[90%] text-white font-bold mx-auto text-center text-base md:text-2xl'>
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
          <div className='mx-auto relative w-80'>
            <img src={totalpuntos} alt="" className='w-52 md:w-72 mx-auto' />
            <p className='absolute top-6 md:top-9 left-0 right-0 bottom-0 text-white text-center'>
              Total de puntos: <span className='text-yellow-400'>{score}</span>
              </p>
          </div>
          <p className='pb-4 font-thin'>¡Por un tránsito más seguro para todos!</p>
          <button onClick={handleRestartQuiz} className='  bg-transparent border-[1px] rounded-lg p-2 md:text-xl hover:bg-sky-500'>Reiniciar juego</button>
          <div className='grid grid-cols-2 mt-5 md:mt-8 text-base md:text-lg md:text-left mx-auto w-full lg:w-[65%]'>
            {/* Primera columna */}
            <div className='col-span-1'>
              <div className='flex flex-col md:flex-row items-center'>
                <p className='pb-2 font-thin'>Seguinos para más recomendaciones: </p>
                <div className='flex'>
                  <a href='https://www.facebook.com/seguridadseguros'><FaFacebook size={25} className='lg:ml-2 mr-1 rounded-full' /></a>
                  <a href="https://www.instagram.com/seguridadsegurospy/"><IoLogoInstagram size={25} className='bg-white text-sky-950 rounded-full mr-1' /> </a>
                  <a href="https://www.linkedin.com/company/seguridad-seguros/"><TiSocialLinkedin size={25} className='bg-white text-sky-950 rounded-full mr-1' /></a>
                </div>
                </div>
                <p className='pb-4 pt-2 font-thin'>@seguridadsegurospy </p>
                </div>
            {/* Segunda columna */}
            <div className='col-span-1 lg:ml-20 xl:ml-24 pt-2 m:pt-0'>
              <div className='flex items-center flex-col md:flex-row font-normal md:font-bold'>
                <FaWhatsapp size={25} className='mr-2 bg-white text-sky-950 rounded-full' />
                <p className='pb-2'> +595 21 249 1000 </p>
              </div>
              <div className='flex flex-col md:flex-row items-center font-normal md:font-bold'>
                <TbWorldSearch size={25} className='mr-2 rounded-full'/>
                <p className='text-sm md:text-lg'>www.seguridadseguros.com.py</p>
              </div>
              </div>
              </div>
        </div>
      )}
      <div className='absolute bottom-5 right-5 md:right-1/4 text-white font-bold'>
        <h1 className='text-2xl lg:text-3xl'>{ !showConfetti && `${currentQuestion+1} / ${questions.length}`}</h1>
      </div>
    </>
  );
};

export default Quiz;