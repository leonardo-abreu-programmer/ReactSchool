import React from 'react';
export default class Horario extends React.Component{
	render(){
		return (
				<div>
					<span>{this.props.data}</span>
					<span> às </span>
					<span>{this.props.hora}</span>
				</div>
		);
	}
}