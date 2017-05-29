import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Tabs, Tab, Header, Container } from 'native-base';

import NavigationBar from 'react-native-navbar';

import Profile from '../components/Profile';
import ProfileEdit from '../components/ProfileEdit';
import EventList from '../components/EventList';
import EventPost from '../components/EventPost';


class EventListScene extends Component {
  postEvent() {
    this.props.navigator.push({
      component: EventPost,
      passProps: {
        navigator: this.props.navigator
      }
    });
  }

  editProflie() {
    this.props.navigator.push({
      component: ProfileEdit,
      passProps: {
        navigator: this.props.navigator
      }
    });
  }

  render() {
    let { navigator } = this.props;

    return (
      <Container>
        <Tabs tabBarPosition='bottom' initialPage={0}>

          <Tab heading='Profile'>
            <NavigationBar
                title={{ title: 'Profile' }}
                rightButton={{ title: 'Edit', handler: this.editProflie.bind(this) }}
              />
              <ScrollView>
                <Profile navigator={navigator}/>
              </ScrollView>
          </Tab>

          <Tab heading='Events'>
            <NavigationBar
              title={{ title: 'Events' }}
              leftButton={{ title: 'Add', handler: this.postEvent.bind(this) }}
            />
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
