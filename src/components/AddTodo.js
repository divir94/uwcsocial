import React, { Component, PropTypes } from 'react';
import { View, TextInput } from 'react-native';
import { themeable } from '../themes';

import Button from './Button';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }


  save() {
    this.props.saveTodo(this.state.text);
  }

  render() {
    const { style, placeholderTextColor, textInputStyle } = this.props;
    const btnDisabled = this.state.text.trim().length === 0;
    return (
      <View style={ style }>
        <TextInput
          style={ textInputStyle }
          placeholder={ 'Type a new task here' }
          placeholderTextColor={ placeholderTextColor }
          onChangeText={ (text) => this.setState({text}) }
          value={ this.state.text }
        />

        <Button onPress={this.save.bind(this)} disabled={btnDisabled}>Save</Button>
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
  saveTodo: PropTypes.func
};

export default ThemeableAddTodo;
