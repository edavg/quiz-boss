import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Hero() {
  return (
    <div className=" w-full h-full bg-principal bg-cover fixed bg-bottom ">
      <div className='mx-auto items-center w-full my-10'>
        <img src={logo} alt='' className=' w-40 mx-auto'/>
        <div className='w-[65%] mx-auto text-center text-white'>
            <h1 className='text-2xl md:text-5xl mt-6 font-bold'> ¿Cuánto sabés acerca del Reglamento <br/> General de Tránsito? </h1>
            <p className=' md:text-3xl my-6'>Poné a prueba tus conocimientos en este juego</p>
            <Link to={'/quiz'}><button className=' w-56 py-4 bg-red-600 rounded-lg font-bold text-2xl md:text-4xl hover:bg-red-400'>Comenzar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;