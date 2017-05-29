import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Button, Container } from 'native-base';

import NavigationBar from 'react-native-navbar';


class EventDetail extends Component {
  goBack() {
    this.props.navigator.pop()
  }

  render() {
    let { name, image, going, date, location, description } = this.props.event;
    return (
      <Container>
        <NavigationBar
            title={{ title: 'Event Detail' }}
            leftButton={{ title: 'Cancel', handler: this.goBack.bind(this) }}
          />
        <Card>
          <CardItem>
            <Image style={styles.image} source={image}/>
          </CardItem>
                  <CardItem>
            <Text>{date}</Text>
            <Text>{location}</Text>
          </CardItem>
          <CardItem>
            <Text>{description}</Text>
          </CardItem>
        </Card>
      </Container>
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

export default EventDetail;
