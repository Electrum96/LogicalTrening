import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleButtonIcon () {
    const styles = StyleSheet.create({
        btn:{
            borderRadius: 10,
            backgroundColor: COLORS.accentBg,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center'
            
        }
        
    });

    return styles;
}

export default useStyleButtonIcon;