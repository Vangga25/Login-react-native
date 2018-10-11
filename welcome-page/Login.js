import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
    	<View style={styles.container}>
    	<Image 
    	style={{width:100,height:200}}
    	source={require('./Sariflogogradient.png')} />
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Username"
    	/>
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Password"
    	secureTextEntry={true}
    	/>
        
        <TouchableOpacity style={styles.button}>
    	<Text style={styles.buttonText}> LOGIN </Text>
    	</TouchableOpacity>

    	<TouchableOpacity>
    	<Text>Contact Administrator</Text>
    	</TouchableOpacity>

    	</View> 
    );
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#fff'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
		color: '#000000'
	},

	button:{
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#8c6723',
		marginVertical: 10,
		paddingHorizontal: 80
	},

	buttonText:{
		fontSize:13,
		color:'#f7f7f7'
	}
})