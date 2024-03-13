import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootBasket () {
    const styles = StyleSheet.create({
        contentBox:{
            paddingHorizontal: 15,
            marginVertical: 20,
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
        footer:{
            flex: 1,
            position: 'absolute',
            bottom: 10,
            right: 10,
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginBottom: 20
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
            color: COLORS.dark,
            fontWeight: '700'
        },
        count:{
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center'
        },
        buttonWrapper:{
            alignSelf: 'center',
            
        }
        
    });

    return styles;
}

export default useStyleRootBasket;