import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import TabScene from './TabScene';


class Navigation extends Component {
  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps}/>
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Events', component: TabScene }}
        renderScene={this.renderScene}
      />
    );
  }
}

export default Navigation;
