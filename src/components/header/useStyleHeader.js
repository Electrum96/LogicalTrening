import {StyleSheet} from 'react-native';

function useStyleHeader () {
    const styles = StyleSheet.create({
        headerWrap:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center'
        }
        
    });

    return styles;
}

export default useStyleHeader;