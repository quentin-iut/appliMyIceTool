import React,  {Component} from 'react';
import {Text,View,TextInput} from 'react-native';
import {Content,Card,CardItem,Body} from 'native-base';
import DetailCascadeData from './DetailCascadeData';
import Notifications from './Notifications';

export default class DetailCascade extends Component {

    constructor(){
        super()
        this.state = {
            dataCascade: {},
            id:1
        }
    }
    getData(){
        return fetch(`https://myicetool.bsy.ovh/api/cascades/${this.state.id}/details`)
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({dataCascade : responseJson});
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
            <DetailCascadeData dataCascade = {this.state.dataCascade} />
        );
    }
}
