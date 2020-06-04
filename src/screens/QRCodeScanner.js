// Aboutscreen.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Video } from 'expo-av';


export default class QRCodeScanner extends Component {
  // set the state
  state = {
    hasCameraPermission: null,
    scanned: false,
    QRvalue: '',

    //Import Videos from assets (Order is Important !!)
    video: [
      require('../../assets/videos/roetteln_1500_final.mp4'),
      require('../../assets/videos/roetteln_final.mp4'),
      require('../../assets/videos/blide_final.mp4'),
      require('../../assets/videos/bombarde_final.mp4'),
      require('../../assets/videos/rammbock_final.mp4'),
      require('../../assets/videos/riesenbombarde_final.mp4'),
      require('../../assets/videos/RoettelnHeli.mp4'),
      require('../../assets/videos/schutzwand_final.mp4'),
      require('../../assets/videos/kueche_final.mp4'),
      require('../../assets/videos/saal_final.mp4'),
      require('../../assets/videos/torturm_final.mp4'),
    ]
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }
//check for the Camera Permissions
  getPermissionsAsync = async () => {
    const {
      status
    } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };

  render() {
    const {
      hasCameraPermission,
      scanned,
      QRvalue,
    } = this.state;

    if (hasCameraPermission === null) {
      return <Text> Requesting
      for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return
      <Text> No access to camera </Text>;
    }
    return (
      <View style={styles.container} >
        {/* get the BarcodeScanner Component from expo */}
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={
            StyleSheet.absoluteFillObject
          }
        />

        {/*play the video when BarCode is scanned and has a QRvalue */}
        {scanned && QRvalue != "" ? (
          < Video
          // select the right video for the Scanned QR Code
            source={this.state.video[QRvalue - 1]}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.backgroundVideo}
          />
        ) : null}
      </View>
    );
  }
// handle Barcode scan and set the scanned value in the state 
  handleBarCodeScanned = ({
    type,
    data
  }) => {
    this.setState({
      scanned: true,
      QRvalue: data
    });

  };
}

//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    top: 410
  },
  heading: {
    color: 'black',
    fontSize: 24,
    alignSelf: 'center',
    padding: 10,
    marginTop: 30
  },
  simpleText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10,
    marginTop: 16
  },
  stretch: {
    width: "80%",
    height: "80%",
    resizeMode: 'stretch',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginBottom: 0
  }
});
