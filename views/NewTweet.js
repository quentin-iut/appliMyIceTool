import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Camera from 'react-native-camera';
import NewTweetBar from '../components/NewTweetBar';
import styles from '../styles/views/NewTweet.style';
import colors from '../styles/colors.style';

export default class NewTweet extends Component {

    constructor (props) {
        super(props);
        this.state = { text: '', showCamera: false, pictures: [] };
        this._onChangeText = this._onChangeText.bind(this);
        this._onPressCamera = this._onPressCamera.bind(this);
        this._takePicture = this._takePicture.bind(this);
        this._onPictureTaken = this._onPictureTaken.bind(this);
    }

    _onChangeText (text) {
        this.setState({ text });
    }

    _onPressCamera () {
        Keyboard.dismiss();
        this.setState({ showCamera: !this.state.showCamera });
    }

    _takePicture () {
        this._cameraRef &&
            this._cameraRef.capture({})
            .then(this._onPictureTaken)
            .catch((err) => console.warn('err', err));
    }

    _onPictureTaken (picture) {
        this.setState({ showCamera: false, pictures: [...this.state.pictures, picture.path] });
    }

    _onSendTweet () {
        const data = new FormData();
        this.state.pictures.forEach((picture) => {
            data.append('photo', {
                uri: picture,
                type: 'image/jpeg',
                name: 'testPhotoName'
            });
            data.append('content', this.state.text);
            fetch('http://monserveur.tld/sendTweet', {
                method: 'post',
                body: data
            })
            .then(res => {
                console.log(res);
            })
            .catch((err) => {
                console.warn("Impossible d'envoyer le tweet : " + err);
            })
        });
    }

    get pictures () {
        if (!this.state.pictures.length) {
            return false;
        }
        const pictures = this.state.pictures.map((picture, index) => {
            return (
                <View style={styles.pictureContainer}>
                    <Image source={{ uri: picture }} style={styles.picture} />
                </View>
            );
        });
        return (
            <View style={styles.picturesContainer}>
                { pictures }
            </View>
        );
    }

    get cameraView () {
        if (!this.state.showCamera) {
            return false;
        }
        return (
            <View style={styles.cameraView}>
                <Camera
                  ref={(c) => this._cameraRef = c}
                  style={styles.camera}
                  aspect={Camera.constants.Aspect.fill}
                >
                    <TouchableOpacity
                      style={styles.cameraButton}
                      onPress={this._takePicture}
                    >
                        <Icon name={'md-camera'} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </Camera>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={this._onChangeText}
                  underlineColorAndroid={colors.support}
                />
                { this.pictures }
                <NewTweetBar
                  text={this.state.text}
                  onPressCamera={this._onPressCamera}
                  onSendTweet={this._onSendTweet}
                />
                { this.cameraView }
            </View>
        );
    }
}
