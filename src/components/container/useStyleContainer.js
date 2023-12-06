import {StyleSheet} from 'react-native';

function useStyleContainer (full) {
    const styles = StyleSheet.create({
        container:{
            marginHorizontal: 20,
            flex: full ? 1 : 0
        }
        
    });

    return styles;
}

export default useStyleContainer;