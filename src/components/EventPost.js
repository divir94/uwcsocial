import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';
import RNGooglePlaces from 'react-native-google-places';
var t = require('tcomb-form-native');

import MyImagePicker from './shared/ImagePicker';


var Form = t.form.Form;

var Person = t.struct({
  name: t.String,
  description: t.maybe(t.String),
  location: t.String,
  date: t.Date
});

let getLocation = function() {
  console.log('hey');
};

function myCustomTemplate(locals) {
  return (
    <View>
      <Text>{locals.label}</Text>
      <TextInput onChangeText={getLocation}/>
    </View>
  );
}

var options = {
  fields: {
    // name: {
    //   template: myCustomTemplate
    // },
    description: {
      multiline: true,
      numberOfLines: 5
    }
  }
};

class EventPost extends Component {

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
  		    console.log(place);
      })
      .catch(error => console.log(error.message));
  }

  onPress() {
    var value = this.refs.form.getValue();
    console.log(value);
  }

  render() {
    return (
    <View>
      <MyImagePicker/>
      <Form
          ref="form"
          type={Person}
          options={options}
        />
      <Button onPress={this.onPress.bind(this)}>
        <Text>Save</Text>
      </Button>
    </View>
    );
  }
}

export default EventPost;
