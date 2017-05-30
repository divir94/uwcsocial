import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'


class SegmentedTab extends Component {

  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
    this.props.onChange(index);
  }

  render() {
    return (
      <View style={{ width: 200 }}>
        <SegmentedControlTab
          values={['Details', 'Photos']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
      </View>
    );
    }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  tabViewText: {
    color: '#444444',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 18
  },
  titleText: {
    color: '#444444',
    padding: 20,
    fontSize: 14,
    fontWeight: '500'
  },
  headerText: {
      padding: 8,
      fontSize: 14,
      color: '#444444'
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24
  }
});

export default SegmentedTab;
