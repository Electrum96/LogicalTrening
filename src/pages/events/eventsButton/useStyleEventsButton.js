import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleEventsButton() {
    const styles = StyleSheet.create({
        item: {
            backgroundColor: COLORS.blueBars,
            height: 150,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 5,
            flexDirection: 'row'
        },
        box: {
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 5
        },
        date: {
            color: COLORS.light,
            fontWeight: '700',
            fontSize: 25,
         
        },
        time: {
            color: COLORS.yelBgc,
            fontWeight: '700',
            fontSize: 18
        },
        image: {
            width: 250,
            height: 150
        },

    });

    return styles;

}

export default useStyleEventsButton;