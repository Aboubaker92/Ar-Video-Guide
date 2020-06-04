// Homescreen.js
import React, { Component } from 'react';
import {  View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';



export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../../assets/images/ImageBackground.jpg')} style={styles.image}>
          {/* Navigate to QRScreen when you click on this Button */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('QRCodeScanner')}>
            <View style={styles.button}>
              <Text style={styles.text}>Scan the QR Code</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>

      </View>
    )
  }
}


//StyleSheetQRCodeScanner.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginBottom: 0
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    top: 410

  }

});
