import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleLongButton(color) {
const styles = StyleSheet.create({
    container:{
        backgroundColor: color,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 20
        
    },
    title:{
        color: COLORS.white,
        fontSize: 20,
    }

   });

 return styles;

}

export default useStyleLongButton;