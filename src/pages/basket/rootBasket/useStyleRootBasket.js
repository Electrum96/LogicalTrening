import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootBasket () {
    const styles = StyleSheet.create({
        contentBox:{
            padding: 15,
            marginVertical: 10,
            height: '70%',
            backgroundColor: COLORS.backgrounColor,
            justifyContent: 'center',
            position: 'relative',
            borderRadius: 20

        },
        list:{
            paddingVertical: 20,
            gap: 30
        },
        priceBox:{
            flex: 1,
            position: 'absolute',
            bottom: 10,
            right: 10,
            flexDirection: 'column',
            alignItems: 'flex-end',
          
        },
        titleWrapper: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '10%',
            width: '80%',
            borderBottomColor: COLORS.yellow,
            borderBottomWidth: 5,
            marginBottom: 20
        },
        title: {
            fontSize: 22,
            color: COLORS.white,
            fontWeight: '700'
        },

        count:{
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center'
        },

        buttonWrapper:{
            alignSelf: 'center',
            marginTop: 10
            
        },
        wrapperTotal:{
            width: 50,
            height: 50,
            backgrounColor: 'red'
        },
        container:{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },

        image:{
            width: 200,
            height: 200
        }
        
    });

    return styles;
}

export default useStyleRootBasket;