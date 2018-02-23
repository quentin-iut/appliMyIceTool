import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.backgroundWhite
    },
    inputStyle: {
        width : '95%',
    }
});

