import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem } from 'native-base';

import EventDetailScene from '../containers/EventDetailScene';


class Event extends Component {
  viewEvent() {
    this.props.navigator.push({
      component: EventDetailScene,
      passProps: {
        title: 'Event Detail',
        event: this.props.event
      }
    });
  }

  render() {
    let { name, image, going, date, location} = this.props.event;
    return (
      <Card>
        <CardItem button onPress={this.viewEvent.bind(this)}>
          <Image style={styles.image} source={image}>
            <Text>{name}</Text>
            <Text>{going}</Text>
          </Image>
          <Text>{date}{'\n'}{location}</Text>
        </CardItem>
      </Card>
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

export default Event;
