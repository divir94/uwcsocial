import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { themeable } from '../themes';
import { editTodo, deleteTodo } from '../actions';
import EditTodo from '../components/EditTodo';

class NewTodo extends Component {
  constructor() {
    super()
    this.state = {
      editable: false
    }
  }

  backToList() {
    this.props.navigator.pop();
  }

  editTodo(todo) {
    this.props.editTodo(todo);
    this.backToList();
  }

  deleteTodo(id) {
    this.props.deleteTodo(id);
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
          rightButton={{ title: 'Edit', handler: () => this.setState({editable: true}), tintColor: navBarBtnTextColor }}
          style={navBarStyle}
        />
        <ScrollView>
          <EditTodo 
          editTodo={this.editTodo.bind(this)} 
          deleteTodo={this.deleteTodo.bind(this)} 
          todo={this.props.todo} 
          editable={this.state.editable}/>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTodo: (todo) => {
      dispatch(editTodo(todo));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    }
  };
};

const NewTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
)(NewTodo);


const ThemableEditTodo = themeable(NewTodoContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    navBarStyle: styles.navBar,
    statusBarTintColor: variables.colorNavBg,
    statusBarStyle: variables.statusBarStyle,
    navBarBtnTextColor: variables.colorNavbarText
  };
});

export default ThemableEditTodo;
