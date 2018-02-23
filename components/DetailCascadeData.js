import React,  {Component} from 'react';
import {Text,View} from 'react-native';
import {Content,Card,CardItem,Body} from 'native-base';

//import DetailCascade from './DetailCascade';

export default class DetailCascadeData extends Component {

    constructor(props) {
    super(props);
  }

    render () {
        return (
                <View>
                    <Text>{this.props.dataCascade.nom}  </Text>
                    <Text>Altitude minimum : {this.props.dataCascade.altitude_minimum}</Text>
                    <Text>Niveau d'engagement : {this.props.dataCascade.niveau_engagement}</Text>   
                    <Text>Nombre de voies : {this.props.dataCascade.nombre_voies}</Text>   
                    <Text>Hauteur : {this.props.dataCascade.hauteur}</Text>      
                </View>
        );
    }
}
module.export = DetailCascadeData;
/*

 : {this.props.dataCascade.pays.code} / niveau {this.props.dataCascade.niveau.libelle}
 <Text>Type de glace : {this.props.dataCascade.type_glace.libelle}</Text>   

*/