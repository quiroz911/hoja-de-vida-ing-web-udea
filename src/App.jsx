import 'styles/globals.css';
import BtnCertificado from 'shared/BtnCertificado';
import MainCard from 'shared/MainCard';

const App = () => {
  return (
    <div className='bg-spanish-gray p-3 h-screen'>
      <div className='bg-white rounded-lg h-full py-4 px-5'>
        <MainCard />
        <BtnCertificado />
      </div>
    </div>
  );
};

export default App;
