import React from 'react';

import Jogador from './Jogador';
import Confronto from './Confronto';

export default class PainelAvaliacaoContainer extends React.Component
{
	constructor(){
		super();
		this.state = {
			pontos_jogadorum: 100,
			pontos_jogador2: 100,
		};
	}
	
	atribuirPontosJUm(){
		this.setState({
			pontos_jogadorum: this.state.pontos_jogadorum+1,
		});
	}

	atribuirPontosJ2(){
		this.setState({
			pontos_jogador2: this.state.pontos_jogador2+1,
		});
	}

	render(){
		return(
      <div>
        <div style={{float:'left'}}>
          <Jogador nome={this.props.jogador1.nome} 
            pontos={this.state.pontos_jogadorum}
            atribuirPontos = {this.atribuirPontosJUm.bind(this)}
          />
        </div>
        <div style={{float:'left'}}>
          <Confronto local={this.props.confronto.local}
            data={this.props.confronto.data}
            hora={this.props.confronto.hora}
          />
        </div>
        <div style={{float:'left'}}>
          <Jogador nome={this.props.jogador2.nome} 
            pontos={this.state.pontos_jogador2}
            atribuirPontos = {this.atribuirPontosJ2.bind(this)}
          />
        </div>
      </div>
		);
	}
}
