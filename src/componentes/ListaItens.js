import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Itens from './Itens';
import Axios from 'axios';

class ListaItens extends Component {
constructor(props) {
  super(props);

  this.state = { listaItens: [] };
}

	componentWillMount() {
		Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then(response => { this.setState({ listaItens: response.data }); })
			.catch(() => { console.log('Erro ao recuperar os dados'); });	
	}

  	render() {
   	return (
	 		<ScrollView contentContainerStyle={estilo.estiloView}>
	      	{this.state.listaItens.map( item => ( <Itens key={item.titulo} item={item} /> ))}
	    	</ScrollView>
    	);
  	}
}

const estilo = {
	estiloView: {
		flexGrow: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5
	}
}

export default ListaItens;
