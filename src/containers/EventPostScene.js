import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import EventPost from '../components/EventPost';


class EventPostScene extends Component {
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
        <ScrollView>
          <EventPost />
        </ScrollView>
      </View>
    );
  }
}

export default EventPostScene;
