import React from 'react';
import Painel from './PainelAvaliacaoContainer';

const infoConstruct = {

  confronto: {
    local: "Porto",
    data: "12/06/2019",
    hora: "12:45m",
  },

  jogador1: {
    nome: "Sérgio",
  },

  jogador2:{
    nome: "Maria",
  }
  
};

export default class Aplicacao extends React.Component
{
	render(){
		return <Painel 
      confronto={infoConstruct.confronto} 
      jogador1={infoConstruct.jogador1} 
      jogador2={infoConstruct.jogador2} />;
	}
}
