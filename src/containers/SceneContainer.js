import React, { Component } from 'react';
import { Navigator } from 'react-native';

import EventListScene from './EventListScene';
import EventPostScene from './EventPostScene';


class Navigation extends Component {
  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps}/>
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Events', component: EventListScene }}
        renderScene={this.renderScene}
      />
    );
  }
}

export default Navigation;
