import React from 'react';

export const BtnCertificado = () => {
  const linkCertificados = () => {
    window.location.href =
      'https://drive.google.com/drive/folders/1Nj5SaQk7KmWgYj-tTCatVTRWmdeSCpcK?usp=sharing';
  };
  return (
    <button
      className='bg-onyx rounded-lg p-2 px-7'
      type='button'
      onClick={linkCertificados}
    >
      <p className='txt-cultured txt-cursiva'>Certificados</p>
    </button>
  );
};

export default BtnCertificado;
