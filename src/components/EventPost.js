import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import NavigationBar from 'react-native-navbar';
import RNGooglePlaces from 'react-native-google-places';
import t from 'tcomb-form-native';

import ImagePicker from './shared/ImagePicker';
import { addEvent } from '../actions';


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

    this.state = {
      image: null,
      formEventTypes: t.struct({
        name: t.String,
        description: t.maybe(t.String),
        location: t.maybe(t.String),
        date: t.Date
      }),
      formEventOptions: {
        fields: {
          name: {
            autoCorrect: false,
          },
          description: {
            multiline: true,
            numberOfLines: 5,
          },
          location: {
            template: locationTemplate
          },
        }
      }
    };
  }

  setImageUri(uri) {
    this.setState({
      image: uri
    })
  }

  onPress() {
    let value = this.refs.form.getValue();

    if (value) {
      let newValue = Object.assign({}, value, {
        date: value.date.toDateString(),
        time: value.date.toTimeString(),
        image: this.state.image
      })
      console.log(newValue)
      this.props.onSumbitEvent(newValue);
      this.goBack();
    } 
    else {
      let validate = this.refs.form.validate();
      console.log(validate);
    }
  }

  goBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
    <View>
      <NavigationBar
          title={{ title: 'Post an event' }}
          leftButton={{ title: 'Cancel', handler: this.goBack.bind(this) }}
        />
      <ImagePicker onLoad={this.setImageUri.bind(this)}/>
      <Form
          ref='form'
          type={this.state.formEventTypes}
          options={this.state.formEventOptions}
          value={{ name: 'test' }}
        />
      <Button onPress={this.onPress.bind(this)}>
        <Text>Save</Text>
      </Button>
    </View>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => {
  return {
    onSumbitEvent: (event) => {
      dispatch(addEvent(event))
    }
  }
};

let EventPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPost);

export default EventPostContainer;
