import {StyleSheet} from 'react-native';

function useStyleRootCart () {
    const styles = StyleSheet.create({
        listWrap:{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: 20,
            gap: 20
        },
        buttonsListWrap:{
            paddingVertical: 10,
            gap: 20,
            justifyContent: 'space-between',
            flex: 1
        },
      
        
    });

    return styles;
}

export default useStyleRootCart;