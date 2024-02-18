import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleItemHome () {
    const styles = StyleSheet.create({
        itemWrap:{
            backgroundColor: COLORS.light,
            width: '41%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 8,
            gap: 10,
            margin: 10
            
        },
        title:{
            fontSize: 18,
            fontWeight: '800',
            color: COLORS.dark
        }
        
    });

    return styles;
}

export default useStyleItemHome;