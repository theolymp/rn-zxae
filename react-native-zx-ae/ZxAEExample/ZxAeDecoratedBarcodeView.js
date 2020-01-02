// @flow
import React from 'react';
import { requireNativeComponent, UIManager, findNodeHandle, View } from 'react-native';

const ZxAeDecoratedBarcodeView = requireNativeComponent('ZxAeDecoratedBarcodeView', DecoratedBarcodeView, {});

class DecoratedBarcodeView extends React.PureComponent<{}>{


  _scannerRef = null;
  _scanEnabled = null;

  _onBarcodeScanned = (event) => {
    let { content, type, points } = event.nativeEvent;
    
    if(this._scanEnabled === true){

      console.log(JSON.stringify({content, type, points}));
    }
  };

  componentWillUnmount(){
    this.stopScan();
  }

  startScan() {
    this._scanEnabled = true;
    UIManager.dispatchViewManagerCommand(findNodeHandle(this._scannerRef), 'startScan', []);
    console.log('startScan');
  }

  stopScan() {
    this._scanEnabled = false;
    UIManager.dispatchViewManagerCommand(findNodeHandle(this._scannerRef), 'stopScan', []);
    console.log('stopScan');
  }

  render() {
    return <ZxAeDecoratedBarcodeView 
        {...this.props} 
        ref={c => this._scannerRef = c}
        onBarcodeScanned={this._onBarcodeScanned}
        scanThresholdMillis={2000}

        style={{height: 150, alignSelf: 'stretch', }} />;
  }
}

export default DecoratedBarcodeView;