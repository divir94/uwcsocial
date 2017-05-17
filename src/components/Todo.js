import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import { themeable } from '../themes';
import EditTodo from '../containers/EditTodoScene';

class Todo extends Component {

  renderButton() {
    const {completeTaskIconStyle} = this.props;
    if (this.props.todo.completed) {
      return <Icon name="check-circle" style={completeTaskIconStyle} size={20} color="#999" />;
    } else {
      return <Icon name="circle-o" style={completeTaskIconStyle} size={20} color="#999" />;
    }
  }

  viewTodo() {
    this.props.navigator.push({
      component: EditTodo,
      passProps: {
        title: 'Edit task',
        todo: this.props.todo
      }
    });
  }

  render() {
    const {todo, style, completeTaskColStyle, detailsStyle, timestampStyle, titleStyle} = this.props;
    const {title, createdAt, completedAt} = todo;
    return (
      <View style={style}>
        <TouchableHighlight
            onPress={() => this.props.onCheckPress(this.props.todo.id)}
            activeOpacity={75 / 100}
            style={completeTaskColStyle}
            >
          {this.renderButton()}
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.viewTodo.bind(this)}
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


const ThemeableTodo = themeable(Todo, (theme) => {
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

ThemeableTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  onCheckPress: PropTypes.func.isRequired
};

export default ThemeableTodo;
