import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleLayoutMain (color) {
    const styles = StyleSheet.create({
        layout:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: color,
            flex: 1,
            justifyContent: 'space-between'
        },
        navigation:{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingHorizontal: 20,
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