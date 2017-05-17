import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { themeable } from '../themes';
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
    const {event, style, completeTaskColStyle, detailsStyle, timestampStyle, titleStyle} = this.props;
    const {title, createdAt, completedAt} = event;
    return (
      <View style={style}>
        <TouchableHighlight
            onPress={this.viewEvent.bind(this)}
            >
          <View style={detailsStyle}>
            <Text style={titleStyle}>{title}</Text>
            <Text style={timestampStyle}>Created at: {createdAt.toGMTString()}</Text>
            {completedAt && <Text style={timestampStyle}>Completed at: {completedAt.toGMTString()}</Text>}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


const ThemeableTodo = themeable(Event, (theme) => {
  const { styles } = theme;
  return {
    style: styles.todoItem,
    completeTaskColStyle: styles.todoItemCompleteTask,
    completeTaskIconStyle: styles.todoItemCompleteTaskIcon,
    detailsStyle: styles.todoItemDetails,
    timestampStyle: styles.todoItemTimeStamp,
    titleStyle: styles.todoItemTitle
  };
});

export default ThemeableTodo;
