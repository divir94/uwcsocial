import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

//import EditTodo from '../containers/EditTodoScene';


class Event extends Component {
  viewEvent() {
    // this.props.navigator.push({
    //   component: EditTodo,
    //   passProps: {
    //     title: 'Edit task',
    //     todo: this.props.event
    //   }
    // });
  }

  render() {
    let event = this.props.event;
    return (
      <View>
        <TouchableHighlight onPress={this.viewEvent.bind(this)}>
          <View>
            <Text>{event.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Event;
