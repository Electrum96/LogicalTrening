import {Dimensions, StyleSheet} from 'react-native';

function useStyleLayout ({color}) {
    const styles = StyleSheet.create({
        layoutWrap:{
            backgroundColor: color,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'space-between',
            paddingBottom: 25
        }
        
    });

    return styles;
}

export default useStyleLayout;