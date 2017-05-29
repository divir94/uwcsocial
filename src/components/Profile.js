import React, { Component, PropTypes } from 'react';
import { View, ListView, Text } from 'react-native';
import { Button, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

import Carousel from './shared/Carousel';


class Proflie extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { name, age, location, description, relationship, height } = this.props.user;

    return (
      <View>
        <Carousel/>
        <Card>
          <CardItem>
            <Text>Name: {name}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>Age: {age}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>Location: {location}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>Description: {description}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>Relationship Status: {relationship}</Text>
          </CardItem>
        </Card>
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
  return {};
};

let ProflieContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Proflie);

export default ProflieContainer;
