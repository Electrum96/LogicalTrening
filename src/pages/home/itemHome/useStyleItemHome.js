import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleItemHome () {
    const styles = StyleSheet.create({
        itemWrap:{
            backgroundColor: COLORS.accentGreen,
            alignItems: 'center',
            padding: 10,
            borderRadius: 8
            
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