import React,  {Component} from 'react';
import {Text,View} from 'react-native';
import {Content,Card,CardItem,Body} from 'native-base';
import Cascade from './Cascade';
import Notifications from './Notifications';
import ScroolBar from './ScroolBar';
//import styles from '../styles/components/Message.style';

export default class Messages extends Component {
    constructor(){
        super()
        this.state = {
            valeur:'rar'
        }
    }

    render () {
        return(
            
                <Cascade valeur={this.state.valeur}/>
            
         );
    }
}
