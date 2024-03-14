import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleLayoutEvent() {
    const styles = StyleSheet.create({
        layout: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
            
        },
        icon: {
            marginTop: 20,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            backgroundColor: COLORS.yellow
        },
        box: {
            paddingLeft: 15,
            
        }
});

return styles;

}

export default useStyleLayoutEvent;