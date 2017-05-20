import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import EventDetail from '../components/EventDetail';


class EventDetailScene extends Component {
  goBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View>
        <NavigationBar
          title={{ title: 'Event Detail' }}
          leftButton={{ title: 'Cancel', handler: this.goBack.bind(this) }}
        />
        <ScrollView>
          <EventDetail event={this.props.event} />
        </ScrollView>
      </View>
    );
  }
}

export default EventDetailScene;
