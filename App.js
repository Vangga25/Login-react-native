import React, { Component } from 'react';
import Judul from './Components/Judul';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
  <View style={styles.container} >
  <Judul/>
      <Image
      style={{width: 250, height: 250}}
      source={require('./img.jpg')}
      />
    <Text style={styles.welcome}>
     Vangga Fibo Eprila
    </Text>
    <Text style={styles.welcome}>
     XI RPL 1 
    </Text>
    <Text style={styles.welcome}>
     38
    </Text>
  </View>
	
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9a036',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
	color: '#403014',
    margin: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});