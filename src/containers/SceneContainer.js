import React, { Component } from 'react';
import { Navigator } from 'react-native';

import EventList from './EventListScene';


class Navigation extends Component {
  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps}/>
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Events', component: EventList }}
        renderScene={this.renderScene}
      />
    );
  }
}

export default Navigation;
