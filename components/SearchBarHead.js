import React, { Component } from 'react';
import { Image,TextInput,View } from 'react-native';
import styles from '../styles/components/SearchBarHead.style';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/Ionicons';

const ICONS = {
        icon: 'ios-search',
        name: 'Search'
    };


export default class SearchBarHead extends Component {
    render () {
        return (
            <View style={styles.container}>
                <TextInput
                editable = {true}
                style = {styles.inputStyle}
                />
                <Icon name={ICONS.icon}  size={30}/>
             </View>
        );
    }
}
