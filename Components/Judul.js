import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component {
	render(){
		return(
			<Text style={stylee.judul}>BIODATA</Text>
			)
}

}
const stylee = {
	judul:{
		color:'#F2e750',
		fontSize: 45,
		fontWeight:'bold',
	}
}