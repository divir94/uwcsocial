import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Tabs, Tab, Header, Container } from 'native-base';

import EventList from '../components/EventList';
import EventDetail from '../components/EventDetail';
import EventPostScene from './EventPostScene';


class EventListScene extends Component {
  postEvent() {
    this.props.navigator.push({
      component: EventPostScene
    });
  }

  render() {
    let { events, navigator } = this.props;

    return (
      <Container>
        <NavigationBar
          title={{ title: 'Events' }}
          leftButton={{ title: 'Add', handler: this.postEvent.bind(this) }}
        />
        <Tabs tabBarPosition='bottom' initialPage={1}>
          <Tab heading='Profile'/>
          <Tab heading='Events'>
            <ScrollView>
              <EventList navigator={navigator}/>
            </ScrollView>
          </Tab>
          <Tab heading='Chat'/>
        </Tabs>
      </Container>
    );
  }
}

export default EventListScene;
