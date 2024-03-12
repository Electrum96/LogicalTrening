import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleProductItem() {
    const styles = StyleSheet.create({
        wrapper: {
            height: 140,
            width: '100%',
            paddingHorizontal: 5,
            gap: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: COLORS.grey,
        },

        image: {
            width: "30%",
            height: "75%",
            borderRadius: 50
        },
        box: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '30%'
        },
        title: {
            textAlign: 'left',
            fontWeight: '700',
            color: COLORS.dark,
            fontSize: 15
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        },

        priceWrapper: {
            width: '30%',
            paddingHorizontal: 5,
            backgroundColor: COLORS.accentGreen,
            borderRadius: 15,
            justifyContent: 'center'
        },

        price: {
            textAlign: 'center',
            color: COLORS.white,
            fontSize: 18,
            fontWeight: '800'
        }
    });

    return styles;
}

export default useStyleProductItem;