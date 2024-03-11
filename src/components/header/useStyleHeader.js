import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleHeader () {
    const styles = StyleSheet.create({
        headerWrap:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
            backgroundColor: COLORS.accentGreen,
            paddingHorizontal: 20
        }
        
    });

    return styles;
}

export default useStyleHeader;