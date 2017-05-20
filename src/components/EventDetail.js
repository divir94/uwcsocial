import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Button } from 'native-base';


class EventDetail extends Component {
  render() {
    let { name, image, going, date, location, description } = this.props.event;
    return (
      
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
