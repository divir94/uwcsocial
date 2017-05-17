import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import Todo from './Todo';

const ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1.id !== row2.id,
});

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
  }

  renderRow(todo) {
    return <Todo todo={todo} onCheckPress={this.props.onCheckPress} navigator={this.props.navigator}/>;
  }

  updateDataSource(todos) {
    this.setState({
      dataSource: ds.cloneWithRows(todos)
    });
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.todos);
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
}

export default Todos;
