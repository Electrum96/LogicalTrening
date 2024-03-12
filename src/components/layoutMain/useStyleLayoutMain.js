import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleLayoutMain () {
    const styles = StyleSheet.create({
        layout:{
            flex: 1,
            justifyContent: 'space-between'
        },
        header:{
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            height: 70,
            backgroundColor: COLORS.accentGreen,
            justifyContent: 'center'
    
        },
        main: {
            flex: 1
        }
        
    });

    return styles;
}

export default useStyleLayoutMain;