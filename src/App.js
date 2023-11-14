import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import QuizPage from './routes/QuizPage'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Quiz' element={<QuizPage />} />
    </Routes>
    </>
  );
}

export default App;
