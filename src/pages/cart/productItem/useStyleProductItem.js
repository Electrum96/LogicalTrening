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
            backgroundColor: 'red'

        },
        image: {
            width: "30%",
            height: "75%",
            borderRadius: 50
        },
        box: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'violet',
            width: '30%'
        },
        contentWrap: {
            flexDirection: 'column',
            padding: 8,

        },
        title: {
            textAlign: 'left',
            fontWeight: '700',
            marginBottom: 5,
            color: COLORS.dark,
            fontSize: 15
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8
        },

        priceWrapper: {
            width: '25%',
            backgroundColor: COLORS.accentGreen,
            borderRadius: 10
        },

        price: {
            textAlign: 'center',
            color: COLORS.white,
            fontSize: 15
        }
    });

    return styles;
}

export default useStyleProductItem;