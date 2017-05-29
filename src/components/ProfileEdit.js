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

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
  }


  onPress() {
    let value = this.refs.form.getValue();

    if (value) {
      console.log(value);
      this.props.editUser(value);
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
          title={{ title: 'Edit Profile' }}
          leftButton={{ title: 'Cancel', handler: this.goBack.bind(this) }}
        />
      <Form
        ref='form'
        type={User}
        options={options}
        value={this.props.user}
      />
      <Button block onPress={this.onPress.bind(this)}>
        <Text>Save</Text>
      </Button>
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

let ProfileEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);

export default ProfileEditContainer;
