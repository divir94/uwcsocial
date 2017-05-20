import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
//import ImagePicker from 'react-native-image-crop-picker';


class EventPost extends Component {
  // openImagePicker() {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //   });
  // }

  render() {
    return (
    <View>
      <Button block info>
        <Text>Upload event picture</Text>
      </Button>
    </View>
    );
  }
}

let styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default EventPost;
