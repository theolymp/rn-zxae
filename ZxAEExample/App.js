/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DecoratedBarcodeView from './ZxAeDecoratedBarcodeView';

export default class App extends Component<{}> {
  barcodeView = null;

  componentDidMount() {
    this.barcodeView.startScan();
  }

  render() {
    return (
      <View style={styles.container}>
        <DecoratedBarcodeView ref={c => this.barcodeView = c}></DecoratedBarcodeView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});