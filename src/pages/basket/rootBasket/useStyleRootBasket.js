import {StyleSheet} from 'react-native';

function useStyleRootBasket () {
    const styles = StyleSheet.create({
        list:{
            paddingVertical: 20,
            gap: 30
        }
        
    });

    return styles;
}

export default useStyleRootBasket;