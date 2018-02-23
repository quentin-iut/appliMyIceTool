import React,  {Component} from 'react';
import {Text,View,TextInput} from 'react-native';
import {Content,Card,CardItem,Body} from 'native-base';
import CascadeData from './CascadeData';
import Notifications from './Notifications';

export default class Cascade extends Component {

    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    getData(){
        return fetch('https://myicetool.bsy.ovh/api/cascades')
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({data : responseJson});
        })
        .catch((error) => {
        console.error(error);
        });
    }

    componentDidMount(){
        this.getData();
    }

    render () {
        return (
            <CascadeData data = {this.state.data} valeur = {this.props.valeur} navigation={}/>
        );
    }
}
