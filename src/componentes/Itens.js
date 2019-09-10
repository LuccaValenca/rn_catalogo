import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Itens extends Component {

	constructor(props) {
	  super(props);
	  this.formataValor.bind(this);
	}

	formataValor(valor){
		valor = parseFloat(valor.toFixed(2));
		valor = 'R$ '+valor;
		valor = valor.replace(".", ",");
		return valor;
	}

  	render() {
		return (
			<View style={estilo.view}> 
				<Image style={{width: 150, height: 150}} source={{uri: this.props.item.foto}} />
				<Text style={estilo.txtTitulo}>{this.props.item.titulo}</Text>
				<Text style={estilo.txtValor}>{ this.formataValor(this.props.item.valor) }</Text>
				<View style={estilo.viewInfo}>
					<Text style={estilo.txtInfo}>Local: {this.props.item.local_anuncio}</Text>
					<Text style={estilo.txtInfo}>Data: {this.props.item.data_publicacao}</Text>
				</View>
			</View>
		);
  }
}

const estilo = {
	view: {
		width: 170,
		height: 300,
		borderRadius: 3,
		elevation: 2,
		alignItems: 'center',
		paddingTop: 10,
		marginBottom: 7,
	},
	viewInfo: {
		flex:1,
		flexDirection: 'column',
		marginTop: 10,
	},
	txtTitulo:{
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#2d323a',
	},
	txtValor: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#a80000',
	},
	txtInfo: {
		textAlign: 'center',
		fontSize: 14,
	}
}

export default Itens;
