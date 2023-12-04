import {StyleSheet} from 'react-native';

function useStyleHeader () {
    const styles = StyleSheet.create({
        headerWrap:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10
        }
        
    });

    return styles;
}

export default useStyleHeader;