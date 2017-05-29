import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';

import _Carousel from 'react-native-looped-carousel';


const { width, height } = Dimensions.get('window');

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height: 200 },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <_Carousel
          style={this.state.size}
          pageInfo
          autoplay={false}
        >
          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
        </_Carousel>
      </View>
    );
  }
}

export default Carousel;