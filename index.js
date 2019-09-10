import React, { Component } from 'react';
import { AppRegistry, Text, } from 'react-native';
import ListaItens from './src/componentes/ListaItens';

class App extends Component {

  	render() {
    	return (
      	<ListaItens />
    	);
  	}
}

AppRegistry.registerComponent('catalogo', () => App);
