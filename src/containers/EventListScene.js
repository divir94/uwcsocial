import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { themeable } from '../themes';
import { toggleEvent, setVisibilityFilter } from '../actions';
import EventList from '../components/EventList';
//import NewEvent from './AddEventScene';

class EventListScene extends Component {

  addNewEvent() {
    // this.props.navigator.push({
    //   component: NewEvent,
    //   passProps: {
    //     title: 'Add task'
    //   }
    // });
  }

  render() {
    const {
      events,
      style,
      navBarStyle,
      statusBarTintColor,
      statusBarStyle,
      navBarBtnTextColor,
    } = this.props;

    return (
      <View style={style}>
        <NavigationBar
          statusBar={{tintColor: statusBarTintColor, style: statusBarStyle}}
          title={{ title: 'Tasks' }}
          rightButton={{ title: 'Add', handler: this.addNewEvent.bind(this), tintColor: navBarBtnTextColor }}
          style={navBarStyle}
        />
        <ScrollView>
          <EventList events={events} navigator={this.props.navigator}/>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const EventListSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventListScene);

const ThemableEventListScene = themeable(EventListSceneContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    navBarStyle: styles.navBar,
    statusBarTintColor: variables.colorNavBg,
    statusBarStyle: variables.statusBarStyle,
    navBarBtnTextColor: variables.colorNavbarText,
    filterStyle: styles.filterItem,
    filterTextStyle: styles.filterTextStyle
  };
});

export default ThemableEventListScene;
