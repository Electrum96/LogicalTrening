import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootCart () {
    const styles = StyleSheet.create({
        listWrap:{
            flexDirection: 'column',
            flexWrap: 'wrap',
            paddingVertical: 10,
            gap: 20,
            borderBottomWidth: 2,
            borderColor: 'red'
        },
        buttonsListWrap:{
            width: '100%',
            height: '90%',
            borderBottomLeftRadius: 20,
            flexDirection:'column',
            alignContent: 'center',
            flexWrap: 'wrap',
            backgroundColor: COLORS.lightGreen,
            gap: 10,
            paddingTop: 10
        },
      
        
    });

    return styles;
}

export default useStyleRootCart;