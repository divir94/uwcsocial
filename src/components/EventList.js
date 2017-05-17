import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import Event from './Event';

let ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1.id !== row2.id,
});

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(props.events)
    };
  }

  renderRow(event) {
    return <Event event={event} navigator={this.props.navigator}/>;
  }

  updateDataSource(events) {
    this.setState({
      dataSource: ds.cloneWithRows(events)
    });
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.events);
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

export default EventList;
