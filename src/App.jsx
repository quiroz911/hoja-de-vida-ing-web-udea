import 'styles/globals.css';
import MainCard from 'shared/MainCard';
import fotoHV from 'img/Foto-HV.jpg';

const App = () => {
  const camposTarjetas = {
    experiencia: {
      titulo: 'Experiencia',
      descripcion: `Actual desarrollador Fullstack con énfasis en el desarrollo de Web Apis con .Net ASP.NET y diseño de interfaces con Angular para Sophos Solutions desde junio 2021. Estudiante del octavo semestre del pregrado de Ingeniería de Sistemas de la Universidad de Antioquia. Actual miembro del Semillero de Investigación en Machine Learning de esta misma universidad.
      Media técnica en Desarrollo de Software y mantenimiento de equipos realizada en el I.S. Pedro Justo Berrío.`,
    },
    habilidades: {
      titulo: 'Habilidades',
      descripcion: `Principios y calidad de programación enfocada al paradigma POO.
      Programación en lenguajes: Java, C, C#, Python, Javascript.
      Metodología ágil SCRUM.
      Manejo tecnología Cloud Azure.
      Manejo de frameworks: JavaFX, .Net core, .Net Framework, Angular.`,
    },
    idiomas: {
      titulo: 'idiomas',
      descripcion: `Manejo y buenas habilidades comunicativas en los idiomas inglés y portugués, con un dominio de 80 % y 100 % respectivamente.`,
    },
  };
  return (
    <div className='bg-spanish-gray p-3 h-screen '>
      <div className='bg-white rounded-lg py-4 px-5 overflow-auto'>
        <div className='grid m-3 justify-items-center md:grid-cols-2'>
          <div>
            <img
              src={fotoHV}
              alt='Foto HV'
              className='rounded-full rota-horizontal w-56 justify-self-center'
            />
          </div>
          <div className='mt-4 grid txt-subtitulo'>
            <span className='text-center txt-titulo-principal'>
              Juan Pablo Quiroz Piedrahita
            </span>
            <span className='text-center '>jpablo.quirozp@protonmail.com</span>
            <span className='text-center '>CC. 1234991656</span>
            <span className='text-center '>22 años</span>
            <span className='text-center hidden md:contents md:mr-3'>
              Calle 77sur # 43A-104
            </span>
            <span className='text-center hidden md:contents'>
              - Sabaneta, Antioquia, Colombia.
            </span>
          </div>
        </div>
        <hr className='m-4 bg-deep-taupe h-1 rounded-xl' />
        <div className='lg:flex lg:flex-row'>
          <div className='lg:basis-2/3'>
            <MainCard
              titulo={camposTarjetas.experiencia.titulo}
              descripcion={camposTarjetas.experiencia.descripcion}
            />
          </div>
          <div className='lg:basis-1/3'>
            <MainCard
              titulo={camposTarjetas.habilidades.titulo}
              descripcion={camposTarjetas.habilidades.descripcion}
            />
          </div>
        </div>
        <div className='lg:flex lg:flex-row lg:mt-4'>
          <div className='lg:basis-1/3'>
            <MainCard
              titulo={camposTarjetas.experiencia.titulo}
              descripcion={camposTarjetas.experiencia.descripcion}
            />
          </div>
          <div className='lg:basis-1/3'>
            <MainCard
              titulo={camposTarjetas.habilidades.titulo}
              descripcion={camposTarjetas.habilidades.descripcion}
            />
          </div>
          <div className='lg:basis-1/3'>
            <MainCard
              titulo={camposTarjetas.habilidades.titulo}
              descripcion={camposTarjetas.habilidades.descripcion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
