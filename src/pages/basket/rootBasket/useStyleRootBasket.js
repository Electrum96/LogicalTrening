import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootBasket () {
    const styles = StyleSheet.create({
        pageWrapper:{
            backgroundColor: COLORS.accentBg,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            height: '100%',
            justifyContent: 'center',
            position: 'absolute'
        },

        pageTitle:{
            color: COLORS.white,
            fontSize: 25,
        },

        list:{
            paddingVertical: 20,
            gap: 30,
            height: '70%'
            
        },
        footer:{
            backgroundColor: COLORS.yelBgc,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '10%',
            width: '30%',
            alignSelf: 'flex-end',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            padding: 20,
            marginBottom: 20,
            position: 'relative',
            bottom: 100
        },
        title:{
        fontSize: 20,
        fontWeight: '700'
        },
        count:{
        fontSize: 20,
        fontWeight: '700'
        },
        button:{
            
        }
        
    });

    return styles;
}

export default useStyleRootBasket;