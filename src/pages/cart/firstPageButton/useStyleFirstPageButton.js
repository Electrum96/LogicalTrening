import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleFirstPageButton() {
const styles = StyleSheet.create({
    item:{
        backgroundColor: COLORS.lightBlue,
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        flexDirection: 'row'
    },
    title:{
        color: COLORS.accentBg,
        fontWeight: '700',
        fontSize: 20
    },
    image:{
        width: 150,
        height: 135
    }

   });

 return styles;

}

export default useStyleFirstPageButton;