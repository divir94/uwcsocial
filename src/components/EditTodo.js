import React, { Component, PropTypes } from 'react';
import { View, TextInput } from 'react-native';
import { themeable } from '../themes';

import Button from './Button';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.todo.title,
    };
  }


  edit() {
    let newTodo = Object.assign({}, this.props.todo, {title: this.state.text})
    this.props.editTodo(newTodo);
  }

  delete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    const { style, placeholderTextColor, textInputStyle } = this.props;
    const btnDisabled = !this.props.editable;
    return (
      <View style={ style }>
        <TextInput
          style={ textInputStyle }
          placeholderTextColor={ placeholderTextColor }
          onChangeText={ (text) => this.setState({text}) }
          value={ this.state.text }
          editable={this.props.editable}
        />

        <Button onPress={this.edit.bind(this)} disabled={btnDisabled}>Save</Button>
        {this.props.editable? <Button onPress={this.delete.bind(this)} disabled={btnDisabled}>Delete</Button>: undefined}
      </View>
    );
  }
}

const ThemeableAddTodo = themeable(AddTodo, (theme) => {
  const { styles, variables } = theme;
  return {
    placeholderTextColor: variables.colorPlaceHolderText,
    style: styles.todoEditForm,
    textInputStyle: styles.addTodoInput
  };
});

ThemeableAddTodo.propTypes = {
  saveTodo: PropTypes.func,
  onFinish: PropTypes.func
};

export default ThemeableAddTodo;
