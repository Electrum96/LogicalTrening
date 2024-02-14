import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootCart() {
    const styles = StyleSheet.create({
        pageWrapper: {
            backgroundColor: COLORS.accentBg,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },
        listWrap: {
            paddingVertical: 20,
            gap: 20
        },
        
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }

    });

    return styles;
}

export default useStyleRootCart;