import {StyleSheet} from 'react-native';

function useStyleRootCart () {
    const styles = StyleSheet.create({
        listWrap:{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: 20,
            gap: 20
        }
        
    });

    return styles;
}

export default useStyleRootCart;