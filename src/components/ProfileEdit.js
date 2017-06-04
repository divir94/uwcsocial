import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import NavigationBar from 'react-native-navbar';

import ProfileDetailEdit from './ProfileDetailEdit';
import ProfilePhotosEdit from './ProfilePhotosEdit';
import SegmentedTab from './shared/SegmentedTab';
import { editUser } from '../actions';


class ProfileEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  onPress() {
    // let value = this.refs.form.getValue();

    // if (value) {
    //   console.log(value);
    //   this.props.editUser(value);
    //   this.goBack();
    // } 
    // else {
    //   let validate = this.refs.form.validate();
    //   console.log(validate);
    // }
    this.goBack();
  }

  goBack() {
    this.props.navigator.pop()
  }

  handleIndexChange(index) {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    return (
    <View>
      <NavigationBar
          title={ <SegmentedTab onChange={this.handleIndexChange.bind(this)}/> }
          rightButton={{ title: 'Done', handler: this.onPress.bind(this) }}
      />
      { this.state.selectedIndex == 0 ? <ProfileDetailEdit/> : <ProfilePhotosEdit/>}
    </View>
    );
  }
}

export default ProfileEdit;
