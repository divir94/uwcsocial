import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

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
    let { events, navigator } = this.props;

    return (
      <View>
        <NavigationBar
          title={{title: 'Events'}}
          rightButton={{title: 'Add', handler: this.addNewEvent.bind(this)}}
        />
        <ScrollView>
          <EventList events={events} navigator={navigator}/>
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

export default EventListSceneContainer;
