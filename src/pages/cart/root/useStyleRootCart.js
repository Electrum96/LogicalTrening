import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootCart () {
    const styles = StyleSheet.create({
        listWrap:{
            flexDirection: 'column',
            flexWrap: 'wrap',
            paddingVertical: 10,
            gap: 20
        },
        buttonsListWrap:{
            width: '100%',
            height: '80%',
            flexDirection:'column',
            alignContent: 'center',
            flexWrap: 'wrap',
            backgroundColor: COLORS.lightGreen,
            borderBottomWidth: 1,
            borderBottomLeftRadius: 10,
            gap: 10,
            paddingTop: 10
        },
      
        
    });

    return styles;
}

export default useStyleRootCart;