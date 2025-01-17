import React from 'react';
import BtnCertificado from 'shared/BtnCertificado';

const MainCard = ({ titulo, descripcion, enlace }) => (
  <div className='bg-cultured sombra-card rounded-xl grid grid-col align-middle m-3 h-full'>
    <span className='txt-titulo-secundario text-center mt-2'>{titulo}</span>
    <p className='p-6 text-center txt-principal'>{descripcion}</p>
    <div className='text-center p-4 '>
      <BtnCertificado enlace={enlace} />
    </div>
  </div>
);

export default MainCard;
