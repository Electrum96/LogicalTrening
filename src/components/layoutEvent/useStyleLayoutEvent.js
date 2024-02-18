import { Dimensions, StyleSheet } from 'react-native';

function useStyleLayoutEvent() {
    const styles = StyleSheet.create({
        layout: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            
        },
        icon: {
            marginTop: 20,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30
        },
        container: {
            paddingLeft: 15
        }
});

return styles;

}

export default useStyleLayoutEvent;