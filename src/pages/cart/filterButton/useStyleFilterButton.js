import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleFilterButton(isActive) {
    const styles = StyleSheet.create({
        buttonWrap: {
            height: 60,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 5
        },
        title: {
            fontSize: 15,
            color: isActive ? COLORS.yelBgc : COLORS.white
        }
    })
    return styles;
}
export default useStyleFilterButton;