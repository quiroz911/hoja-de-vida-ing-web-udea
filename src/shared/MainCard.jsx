import React from 'react';
import BtnCertificado from 'shared/BtnCertificado';

const MainCard = () => {
  return (
    <div className='bg-silver rounded-xl flex flex-col'>
      <span className='txt-titulo-secundario text-center'>Aspecto 1</span>
      <p className='p-6 text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde
        ut quo fugit molestiae quam, magni nihil. Alias vero officiis
        laboriosam. Unde ex officiis mollitia repudiandae debitis minus
        temporibus sapiente.
      </p>
      <div className='text-center p-4 '>
        <BtnCertificado />
      </div>
    </div>
  );
};

export default MainCard;
