import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleItemTranslation() {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.yellow,
            width: '45%',
            height: 170,
            borderRadius: 20,
            alignItems: 'center',
            padding: 10,
            justifyContent: 'space-between'
        },
        wrapper: {
            flexDirection: 'row',
            height: '60%',
            width: '100%',
            gap: 20
        },
        teamBox: {
            flex: 1
        },
        team: {
            color: COLORS.dark,
            fontWeight: '700',
            fontSize: 15
        },
        date:{
            fontSize: 20,
            color: COLORS.dark,
            fontWeight: '700'
        },
        time: {
            fontSize: 15,
            color: COLORS.dark,
            fontWeight: '700' 
        }

    });

    return styles;

}

export default useStyleItemTranslation;