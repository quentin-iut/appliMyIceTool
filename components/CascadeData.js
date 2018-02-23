import React,  {Component} from 'react';
import {Text,View} from 'react-native';
import {Content,Card,CardItem,Body,TouchableOpacity} from 'native-base';
import { pushRoute } from '../routes/navigator';
import styles from '../styles/components/NewTweetButton.style';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from '../routes/index';
let thisE;

export default class CascadeData extends Component {
    constructor(props) {
        super(props);
        this._navigate = this._navigate.bind(this);
        
    }

    _navigate () {
        pushRoute(this.props.navigation, StackNavigator.DetailCascadeData);
    }

    test() {
        alert('toto');
    }

    render () {
        thisE = this;
        let valeurEntry = this.props.valeur;
        let articleBis=this.props.data.filter(function(index){
        return true;
        //return index.nom==null?false;
        //return index.nom.indexOf(valeurEntry)==-1?true:true;
        // <CardItem button onPress={(index) => this.detailCascade(index.id)}>
        }).map(function(index){
            return (
                <Card >
                    <CardItem button onPress={() =>thisE._navigate()}>
                        <Body>
                            <Text >
                                {index.nom}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        });
    
        return (
            
                <Content>
                    {articleBis}
                </Content>
            
        );
    }
}

