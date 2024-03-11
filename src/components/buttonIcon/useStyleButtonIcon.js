import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleButtonIcon () {
    const styles = StyleSheet.create({
        btn:{
            borderRadius: 20,
            backgroundColor: COLORS.accentGreen,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center'
            
        }
        
    });

    return styles;
}

export default useStyleButtonIcon;