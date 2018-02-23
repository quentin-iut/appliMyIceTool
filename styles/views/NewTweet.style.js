import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground
    },
    textInput: {
        color: colors.textSecond
    },
    cameraView: {
        height: 300,
        width: '100%',
        backgroundColor: 'red'
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cameraButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 50,
        borderColor: 'white',
        height: 50,
        width: 50
    },
    cameraIcon: {
        fontSize: 25,
        color: 'white'
    },
    picturesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pictureContainer: {
        width: '25%',
        height: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
    picture: {
        flex: 1
    }
});
