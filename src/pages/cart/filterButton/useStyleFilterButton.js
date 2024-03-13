import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleFilterButton() {
    const styles = StyleSheet.create({
        buttonWrap: {
            height: 40,
            width: 150,
            backgroundColor: COLORS.accentGreen,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 5
        },
        title: {
            fontSize: 18,
            color: COLORS.white,
            fontWeight: '500'
        }
    })
    return styles;
}
export default useStyleFilterButton;