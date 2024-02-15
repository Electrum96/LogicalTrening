import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootBasket() {
    const styles = StyleSheet.create({
        pageWrapper: {
            backgroundColor: COLORS.accentBg,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            position: 'absolute',
            paddingBottom: 30
        },

        pageTitle: {
            color: COLORS.white,
            fontSize: 25,
        },

        list: {
            paddingVertical: 20,
            gap: 30,
            height: 650

        },
        footer: {
            backgroundColor: COLORS.yelBgc,
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: '10%',
            width: '30%',
            alignSelf: 'flex-end',
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            paddingVertical: 20,
            marginBottom: 20,
            position: 'relative',
            bottom: 100
        },
        title: {
            fontSize: 22,
            fontWeight: '700',
            color: COLORS.dark,
            borderBottomWidth: 2,
            width: 90
        },

        count: {
            fontSize: 20,
            fontWeight: '700',
            color: COLORS.dark,
            alignSelf: 'center'
        },
        contentBox:{
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        },

        image:{
            width: 170,
            height: 170,
            marginBottom: 20
        },
        description:{
            color: COLORS.light,
            fontSize: 20
        }


    });

    return styles;
}

export default useStyleRootBasket;