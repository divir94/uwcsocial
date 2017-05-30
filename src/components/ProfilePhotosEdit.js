import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, Segment } from 'native-base';

import NavigationBar from 'react-native-navbar';

import SegmentedTab from './shared/SegmentedTab';


class ProfilePhotosEdit extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    this.props.navigator.popToTop()
  }

  render() {
    return (
    <View>
      <Text>Hello</Text>
    </View>
    );
  }
}


export default ProfilePhotosEdit;
