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
        boxShadow:{
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOffset: {
                width: 10,
                height: 15
            },

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