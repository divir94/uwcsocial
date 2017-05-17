import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { themeable } from '../themes';
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

class NewTodo extends Component {

  backToList() {
    this.props.navigator.pop();
  }

  save(text) {
    this.props.saveTodo(text);
    this.backToList();
  }

  render() {
    const {
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
          title={{ title: this.props.title }}
          leftButton={{ title: 'Cancel', handler: this.backToList.bind(this), tintColor: navBarBtnTextColor }}
          style={navBarStyle}
        />
        <ScrollView>
          <AddTodo saveTodo={this.save.bind(this)} todo={this.props.todo}/>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (title) => {
      dispatch(addTodo(title));
    }
  };
};

const NewTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
)(NewTodo);


const ThemableAddTodo = themeable(NewTodoContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    navBarStyle: styles.navBar,
    statusBarTintColor: variables.colorNavBg,
    statusBarStyle: variables.statusBarStyle,
    navBarBtnTextColor: variables.colorNavbarText
  };
});

export default ThemableAddTodo;
