import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';


class MyImagePicker extends Component {
  uploadImage() {
    ImagePicker.showImagePicker(null, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log(source);
      }
    });
  }

  render() {
    return (
      <Button block info onPress={this.uploadImage}>
        <Text>Upload a picture</Text>
      </Button>
    );
  }
}

export default MyImagePicker;
