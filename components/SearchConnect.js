import React, { Component } from 'react';
import { View,TouchableOpacity,Text,AsyncStorage } from 'react-native';

export default class Search extends Component {

    async fakeLogin(){
        try{
            await AsyncStorage.setItem('authentificated','true');
            await AsyncStorage.setItem('username','@utilisateur');
            alert('vous etes connecte');
        }catch (err){
            console.warn("Erreur lors de l'authentification : " + err);
        }
    }

    async logout(){
        try{
            await AsyncStorage.setItem('authentificated','false');
            await AsyncStorage.removeItem('username');
            alert('vous etes deconnecté');
        }catch (err){
            console.warn("Erreur lors de l'authentification : " + err);
        }
    }


    render () {
        return (
            <View>
            <TouchableOpacity onPress={this.fakeLogin} style={{height:50,width:300,backgroundColor:"white"}}>
                <Text style={{color:'black'}}>Se connecter </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logout} style={{height:50,width:300,backgroundColor:"white"}}>
                <Text style={{color:'black'}}>Se deconnecter </Text>
            </TouchableOpacity>
            </View>
        );
    }
}
