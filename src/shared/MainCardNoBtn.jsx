import React from 'react';

const MainCardNoBtn = ({ titulo, descripcion }) => (
  <div className='bg-cultured sombra-card rounded-xl grid grid-col align-middle m-3 h-full'>
    <span className='txt-titulo-secundario text-center mt-2'>{titulo}</span>
    <p className='p-6 text-center txt-principal'>{descripcion}</p>
  </div>
);

export default MainCardNoBtn;
