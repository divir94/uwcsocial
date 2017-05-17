import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { themeable } from '../themes';
import EventList from './EventListScene';

class Navigation extends Component {

  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps}/>
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'List', component: EventList}}
        renderScene={this.renderScene}
      />
    );
  }
}

const ThemeableNavigation = themeable(Navigation, (theme) => {
  const { styles, variables } = theme;
  return {
    mainBgImgStyle: styles.mainBgImg,
    mainBgImgSrc: variables.mainBgImg
  };
});

export default ThemeableNavigation;
