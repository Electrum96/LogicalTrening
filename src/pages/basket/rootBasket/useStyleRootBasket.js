import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootBasket() {
    const styles = StyleSheet.create({
        titleWrapper: {
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

        contentBox: {
            padding: 15,
            marginVertical: 10,
            height: '70%',
            backgroundColor: COLORS.backgrounColor,
            justifyContent: 'center',
            position: 'relative',
            borderRadius: 20
        },

        list: {
            paddingVertical: 20,
            gap: 30
        },
        titleTotal: {
            fontSize: 22,
            color: COLORS.dark,
            fontWeight: '700'
        },
        total: {
            fontSize: 18,
            fontWeight: '700',
            alignSelf: 'center',
            color: COLORS.white
        },

        buttonWrapper: {
            alignSelf: 'center',
            marginTop: 10

        },
        totalBox: {
            position: 'absolute',
            bottom: 10,
            right: 10

        },
        wrapperTotal: {
            flex: 1,
            height: 35,
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.accentGreen

        },
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },

        image: {
            width: 200,
            height: 200
        }

    });

    return styles;
}

export default useStyleRootBasket;