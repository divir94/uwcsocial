import React, { Component, PropTypes } from 'react';
import { View, ListView, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import t from 'tcomb-form-native';

import Carousel from './shared/Carousel';


let Form = t.form.Form;

let User = t.struct({
  name: t.String,
  age: t.Number,
  location: t.String,
  description: t.String,
  height: t.maybe(t.String),
  relationshipStatus: t.maybe(t.enums({
    'single': 'Single',
    'married': 'Married',
    'relashionship': 'In a relashionship',
    'complicated': 'It\'s Complicated'
  })),
});

let options = {
  fields: {
    name: {
      editable: false,
      autoCorrect: false,
    }
  }
};


class Proflie extends Component {

  constructor(props) {
    super(props);
  }

  onPress() {
    let value = this.refs.form.getValue();
      if (value) {
        console.log(value);
      }
      else {
        console.log(value);
      }
  }

  render() {
    return (
      <View>
        <Carousel/>
        <Form
          ref='form'
          type={User}
          options={options}
        />
        <Button block onPress={this.onPress.bind(this)}>
          <Text>Save</Text>
        </Button>
      </View>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

// let EventListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EventList);

export default Proflie;
