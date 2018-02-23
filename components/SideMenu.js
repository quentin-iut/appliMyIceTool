/*import React, { Component } from 'react';
import { View, Image, Text, AsyncStorage,TouchableOpacity } from 'react-native';
import styles from '../styles/components/SideMenu.style';

export default class SideMenu extends Component {
    constructor (props){
        super(props);
        this.state = {authentificated:false};
        this.checkLogin = this.checkLogin.bind(this);
    }
    componentDidMount(){
        this.checkLogin();
    }
    async checkLogin(){
        try{
            const authentificated = await AsyncStorage.getItem('authentificated');
            const username = await AsyncStorage.getItem('username');
            this.setState({
                authentificated: authentificated === 'true',
                username // = username : username
            });
        }catch (err){number
            console.warn(err);
        }
    }


    get userInfos (){
        return this.state.authentificated ? (
            <View>
             <Image source={{ uri: 'https://placeimg.com/75/75/animals' }} style={styles.avatar} />
                <Text style={styles.username}>Utilisateur</Text>
                <Text style={styles.smallText}>@pseudo</Text>

                <View style={styles.subscribersContainer}>
                    <Text style={styles.smallText}>
                        <Text style={styles.strongText}>364</Text> Abonnements
                        <Text style={styles.strongText}> 166</Text> Abonnés
                    </Text>
                </View>
                {this.refreshButton}
            </View>
        ) : (
            <View>
                <Text style={{color : 'white'}}> Vous n'êtes pas connecté </Text> 
                {this.refreshButton}
            </View>
        );
    }

    get refreshButton(){

        return (
            <TouchableOpacity onPress={this.checkLogin} style={{height:50,width:50,backgroundColor:"white"}}>
                    <Text style={{color:'black'}}> Refresh </Text>
                </TouchableOpacity>
        );
    }

    render () {
        return (
            <View style={styles.container}>
               { this.userInfos }
            </View>
        );
    }
}
*/