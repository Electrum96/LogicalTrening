import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootHome () {
    const styles = StyleSheet.create({
        pageWrapper:{
            backgroundColor: COLORS.accentBg,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            
        },
        listWrap:{
            gap: 10,
            paddingHorizontal: 20,
            width: '100%',
            height: '60%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 20
        },
        logo:{
            width: '45%',
            height: '15%',
            alignSelf: 'center',
            marginVertical: 20
        },
       
        
    });

    return styles;
}

export default useStyleRootHome;