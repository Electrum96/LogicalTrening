import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleProductItem() {
    const styles = StyleSheet.create({
        wrapper: {
            height: 170,
            flexDirection: 'row',
            gap: 10,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: COLORS.lightBg
        },
        image: {
            width: "50%",
            height: "100%"
        },
        box: {
            flex: 1,
            justifyContent: 'space-between',

        },
        contentWrap: {
            paddingVertical: 10
         
        },
        title: {
            fontWeight: '700',
            marginBottom: 5,
            color: COLORS.lightBg,
            fontSize: 18
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8
        },
        desc: {
            marginBottom: 10,
            color: COLORS.white
        },
        price: {
            color: COLORS.white,
            fontSize: 20,
            fontWeight: '700'
        }
    });

    return styles;
}

export default useStyleProductItem;