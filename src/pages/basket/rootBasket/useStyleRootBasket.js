import {StyleSheet} from 'react-native';

function useStyleRootBasket () {
    const styles = StyleSheet.create({
        list:{
            paddingVertical: 20,
            gap: 30
        },
        footer:{
            backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '10%',
            padding: 20,
            marginBottom: 20
        },
        title:{
        fontSize: 20,
        fontWeight: '700'
        },
        count:{
        fontSize: 20,
        fontWeight: '700'
        }
        
    });

    return styles;
}

export default useStyleRootBasket;