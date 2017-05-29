import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';

import RNGooglePlaces from 'react-native-google-places';
import t from 'tcomb-form-native';

import ImagePicker from './shared/ImagePicker';


let Form = t.form.Form;

function locationTemplate(locals) {
  let getAddress = function() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        console.log(place);
        locals.onChange(place.address)
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <View>
      <Text>{locals.label}</Text>
      <TextInput 
        style={{ height: 20 }}
        onFocus={getAddress}
        value={locals.value}
      />
    </View>
  );
}

class EventPost extends Component {
  constructor(props) {
    super(props);

    this.Event = t.struct({
      name: t.String,
      description: t.maybe(t.String),
      location: t.String,
      date: t.Date
    });

    this.options = {
      fields: {
        description: {
          multiline: true,
          numberOfLines: 5,
        },
        location: {
          template: locationTemplate,
          value: 'location'
        },
      }
    };
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
  		    console.log(place);
      })
      .catch(error => console.log(error.message));
  }

  onPress() {
    let value = this.refs.form.getValue();
    let validate = this.refs.form.validate();
    console.log(value);
    console.log(validate);
  }

  render() {
    return (
    <View>
      <ImagePicker/>
      <Form
          ref='form'
          type={this.Event}
          options={this.options}
        />
      <Button onPress={this.onPress.bind(this)}>
        <Text>Save</Text>
      </Button>
    </View>
    );
  }
}

export default EventPost;
