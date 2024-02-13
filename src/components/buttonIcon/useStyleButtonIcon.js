import {StyleSheet} from 'react-native';

function useStyleButtonIcon () {
    const styles = StyleSheet.create({
        btn:{
            borderRadius: 10,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center'
            
        }
        
    });

    return styles;
}

export default useStyleButtonIcon;