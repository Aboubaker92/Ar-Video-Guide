// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home';
import QRCodeScanner from './src/screens/QRCodeScanner';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//Navigaton Stack for the avalible screens
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  QRCodeScanner: {
    screen: QRCodeScanner
  },
  initialRouteName: "Home"
});

//Navigaton AppContainer
const AppContainer = createAppContainer(AppNavigator);

//StyleSheetApp.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});