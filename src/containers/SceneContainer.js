import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { themeable } from '../themes';
import TodoList from './TodoListScene';

class Navigation extends Component {

  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <route.component navigator={navigator} {...route.passProps}/>
  }

  render() {
    const {mainBgImgStyle, mainBgImgSrc} = this.props;

    return (
      <Navigator
        initialRoute={{name: 'List', component: TodoList}}
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
