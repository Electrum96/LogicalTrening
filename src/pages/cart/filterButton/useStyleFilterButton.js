import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleFilterButton(isActive) {
    const styles = StyleSheet.create({
        buttonWrap: {
            height: 40,
            width: 150,
            backgroundColor: !isActive ? COLORS.accentGreen : COLORS.white,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: COLORS.accentGreen
        },
        title: {
            fontSize: 15,
            color: !isActive? COLORS.white  : COLORS.accentGreen,
            fontWeight: '500'
        }
    })
    return styles;
}
export default useStyleFilterButton;