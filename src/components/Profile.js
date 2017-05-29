import React, { Component, PropTypes } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';


class Proflie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

// let EventListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EventList);

export default Proflie;
