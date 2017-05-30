import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, Segment } from 'native-base';

import ProfileEdit from '../ProfileEdit';
import ProfilePhotosEdit from '../ProfilePhotosEdit';


class SegmentTab extends Component {

	onPress(component) {
		this.props.navigator.push({
      component,
      passProps: {
        navigator: this.props.navigator
      }
    });
	}

  render() {
    return (
      <Segment>
          <Button first active onPress={() => this.onPress(ProfileEdit)}>
          	<Text>Details</Text>
          </Button>
          <Button last onPress={() => this.onPress(ProfilePhotosEdit)}>
          	<Text>Photos</Text>
          </Button>
      </Segment>
    );
  }
}

export default SegmentTab;