import React from 'react';
import { StackNavigator } from 'react-navigation';
import HeaderAvatar from '../components/HeaderAvatar';
import NewTweetButton from '../components/NewTweetButton';
import headerStyles from '../styles/components/Header.style';
import MainView from '../views/CascadeView';
import NewTweet from '../views/NewTweet';
import SearchBarHead from '../components/SearchBarHead';
//import Messages from '../components/Messages';
import DetailCascade from '../components/DetailCascade';
import DetailCascadeView from "../views/DetailCascadeView";
import SearchCascadeView from "../views/SearchCascadeView";
// Fichier de configuration des routes

// Cette fonction permet de générer un ensemble d'options de navigation
// par défaut qui sont présentes dans la plupart des routes.
// On peut se débarasser d'une option particulière en la réécrivant
// après avoir fait un spread de cette fonction (cf : headerRight supprimé dans NewTweet)
const DEFAULT_NAV_OPTIONS = (navigation) => ({
    // On applique les styles de la Navbar, du titre...
    ...headerStyles,
    // On rend un composant sur la partie droite de la NavBar, on n'oublie pas
    // de passer la prop "navigation" afin d'avoir accès au contexte de navigation
    // au sein du composant, ce qui permet de naviguer par la suite.
    headerRight: <NewTweetButton navigation={navigation} />
});

export default StackNavigator({
    Home: {
        screen: MainView,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <HeaderAvatar />,
            ...DEFAULT_NAV_OPTIONS(navigation)
        })
    },
    Messages: {
        screen: SearchCascadeView,
        navigationOptions: ({ navigation }) => ({
            //headerLeft: <HeaderAvatar />,
            headerRight:<SearchBarHead/>,
            //...DEFAULT_NAV_OPTIONS(navigation)
        })
    },
    DetailCascadeData: {
        screen: DetailCascadeView,
        navigationOptions: ({ navigation }) => ({
            // headerLeft: <HeaderAvatar />,
            //...DEFAULT_NAV_OPTIONS(navigation)
        })
    },

    /*NewTweet: {
        screen: NewTweet,
        navigationOptions: ({ navigation }) => ({
            ...DEFAULT_NAV_OPTIONS(navigation),
            // on ne souhaite pas afficher le bouton nouveau tweet sur cette
            // vue, puisqu'il ouvre justement la vue en cours
            headerRight: null
        })
    }*/
});
