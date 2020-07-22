import React from 'react';

const perfil = {
    nombre:'Kevin',
    info:{
      direccion:'la direccion'
    }
  };
  
  const region = {
    pais: 'Mexico',
    info:{
      coordenadas: 'coordenadas'
    }
  };
  
  const social = {
    twitter: '@PKevinBS',
    nombre: 'kevin Bayona'
  };
  
  const resultAssign = Object.assign({}, 
    perfil, 
    region, 
    social,
    {
      info:
        Object.assign({}, perfil.info, region.info)
    }
    );
  
  console.log(resultAssign);
  
  const resultSpread = {
    ...region,
    ...perfil,
    ...social,
    info:{
      ...perfil.info,
      ...region.info}
  };
  console.log(resultSpread);
  
  const frutasv =[
    'kiwi',
    'uva',
    'limon'
  ];
  
  const frutasr = [
    'manzana',
    'fresa',
    'sandia'
  ]
  frutasv.push('pera')
  
  const frutas= frutasv.concat(frutasr);
  console.log(frutas);
  
  const frutasSpread =[
    1,2,
    ...frutasv,
    ...frutasr,
    'guayaba'
  ]
  
  console.log(frutasSpread)