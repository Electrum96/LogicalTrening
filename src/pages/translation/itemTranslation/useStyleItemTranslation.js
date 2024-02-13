import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleItemTranslation() {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: COLORS.lightBlue,
            width: '100%',
            height: 100,
            marginBottom: 15

        },
        teamContainer: {
            width: '45%',
            justifyContent: 'center',
            padding: 10

        },
        timeWrap: {
            backgroundColor: COLORS.yelBgc,
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            padding: 20
        },
        team: {
            color: COLORS.accentBg,
            fontWeight: '700',
            fontSize: 20
        },
        ligaWrapper: {
            borderRightWidth: 1,
            justifyContent: 'center',
            width: '30%',
            alignItems: 'center'

        },
        liga: {
            fontSize: 26,
            color: COLORS.dark,
            fontWeight: '700'
        },



    });

    return styles;

}

export default useStyleItemTranslation;