import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleReservePage() {
    const styles = StyleSheet.create({
        contentWrapper: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'space-between'
          
        },

        container: {
            height: '85%',
            width: '100%',
            paddingTop: 20,
            

        },
        titleBox: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '10%',
            width: '80%',
            borderBottomColor: COLORS.yellow,
            borderBottomWidth: 5,
            marginBottom: 20
        },
        title: {
            fontSize: 22,
            color: COLORS.white,
            fontWeight: '700'
        },
        form: {
            width: '80%',
            height: '70%',
            marginTop: 20,
            gap: 10
        },
        inputs: {
            width: '100%',
            height: 50,
            paddingLeft: 10,
            backgroundColor: COLORS.backgrounColor,
            color: COLORS.grey,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20
        },
        buttonBox: {
            width: '100%',
            alignItems: 'center'
        },
        headerBox: {
            height: '10%',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingHorizontal: 20,
            backgroundColor: COLORS.accentGreen,
            justifyContent: 'center'
        }
    });

    return styles;

}

export default useStyleReservePage;