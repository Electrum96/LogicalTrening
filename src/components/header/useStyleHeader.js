import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleHeader () {
    const styles = StyleSheet.create({
        headerWrap:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
            paddingHorizontal: 20,
            backgroundColor: COLORS.accentGreen
        }
        
    });

    return styles;
}

export default useStyleHeader;