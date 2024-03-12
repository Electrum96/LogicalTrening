import {StyleSheet} from 'react-native';
import { COLORS, RADIUS } from '../../../assets/styles/variables';

function useStyleItemHome () {
    const styles = StyleSheet.create({
        itemWrap:{
            backgroundColor: COLORS.accentGreen,
            alignItems: 'center',
            padding: 18,
            borderRadius: RADIUS.big,
            width: '65%'
            
        },
        title:{
            fontSize: 20,
            fontWeight: '800',
            color: COLORS.white
        }
        
    });

    return styles;
}

export default useStyleItemHome;