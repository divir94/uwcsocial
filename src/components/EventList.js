import React, { Component, PropTypes } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';

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

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.events)
    });
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

let mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

let EventListContainer = connect(
  mapStateToProps,
  () => ({})
)(EventList);

export default EventListContainer;
