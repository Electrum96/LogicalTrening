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
        },
        listBox:{
            height: '15%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            paddingTop: 10,
            gap: 10,
            backgroundColor: COLORS.lightGreen,
             
        }
        
    });

    return styles;
}

export default useStyleLayoutMain;