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

const TABS = [
    {
        icon: 'ios-home',
        component: Messages
    },
    {
        icon: 'ios-search',
        component: Search
    },
    {
        icon: 'ios-notifications',
        component: Notifications
    }
];

export default class SearchView extends Component {
    constructor(){
        super()
        this.state = {
            valeur:'rar',
            activeTab: 0
        }
        this._handleResults = this._handleResults.bind(this);
    }

     _onPressTabButton (index) {
        // On crée une fonction qu'on passe en prop (onPress) à TabBarButton.
        // Lors de l'appui, on va changer le bouton actif dans le state pour y
        // mettre l'index du bouton qui vient d'être appuyé.
        return () => {
            this.setState({ activeTab: index });
        };
    }

    _handleResults(val) {
             /*return () => {
                this.setState({ valeur: val });
            };*/
            alert(val);
        }

    get tabBar () {
        // On boucle sur les boutons définis en haut du fichier et
        // on rend le composant TabBarButton pour chaque itération.
        // La prop active est à true lorsque l'index actuel de la boucle
        // correspond au bouton actuellement actif stocké dans le state.
        const buttons = TABS.map((tab, index) => {
            return (
                <TabBarButton
                  key={`tab-button-${index}`}
                  active={index === this.state.activeTab}
                  icon={tab.icon}
                  onPress={this._onPressTabButton(index)}
                />
            );
        });
        return (
            <View style={styles.tabBarContainer}>
                { buttons }
            </View>
        );
    }

    render () {
        const ActiveComponent = TABS[this.state.activeTab].component;
        return(
            <View style={styles.container}>
                <SearchBar
                    ref='searchBar'
                    placeholder='Search'
                    handleResults={this._handleResults} //marche pas
                    showOnLoad
                />
                <View style={styles.contentContainer}>
                    <ActiveComponent />
                </View>
                { this.tabBar }
            </View>
         );
    }
}
