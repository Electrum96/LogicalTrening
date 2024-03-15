import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleTakeInform() {
    const styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },
        form: {
            width: '90%',
            height: '50%',
            marginTop: 20,
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            width: '80%',
            height: 50,
            paddingLeft: 10,
            backgroundColor: COLORS.backgrounColor,
            color: COLORS.grey,
            borderRadius: 20
        },
        titleWrapper: {
            height: '10%',
            width: '75%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderBottomColor: COLORS.yellow,
            borderBottomWidth: 5,
            marginBottom: 20

        },
        title: {
            fontSize: 22,
            color: COLORS.white,
            fontWeight: '700'
        }
    });

    return styles;

}

export default useStyleTakeInform;