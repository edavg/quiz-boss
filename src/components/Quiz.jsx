import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { PreguntasData } from '../data/PreguntasData';
import verdadero from '../assets/verdadero.png';
import verdaderook from '../assets/verdadero-ok.png';
import falso from '../assets/falso.png';
import falsook from '../assets/falso-ok.png';

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
      console.log('¡Has completado el quiz!');
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setIsCorrect(false);
    setScore(0);
    setShowConfetti(false);
  };

  return (
    <div>
      <h2>Pregunta {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].pregunta}</p>
      
      <div>
        <button onClick={() => handleAnswer('Verdadero')}>
          {showResult && isCorrect ? (
            <img src={verdaderook} alt="Verdadero Correcto" />
          ) : (
            <img src={verdadero} alt="Verdadero" />
          )}
        </button>
        <button onClick={() => handleAnswer('Falso')}>
          {showResult && !isCorrect ? (
            <img src={falsook} alt="Falso Incorrecto" />
          ) : (
            <img src={falso} alt="Falso" />
          )}
        </button>
      </div>

      {showResult && (
        <div>
          <p>{isCorrect ? questions[currentQuestion].correcta : questions[currentQuestion].incorrecta}</p>
          <p>Puntaje parcial: {score}</p>
          <button onClick={handleNextQuestion}>Siguiente</button>
        </div>
      )}

      {showConfetti && (
        <div>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
          />
          <p>Puntaje completo: {score}</p>
          <button onClick={handleRestartQuiz}>Reiniciar Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;