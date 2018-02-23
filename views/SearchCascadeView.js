import React,  {Component} from 'react';
import {Text,View} from 'react-native';
import {Content,Card,CardItem,Body} from 'native-base';
import Cascade from '../components/Cascade';
import Notifications from '../components/Notifications';
import ScroolBar from '../components/ScroolBar';
import Timeline from '../components/Timeline';
import Search from '../components/Search';
import Messages from '../components/Messages';
import styles from '../styles/app.style';
import TabBarButton from '../components/TabBarButton';
import SearchBar from 'react-native-searchbar';
//import styles from '../styles/components/Message.style';

export default class SearchCascadeView extends Component {

    render () {
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Messages />
                </View>
            </View>
         );
    }
}
