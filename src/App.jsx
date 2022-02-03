import 'styles/globals.css';
import MainCard from 'shared/MainCard';
import fotoHV from 'img/Foto-HV.jpg';
import MainCardNoBtn from 'shared/MainCardNoBtn';

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
    cursos: {
      titulo: 'Otros cursos',
      descripcion: `Operating Systems and You: Becoming a Power User – Google (Coursera).
      Chinese for Beginners – Universidad de Pekin (Coursera).
      Administración de sistemas empresarial Linux Redhat – Redhat (Sapiencia Medellín).
      Azure Fundamentals - AZ900`,
    },
    redes: {
      titulo: 'Redes sociales',
      descripcion: `Instagram: jpablo.quiroz - 
      Linkedin: Juan Pablo Quiroz Piedrahita - 
      Github: quiroz911`,
    },
  };
  return (
    <div className='bg-spanish-gray p-3 h-screen '>
      <div className='bg-white rounded-lg py-4 px-5 h-full overflow-auto'>
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
            <span className='text-center md:mr-3'>
              Calle 77sur # 43A-104 - Sabaneta, Antioquia, Colombia.
            </span>
          </div>
        </div>
        <hr className='m-4 bg-deep-taupe h-1 rounded-xl' />
        <div className='md:flex md:flex-col lg:flex-row'>
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
        <div className='md:flex md:flex-col lg:flex-row lg:mt-4 '>
          <div className='lg:basis-1/3'>
            <MainCard
              titulo={camposTarjetas.idiomas.titulo}
              descripcion={camposTarjetas.idiomas.descripcion}
            />
          </div>
          <div className='lg:basis-1/3'>
            <MainCard
              titulo={camposTarjetas.cursos.titulo}
              descripcion={camposTarjetas.cursos.descripcion}
            />
          </div>
          <div className='lg:basis-1/3'>
            <MainCardNoBtn
              titulo={camposTarjetas.redes.titulo}
              descripcion={camposTarjetas.redes.descripcion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
