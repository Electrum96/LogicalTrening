import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleOvalButton() {
const styles = StyleSheet.create({
    btn:{
        width: '60%',
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        color: COLORS.dark,
        fontWeight: '700'
    }

   });

 return styles;

}

export default useStyleOvalButton;