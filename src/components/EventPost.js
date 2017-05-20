import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
//import ImagePicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';


class EventPost extends Component {
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
    <View>
      <Button block info onPress={this.uploadImage}>
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
