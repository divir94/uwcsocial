import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import NavigationBar from 'react-native-navbar';
import t from 'tcomb-form-native';

import { editUser } from '../actions';


let Form = t.form.Form;

let User = t.struct({
  name: t.String,
  age: t.Number,
  location: t.String,
  description: t.String,
  height: t.maybe(t.String),
  relationship: t.maybe(t.enums({
    'single': 'Single',
    'married': 'Married',
    'relashionship': 'In a relashionship',
    'complicated': 'It\'s Complicated'
  })),
});

let options = {
  fields: {
    name: {
      autoCorrect: false,
    }
  }
};

class ProfileDetailEdit extends Component {

  onPress() {
    let value = this.refs.form.getValue();
    this.props.handleFormSubmit(value);
  }

  render() {
    return (
    <View>
      <Form
        ref='form'
        type={User}
        options={options}
        value={this.props.user}
      />
    </View>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    editUser: (event) => {
      dispatch(editUser(event))
    }
  }
};

let ProfileDetailEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetailEdit);

export default ProfileDetailEditContainer;
