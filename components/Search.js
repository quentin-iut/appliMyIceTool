import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import SearchBar from 'react-native-searchbar';

export default class Search extends Component {



  render() {
    return (
        <View style={{ marginTop: 110 }}>
             <TextInput
              editable = {true}
              maxLength = {40}
            />

      </View>
    );
  }


}

